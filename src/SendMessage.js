import React, { useState } from "react";
import { Backend } from "./services/backend";
import {ID_USER_CONNECTED} from "./utils/request";
import { useHistory } from "react-router-dom";

export default function SendMessage(props) {
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { user2 } = props;


  const handleTexteChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let me = localStorage.getItem(ID_USER_CONNECTED);
      await Backend.sendMessage(me,user2.id_user2,message);
      setMessage("");
      history.go(0);

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          required
          placeholder="Bonjour je m'appelle Henri ... "
          type="text"
          onChange={handleTexteChange}
          style={{width: "500px", height: "87px", resize:"none"}}
          value={message}
        />
        <button type="submit" style={{marginLeft:"8px"}}>Envoyer</button>
      </form>
    </>
  );
}
