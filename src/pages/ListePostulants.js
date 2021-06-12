import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import {Postulant} from "../Compenents/Postulant";
import LogiqueModale from "../LogiqueModale";
import Modale from "../Modale";

export default function ListePostulants() {
    // Hold the list of companies in the component state
    const [postulants, setPostulants] = useState([]);
    const [selectedPostulant, setSelectedPostulant] = useState();
    const [postulant, setPostulant] = useState();
    const {revele, toggle} = LogiqueModale();

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

    useEffect(() => {
        async function selectPostulant() {
            try {
                let candidat = await Backend.getPostulant(selectedPostulant.id_user);
                setPostulant(candidat[0]);
                console.log(selectedPostulant.id_user);
            } catch (e) {
                console.error(e);
            }
        }

        selectPostulant();
    }, [selectedPostulant]);

    return (
        <div className="listInline">
            <h1>Liste des Postulants</h1>
            <ul>
                {postulants.map((c) => (
                    <li>
                        <a href="#"
                           onClick={() => {setSelectedPostulant(c);toggle();}}>
                            {c.id_user} - {c.date_de_naissance}
                        </a>
                    </li>
                ))}
            </ul>
            <Modale
                revele={revele}
                cache={toggle}
                postulant ={postulant}
            />
        </div>
    );
}
