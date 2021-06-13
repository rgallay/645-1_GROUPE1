import React, {useEffect, useState} from "react";
import {Backend} from "../services/backend";


export const Postulant = (props) => {
    const {postulant } = props;
//   const {competence} = props.competence;
    /*    const {formations} = props.formations;
       const {langues} = props.langues;
       const {experience} = props.experience;
       const {sejours} = props.sejours;
       const {softSkills} = props.softSkills;
   */
  //  console.log(postulant.id_user)



    return (
        <div className="postulant">
            <h3>Profil du candidat</h3>
            <div>
                <div className="cadre"className="hiddenclass">
                    <p>{postulant.nom} {postulant.prenom}</p>
                    <p> Date de naissance :  {postulant.date_de_naissance}  </p>
                    <p>{postulant.sexe}</p>
                    <p>{postulant.adress}<br/>{postulant.npa} - {postulant.localite}</p>
                    <br />
                </div>

                <div className="cadre">
                    <img
                        alt={postulant.url}
                        src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
                        style={{ height: '100px', width: "100px", float:"left", margin:"20px" }}
                    />
                    <br />

                    <p>Description personnelle du candidat: <br/>{postulant.description}</p>
                    <p>{postulant.nom} {postulant.prenom}</p>
                    <p> Date de naissance :  {postulant.date_de_naissance}  </p>
                    <p>{postulant.sexe}</p>
                    <p>{postulant.adress}<br/>{postulant.npa} - {postulant.localite}</p>
                    <br />
                    <p className="cadre">Contact: {postulant.telephone}</p>
                </div>

                <div className="cadre">
                    <h5>Formations</h5>
                        { /*  formation.map((c) => (
                            <p>
                                <h5>Dates</h5>
                                <h6> Début : {c.date_debut}</h6>
                                <h6> Fin : {c.date_fin}</h6>

                                <h4>Cursus</h4>
                                {c.cursus}
                                <h4>Institut</h4>
                                {c.institut}
                                <h4>Diplôme</h4>
                                {c.degree}
                            </p>
                         )) */ }


                </div>

                <div className="cadre">
                    <h5>Expériences professionnelles</h5>
                    <p>
                        <h5>Années d'expériences</h5>
                        <h5>Poste occupé</h5>
                        <h5>Secteur d'activité</h5>
                        <h5>Tâches principales</h5>
                    </p>
                </div>
                <div className="cadre">
                    <h5>Compétences</h5>
                    <ul>
                        { /* competence.map((c) => (
                            <li>
                                {c.competence}
                            </li>
                        )) */ }
                    </ul>

                </div>

                <div  className="cadre">
                    <h4>Langues</h4>

                    <ul>

                    </ul>
                </div>
                <div  className="cadre">
                    <h4>Sofstskills</h4>

                    <ul>

                    </ul>
                </div>

                <div  className="cadre">
                <h5>Disponibilité: </h5>
                <p>{postulant.disponibilite}</p>
                <h5>Attente salariale: </h5>
                <p>{postulant.salaire_min} - {postulant.salaire_max}</p>
                </div>


            </div>
        </div>
    );


}


