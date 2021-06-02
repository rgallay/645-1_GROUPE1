import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";


export default function Candidat() {
    // Hold the list of companies in the component state
    const [candidats, SetCandidat] = useState([]);

    // Load the companies on component mounting
    useEffect(() => {
        async function fetchCandidat() {
            try {
                let candidats = await Backend.candidats();
                SetCandidat(candidats);
            } catch (e) {
                console.error(e);
            }
        }

        fetchCandidat();
    }, []);


   /* let calculateAge = (props) => {
        currentDate.getFullYear() - new Date(this.props.year)
    }*/


    return (
        <div>
            <h1>Candidat</h1>
            <div>
                {candidats.map((c) => (
                    <div>
                        <p>{c.nom} {c.prenom}</p>
                        <p> {c.date_de_naissance}  {c.date_de_naissance}} </p>
                        <br />


                    <img
                        alt="Baltringue vide"
                        src={c.url}
                        style={{ height: '20px'}}
                    />
                    <br />

                    <p>Description personnelle du candidat: <br/>{c.description}</p>
                    <p>Telephone: {c.telephone}</p>

                    </div>

                ))}
            </div>
        </div>
    );


}
