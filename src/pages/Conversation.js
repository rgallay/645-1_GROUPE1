import React, {useEffect} from "react";
import {Backend} from "../services/backend";
import {ID_USER_CONNECTED} from "../utils/request";

export default function Conversation() {

  const[conversations, setConversations] = React.useState([]);

  // Load the companies on component mounting
  useEffect(() => {
    async function afficheConversations() {
      try {
        let conversations = await Backend.getChat(5)
        setConversations(conversations);
      } catch (e) {
        console.error(e);
      }
    }

  afficheConversations();
}, []);

  return (
      <div>
        <h1>Mes conversations</h1>
        <ul>
          {conversations.map((c) => (
              <li key={c.nom_entreprise}>{c.nom_entreprise}</li>
          ))}
        </ul>
      </div>
  );
}