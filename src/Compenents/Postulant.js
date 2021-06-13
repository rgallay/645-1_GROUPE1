import React from "react";
import {formateDate, calculDate} from "../utils/FormatDate";

export const Postulant = (props) => {
    const {postulant, competence, softskill, langues, experience} = props;
    return (
        <div className="postulant">
            <h3>Profil du candidat</h3>
            <div>
                <div className="cadre"className="hiddenclass">
                    <p>{postulant.nom} {postulant.prenom}</p>
                    <p> Date de naissance :   {formateDate(postulant.date_de_naissance)}  </p>
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
                    <p className="cadre">Contact: {postulant.telephone}</p>
                </div>

                <div className="cadre">
                    <h5>Formations</h5>
                    <p>
                        <h5>Dates</h5>
                        {postulant.url}
                        <h4>Cursus</h4>
                        <h4>Diplômes</h4>

                    </p>
                </div>

                <div className="cadre">
                    <h5>Expériences professionnelles</h5>
                    <ul>
                    {experience.map((c) => (
                        <>
                        <li>
                            Année d'expérience:<span> </span>
                            {calculDate(c.date_fin, c.date_debut)}

                            <br />
                            Poste occupé : {c.poste}<br />
                            Secteur d'activité : {c.id_secteur}<br />
                            Entreprise: {c.entreprise}<br />
                            Tâches principales :{c.description}
                        </li><br />
                        </>
                    ))}
                    </ul>
                        <h5>Années d'expériences</h5>

                        <h5>Poste occupé</h5>
                        <h5>Secteur d'activité</h5>
                        <h5>Tâches principales</h5>

                </div>
                <div className="cadre">
                    <h5>Compétences</h5>

                    <h5>COMPETENCES</h5>
                    <ul>
                        {competence.map((c) => (
                            <li>
                                {c.competence}
                            </li>
                        ))}
                    </ul>

                </div>

                <div  className="cadre">
                    <h4>Langues</h4>

                    <ul>
                        {langues.map((c) => (
                            <>
                            <li>
                                Langue: {c.langue} - Niveau: {c.niveau} - Certificat: {c.certificat}<br />
                                Séjour:
                                <ul>

                                {c.sejours.map((d) => (
                                    <li>
                                        Pays: {d.pays} <br />Type: {d.type} <br />Date: {d.debut} - {d.fin}
                                    </li>
                                ))}
                                </ul>
                            </li><br />
                            </>
                        ))}
                    </ul>
                </div>
                <div  className="cadre">
                    <h4>Sofstskills</h4>

                    <ul>
                        {softskill.map((c) => (
                            <li>
                                {c.softskill}
                            </li>
                        ))}
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


