import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import LogiqueModale from "../LogiqueModale";
import ModaleE from "../ModaleE";

export default function ListeOffres() {
    // Hold the list of offers in the compenent state
    const [offres, setOffres] = useState([]);
    const [selectedOffre, setSelectedOffre] = useState();
    const [entreprise, setEntreprise] = useState();
    const {revele, toggle} = LogiqueModale();

    // Load the offers on component mounting
    useEffect(() => {
        async function fetchOffres() {
            try {
                let offres = await Backend.getOffres();
                setOffres(offres);
            } catch (e) {
                console.error(e);
            }
        }
        fetchOffres();
    }, []);

    useEffect(() => {
        async function selectOffer() {
            try {
                let entreprise = await Backend.getEntreprise(selectedOffre.id_entreprise);
                setEntreprise(entreprise[0]);
            } catch (e) {
                console.error(e);
            }
        }

        selectOffer();
    }, [selectedOffre]);

    return (
        <div>
            <h1>Liste des Offres</h1>
            <ul>
                {offres.map((o) => (
                    <li>
                    <a href="#" onClick={() => {
                        setSelectedOffre(o);toggle();
                    }}>
                    {o.id_offre} - {o.nom}
                    </a>
                    </li>
                ))}
            </ul>
            <ModaleE
                revele={revele}
                cache={toggle}
                offre ={selectedOffre}
                entreprise={entreprise}
            />

        </div>
    );
}
