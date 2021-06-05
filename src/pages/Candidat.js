import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";


export default function Candidat(props) {
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
    }, []); /*permet de ne jamais re exécuté une deuxième fois, juste une fois à l'initialisation, exemple typique pour aller rechercher des données sur un serveur*/



    const copy = [...candidats]

    return (
        <div>
            <h3>Candidat</h3>
            <div>
                    <div>
                        <p>{props.nom} {props.prenom}</p>
                        <p> <calculateAge year={props.date_de_naissance} />  </p>
                        <p>{props.date_de_naissance}</p>

                        <br />
                    </div>

                    <div>
                        <img
                            alt="image vide"
                            src={props.url}
                            style={{ height: '20px', width: "22px" }}
                        />
                        <br />

                        <p>Description personnelle du candidat: <br/>{props.description}</p>
                        <p>Telephone: {props.telephone}</p>

                    </div>

                    <div>
                        <h3>Formations</h3>
                        <p>
                            <h4>Dates</h4>
                            <h4>Cursus</h4>
                            <h4>Diplômes</h4>

                        </p>
                    </div>

                    <div>
                        <h3>Expériences professionnelles</h3>
                        <p>
                            <h4>Années d'expériences</h4>
                            <h4>Poste occupé</h4>
                            <h4>Secteur d'activité</h4>
                            <h4>Tâches principales</h4>
                        </p>
                    </div>
                    <div>
                        <h3>Compétences</h3>
                        /* .map */
                        <ul>
                            <li>Compétences 1</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Langues</h3>
                        /* .map */
                        <ul>
                             <li>Langue 1</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Sofstskills</h3>
                        /* .map */
                        <ul>
                              <li>Softskill 1</li>
                        </ul>
                    </div>
                    <h4>Attente salariale</h4>
                    <p>100 000</p>
                    <h4>Disponibilité</h4>
                    <p>Attente salariale</p>


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
