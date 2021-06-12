import React, {useEffect, useState} from "react";
import {Backend} from "../services/backend";
import {Conversation} from "../Compenents/Conversation";
import SendMessage from "../SendMessage";
import {ID_USER_CONNECTED} from "../utils/request";
import {useHistory} from "react-router-dom";
import LogiqueModale from "../LogiqueModale";
import ModaleE from "../ModaleE";
import Modale from "../Modale";

export default function ListeConversations() {

  const[conversations, setConversations] = useState([]);
  const[selectedconversation, setSelectedConversation] = useState([0]);
  const[messages, setMessages] = useState(0);
  const {revele, toggle} = LogiqueModale();
  const [postulant, setPostulant] = useState();
  const history = useHistory();


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
                let messages = await Backend.getMessages(localStorage.getItem('idUserConnected'),selectedconversation.id_user2);
                //dans ces messages je récupère tous les messages de la conversation
                setMessages(messages);

                let candidat = await Backend.getPostulant(selectedconversation.id_user2);
                setPostulant(candidat[0]);

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
            history.push("/listeconversations");
        } catch (e) {
            console.error(e);
        }
    };

      /*  useEffect(() => {
        async function selectPostulant() {
            try {
                let candidat = await Backend.getPostulant(selectedconversation.id_user2);
                setPostulant(candidat[0]);
            } catch (e) {
                console.error(e);
            }
        }

        selectPostulant();
    }, []);*/

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
                          <button onClick={() => {toggle();}}>Profil</button>
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
                                       onClick={() => {setSelectedConversation(c);setPostulant(c.id_user2);}}>
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
                  <tr>
                      <td></td>
                      <td className="specialTest">
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
              />
          </div>
          </>
  );
}
