import React from "react";
import './App.css';
import {Postulant} from "./Compenents/Postulant";



const Modale = (props) => {
    const {revele, cache, postulant, competence, softskill, langues, experience, formation} = props;

    return revele ? (
        <>
            <div className="overlay"/>
            <div className="wrapper">
                <div className="modal">
                    <button type="button" className="close" onClick={cache}>
                        <span>&lt; Retour</span>
                    </button>
                    <p>
                        <Postulant postulant={postulant} competence={competence} softskill={softskill} langues={langues} experience={experience} formation={formation}/>
                    </p>
                </div>
            </div>

        </>
    ) : null;

}
export default Modale;
