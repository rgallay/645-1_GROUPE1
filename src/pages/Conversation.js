import React, {useEffect} from "react";
import {Backend} from "../services/backend";
import {ID_USER_CONNECTED} from "../utils/request";

export default function Conversation() {

  const[conversations, setConversations] = React.useState([]);

  // Load the companies on component mounting
  useEffect(() => {
    async function afficheConversations() {
      try {
        let conversations = await Backend.getChat(localStorage.getItem('idUserConnected'))
        setConversations(conversations);
      } catch (e) {
        console.error(e);
      }
    }

  afficheConversations();
}, []);

  console.log(conversations);
  return (
      <div>
        <h1>Mes conversations</h1>
        <ul>
            <li>
              {conversations.map((c) => (
                  <p>{c.id_user1} {c.id_user2}</p>
              ))}
            </li>
        </ul>
      </div>
  );
}
