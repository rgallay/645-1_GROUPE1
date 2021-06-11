import React, {useEffect, useState} from "react";
import {Backend} from "../services/backend";
import {Conversation} from "../Compenents/Conversation";
import SendMessage from "../SendMessage";

export default function ListeConversations() {

  const[conversations, setConversations] = useState([]);
  const[selectedconversation, setSelectedConversation] = useState([0]);
  const[messages, setMessages] = useState();

  //exemple de tableau à garder pour tester des champs si on ne récupère pas du backend
  const test= [  {text: 'Whatever the mind of man can conceive and believe, it can achieve.',
      author: 'Napoleon Hill'},
      {text: 'Strive not to be a success, but rather to be of value.',
          author: 'Albert Einstein'},
      {text: 'I attribute my success to this: I never gave or took any excuse.',
          author: 'Florence Nightingale'},
      {text: 'You miss 100% of the shots you don’t take.',
          author: 'Wayne Gretzky'}];

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
                setMessages(messages);
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
                  <thead>
                  <tr>
                      <th>Liste des conversations </th>
                      <th>Conversation sélectionnées</th>
                  </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                            <ul>
                                    {conversations.map((c, index) => (
                                        <li key={index} className="customList">
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
                                  {selectedconversation !=0 ? <Conversation conversations={messages} /> : null}
                              </ul>
                          </td>

                      </tr>
                  <tr>
                      <td></td>
                      <td className="specialTest">
                          <SendMessage />
                      </td>
                  </tr>

                  </tbody>
                  </table>
          </div>
          </>
  );
}
