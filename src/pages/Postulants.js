import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import AppChatAPI from "../services/chatAPI_calling";

export default function Postulants() {
    // Hold the list of companies in the component state
    const [postulants, setPostulants] = useState([]);

    // Load the companies on component mounting
    useEffect(() => {
        async function fetchPostulants() {
            try {
                let postulants = await Backend.postulants();
                setPostulants(postulants);
            } catch (e) {
                console.error(e);
            }
        }

        fetchPostulants();
    }, []);

 //   const compagnieConnected =

    return (
        <div>
            <h1>List of Postulants</h1>
            <ul>
                {postulants.map((c) => (
                    <li key={c.id_postulant}>{c.nom}</li>
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
