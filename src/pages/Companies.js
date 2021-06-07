import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import AppChatAPI from "../services/chatAPI_calling";

export default function Companies() {
  // Hold the list of companies in the component state
  const [companies, setCompanies] = useState([]);

  // Load the companies on component mounting
  useEffect(() => {
    async function fetchCompanies() {
      try {
        let companies = await Backend.companies();
        setCompanies(companies);
      } catch (e) {
        console.error(e);
      }
    }

    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>List of Companies</h1>
      <ul>
        {companies.map((c) => (
          <li key={c.id_entreprise}>{c.nom}</li>
        ))}
      </ul>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chat" component={AppChatAPI} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
