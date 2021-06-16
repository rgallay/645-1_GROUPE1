import React, {useEffect, useState} from "react";
import {Backend} from "../services/backend";
import {Conversation} from "../Compenents/Conversation";
import SendMessage from "../SendMessage";
import {TYPE_USER_CONNECTED} from "../utils/request";
import {useHistory} from "react-router-dom";
import LogiqueModale from "../LogiqueModale";
import Modale from "../Modale";
import { ThemeContext} from "../ThemeContext"


export default function ListeConversations() {

    const[conversations, setConversations] = useState([]);
    const[selectedconversation, setSelectedConversation] = useState([0]);
    const[messages, setMessages] = useState([]);
    const {revele, toggle} = LogiqueModale();
    const [postulant, setPostulant] = useState();
    const [competence, setPostulantComp] = useState([]);
    const [softskill, setSoftskill] = useState([]);
    const [langues, setLangues] = useState([]);
    const [experience, setExperience] = useState([]);
    const [formations, setFormations] = useState([]);

    const history = useHistory();
    const user = localStorage.getItem(TYPE_USER_CONNECTED);
    const { theme, toggled, dark } = React.useContext(ThemeContext)

    function trouve(userid){
        if(user!=0) {
            let test = user.find(element => element.id_user === userid);

            return test.e_mail;
        }

    }


    useEffect(() => {
        async function afficheListConversations() {
            try {
                let conversations = await Backend.getChat(localStorage.getItem('idUserConnected'))
                setConversations(conversations);
            } catch (e) {
                console.error(e);
            }
        }
        afficheListConversations();
    }, []);

    //Permet de sélectionner la conversation que l'on veut afficher
    useEffect(() => {
        async function selectConv() {
            try {
                let messages = await Backend.getMessages(localStorage.getItem('idUserConnected'),selectedconversation.id_user2);
                setMessages(messages);

                if(localStorage.getItem('TYPE_USER_CONNECTED') == 1) {
                    let candidats = await Backend.postulants();
                    let candidat;
                    candidats.map(item => {
                        if (item.id_user === selectedconversation.id_user2) {
                            candidat = item;
                        }
                    });
                    setPostulant(candidat);

                    let candidatComp = await Backend.getCompetence(candidat.id_postulant);
                    setPostulantComp(candidatComp);

                    let softskill = await Backend.getSoftskills(candidat.id_postulant);
                    setSoftskill(softskill);

                    let langues = await Backend.getLangue(candidat.id_postulant);
                    setLangues(langues);

                    let experiences = await Backend.getExperience(candidat.id_postulant);
                    setExperience(experiences);

                    let formations = await Backend.getFormation(candidat.id_postulant);
                    setFormations(formations);

                }
            } catch (e) {
                console.error(e);
            }
        }
        selectConv();
    }, [selectedconversation]);


    const deleteMessage = async (e) => {
        e.preventDefault();

        try {
            await Backend.deleteChat(localStorage.getItem('idUserConnected'),selectedconversation.id_user2);
            history.go(0);
        } catch (e) {
            console.error(e);
        }
    };





    return (
        <>
            <div id="ListeConversation">

                <h1>Mes conversations</h1>

                <table>
                    <thead>
                    <tr>
                        <th>Liste des conversations </th>
                        <th>Conversation sélectionnées</th>
                        <th>

                            {(user == 1 && postulant!=undefined) ? <button style={{marginRight:'5px'}} onClick={() => {toggle();}}>Profil</button> : null}

                            <button
                                type="button"
                                onClick={toggled}
                                style={{
                                    backgroundColor: theme.backgroundColor,
                                    color: theme.color,
                                    outline: 'none',
                                    borderRadius: '20px'
                                }}
                                data-testid="toggle-theme-btn"
                            >
                                {!dark ? 'Grey' : 'Blue'} theme
                            </button>

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>

                            <ul>
                                {conversations.map((c, index) => (
                                    <li key={index} className="customList" >
                                        <a href="#"
                                           onClick={() => {setSelectedConversation(c);}}>
                                            {c.id_user1} {c.id_user2}
                                        </a><span> </span>
                                        <button className="deleteButton" onClick={deleteMessage}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td colSpan="2">
                            <ul >
                                {selectedconversation !=0 ? <Conversation conversations={messages} /> : null}
                            </ul>
                        </td>

                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2" className="specialTest">
                            <SendMessage user2={selectedconversation}/>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <div>
                <Modale
                    revele={revele}
                    cache={toggle}
                    postulant ={postulant}
                    competence={competence}
                    softskill={softskill}
                    langues={langues}
                    experience={experience}
                    formation={formations}
                />
            </div>
        </>
    );
}
