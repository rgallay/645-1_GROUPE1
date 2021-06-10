import React, { useState } from "react";
import { Backend } from "../services/backend";
import { ID_USER_CONNECTED, TOKEN_STORAGE_KEY, TYPE_USER_CONNECTED } from "../utils/request";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      let loginData = await Backend.login(email, password);

      let users = await Backend.getUser();
      let userConnected;

//     let userConnected = users.find(element => element.e_mail === email);
      users.map(item => {
        if (item.e_mail === email) {
          userConnected = item;
        }
      });

      // Save the token to localStorage & redirect to the home page
      localStorage.setItem(TOKEN_STORAGE_KEY, loginData.token);
      localStorage.setItem(ID_USER_CONNECTED, userConnected.id_user);
      localStorage.setItem(TYPE_USER_CONNECTED, userConnected.isEntreprise);
      // Redirect to the home page
      history.push("/listeconversation");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="E-mail"
          type="email"
          onChange={handleEmailChange}
          value={email}
        />
        <br />
        <input
          required
          placeholder="Password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
