import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import {Offre} from "../Compenents/Offre";

export default function ListeOffres() {
    // Hold the list of offers in the compenent state
    const [offres, setOffres] = useState([]);
    const [selectedOffre, setSelectedOffre] = useState();
    const [entreprise, setEntreprise] = useState();

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
                        setSelectedOffre(o);
                    }}>
                    {o.id_offre} - {o.nom}
                    </a>
                    </li>
                ))}
            </ul>
            <div>
                {selectedOffre && entreprise ? (<Offre offre ={selectedOffre} entreprise={entreprise} />) :null }
            </div>
        </div>
    );
}
