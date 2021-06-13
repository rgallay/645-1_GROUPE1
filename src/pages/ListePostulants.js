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

    const [competence, setCompetence] = useState();
    const [formations, setFormations] = useState();
    const [langues, setLangues] = useState();
    const [sejours, setSejours] = useState();
    const [softSkills, setSoftSkils] = useState();
    const [experience, setExperience] = useState();


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
                let postulant = await Backend.getPostulant(selectedPostulant.id_user);

//                setPostulant(postulant);

                let competence = await Backend.getComptence( /* selectedPostulant.id_postulant */ 3 ) ;
                let formations =  await Backend.getFormation(selectedPostulant.id_postulant);
                let langues =  await Backend.getLangue(selectedPostulant.id_postulant);
                let sejours =  await Backend.getSejours(selectedPostulant.id_postulant);
                let softSkills =  await Backend.getSoftskills(selectedPostulant.id_postulant);
                let experience =  await Backend.getExperience(selectedPostulant.id_postulant);

                setPostulant(postulant);
                setCompetence(competence[0]);
                setFormations(formations[0]);
                setLangues(langues[0]);
                setSejours(sejours[0]);
                setSoftSkils(softSkills[0]);
                setExperience(experience[0]);

            } catch (e) {
                console.error(e);
            }
        }

        selectPostulant();
    }, [setSelectedPostulant]);

    return (
        <div className="listInline">
            <h1>Liste des Postulants</h1>
            <ul>
                {postulants.map((c) => (
                    <li>
                        <a href="#"
                           onClick={() => {setSelectedPostulant(c); toggle();}}>
                            {c.id_user} - {c.date_de_naissance}
                        </a>
                    </li>
                ))}
            </ul>
            <Modale
                revele={revele}
                cache={toggle}
                postulant ={postulant}
                competence = {competence}
                formations = {formations}
                langues = {langues}
                sejours = {sejours}
                softSkills = {softSkills}
                experience = {experience}
            />
        </div>
    );
}
