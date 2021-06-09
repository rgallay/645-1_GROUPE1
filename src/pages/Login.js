import React, { useState } from "react";
import { Backend } from "../services/backend";
import { ID_USER_CONNECTED, TOKEN_STORAGE_KEY } from "../utils/request";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("group1React@hevs.ch");
  const [password, setPassword] = useState("group1react");
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

      const userConnected = users.find(element => element.email = email);

      // Save the token to localStorage & redirect to the home page
      localStorage.setItem(TOKEN_STORAGE_KEY, loginData.token);
      localStorage.setItem(ID_USER_CONNECTED, userConnected.id_user);

      // Redirect to the home page
      history.push("/conversation");
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
