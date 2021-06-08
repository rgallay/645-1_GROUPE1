import React, { useEffect, useState } from "react";
import {Backend} from "../services/backend";


export default function Candidat(props) {

    let [postulant, setPostulant] = useState([]);

//On récupère un postulant
    useEffect(() => {

        async function getPostulant() {
            try {
                let postulant = await Backend.candidats()/{props}[0];
                setPostulant(postulant);
            } catch (e) {
                console.error(e);
            }
        }

        getPostulant();
    }, []);

    console.log(props);
    return (
        <div>
            <h3>Candidat</h3>
            <div>

                <div>
                    <p>{props.nom} {props.prenom}</p>
                    <p> {props.date_de_naissance}  </p>
                    <p></p>

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

                    <ul>

                    </ul>
                </div>

                <div>
                    <h3>Langues</h3>

                    <ul>

                    </ul>
                </div>
                <div>
                    <h3>Sofstskills</h3>

                    <ul>

                    </ul>
                </div>
                <h4>Attente salariale</h4>
                <p></p>
                <h4>Disponibilité</h4>
                <p>Attente salariale</p>


            </div>
        </div>
    );


}


