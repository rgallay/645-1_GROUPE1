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



    const copy = [...candidats]

    return (
        <div>
            <h3>Candidat</h3>
            <div>
                {candidats.map((c) => (
                    <div>
                        <p>{c.nom} {c.prenom}</p>
                        <p> <calculateAge year={c.date_de_naissance} />  </p>
                        <p>{c.date_de_naissance}</p>

                        <br />
                    </div>,
                    <div>
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

function calculateAge(props) {
    var currentDate = new Date();
    var birthday = new Date(this.props.year)
    var age = currentDate.getFullYear() - birthday.getFullYear()
    return age;
}
