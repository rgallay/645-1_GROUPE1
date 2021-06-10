import React, {useEffect, useState} from "react";
import {Backend} from "../services/backend";
import {Conversation} from "../Compenents/Conversation";

export default function ListeConversations() {

  const[conversations, setConversations] = useState([]);;
  const[selectedconversation, setSelectedConversation] = useState([]);;
  const[messages, setMessages] = useState([]);;

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
                setMessages(messages[0]);
            } catch (e) {
                console.error(e);
            }
        }

        selectConv();
    }, [selectedconversation]);


  return (
      <>
          <div id="ListeConversation">

            <h1>Mes conversations</h1>

              <table>
                  <tr>
                      <th>Liste des conversations </th>
                      <th>Conversation sélectionnées </th>
                  </tr>
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
          </>
  );
}
