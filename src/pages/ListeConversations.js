import React, {useEffect, useState} from "react";
import {Backend} from "../services/backend";
import {Conversation} from "../Compenents/Conversation";
<<<<<<< Updated upstream

export default function ListeConversations() {

  const[conversations, setConversations] = useState([]);;
  const[selectedconversation, setSelectedConversation] = useState([]);;
  const[messages, setMessages] = useState([]);;
=======
import SendMessage from "../SendMessage";
import {ID_USER_CONNECTED} from "../utils/request";
import {useHistory} from "react-router-dom";
import LogiqueModale from "../LogiqueModale";
import Modale from "../Modale";

export default function ListeConversations() {

  const[conversations, setConversations] = useState([]);
  const[selectedconversation, setSelectedConversation] = useState([0]);
  const[messages, setMessages] = useState(0);
  const {revele, toggle} = LogiqueModale();
  const [postulant, setPostulant] = useState();

    const [competence, setCompetence] = useState(0);
    const [formations, setFormations] = useState();
    const [langues, setLangues] = useState();
    const [softSkills, setSoftSkils] = useState();
    const [experience, setExperience] = useState();

  const history = useHistory();

>>>>>>> Stashed changes

  // Affiche la liste de toutes les conversations
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
                //let messages = await Backend.getMessage(localStorage.getItem('idUserConnected'),selectedconversation.id_user2);
                let messages = await Backend.getMessages(1,2);
                //dans ces messages je récupère tous les messages de la conversation
<<<<<<< Updated upstream
                setMessages(messages[0]);
=======
                setMessages(messages);

                console.log(selectedconversation.id_user2);


>>>>>>> Stashed changes
            } catch (e) {
                console.error(e);
            }
        }

        selectConv();
    }, [selectedconversation]);

   useEffect(() => {
        async function recupPostulant() {
            try {
                let candidats = await Backend.postulants();

                let candidat;
                candidats.map(item => {
                    if (item.id_user === selectedconversation.id_user2) {
                        candidat = item;
                    }
                });


 //               let candidat = await Backend.getPostulant( selectedconversation.id_user2 );
                setPostulant(candidat);


/*                let competence = await Backend.getCompetence(postulant.id_postulant ) ;

                setCompetence(competence);

 */           } catch (e) {
                console.error(e);
            }
        }
        recupPostulant();
    }, [messages]);


<<<<<<< Updated upstream
=======
    const deleteMessage = async (e) => {
        e.preventDefault();
        try {
            await Backend.deleteChat(localStorage.getItem('idUserConnected'),selectedconversation.id_user2);
            history.push("/listeconversations");

        } catch (e) {
            console.error(e);
        }
    };
/*
    useEffect(() => {
        async function populatePostulant() {
            try {

                console.log(postulant.id_postulant);

                let competence = await Backend.getCompetence(  /* postulant.id_postulant ) ;
/*                let formations =  await Backend.getFormation(candidat.id_postulant);
                let langues =  await Backend.getLangue(candidat.id_postulant);
                let softSkills =  await Backend.getSoftskills(candidat.id_postulant);
                let experience =  await Backend.getExperience(candidat.id_postulant);

               setCompetence(competence[0]);
                setFormations(formations[0]);
                setLangues(langues[0]);
                setSoftSkils(softSkills[0]);
                setExperience(experience[0]);

            } catch (e) {
                console.error(e);
            }
        }
        populatePostulant();
    }, [postulant]);
*/


>>>>>>> Stashed changes
  return (
      <>
          <div id="ListeConversation">
            <h1>Mes conversations</h1>
              <table>
                  <tr>
                      <th>Liste des conversations </th>
<<<<<<< Updated upstream
                      <th>Conversation sélectionnées </th>
                  </tr>
=======
                      <th>Conversation sélectionnées</th>
                      <th>
                          <button onClick={() => { toggle();} }>Profil</button>
                      </th>
                  </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                            <ul>
                                    {conversations.map((c, index) => (
                                        <li key={index} className="customList">
                                    <a href="#"
                                       onClick={() => {setSelectedConversation(c);} }>
                                        {c.id_user1} {c.id_user2}
                                    </a><span> </span>
                                            <button className="deleteButton" onClick={deleteMessage}>Delete</button>
                                        </li>
                                    ))}
                            </ul>
                          </td>
                          <td>
                              <ul>
                                  {selectedconversation !=0 ? <Conversation conversations={messages} /> : null}
                              </ul>
                          </td>

                      </tr>
>>>>>>> Stashed changes
                  <tr>
                      <td>
                        <ul>
                                {conversations.map((c) => (
                                    <li className="customList">
                                <a href="#"
                                   onClick={() => {setSelectedConversation(c);}}>
                                    {c.id_user1} {c.id_user2}
                                </a><span> </span>
                                        <button className="deleteButton">Delete</button>
                                    </li>
                                ))}

                        </ul>
                      </td>
                      <td>

                          <ul>

                              {selectedconversation ? <Conversation conversation={messages} /> : null}

                          </ul>
                      </td>
                  </tr>

                  </table>
          </div>
<<<<<<< Updated upstream
=======
          <div>
              <Modale
                  revele={revele}
                  cache={toggle}
                  postulant ={postulant}


              />
          </div>
>>>>>>> Stashed changes
          </>
  );
}
