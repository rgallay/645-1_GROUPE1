import React from "react";
import {formateDate, calculDate} from "../utils/FormatDate";

export const Postulant = (props) => {
    const {postulant, competence, softskill, langues, experience, formation} = props;
    return (
        <div className="postulant">
            <h3>Profil du candidat</h3>
            <div>
                <div className={["cadre", "hiddenclass"].join(" ")}>
                    <p>{postulant.nom} {postulant.prenom}</p>
                    <p> Date de naissance :   {formateDate(postulant.date_de_naissance)}  </p>
                    <p>{postulant.sexe}</p>
                    <p>{postulant.adress}<br/>{postulant.npa} - {postulant.localite}</p>

                    <br />
                </div>

                <div className="cadre">
                    {postulant.url_photo== undefined || postulant.url_photo== " " ? (<img
                        alt={"noImage"}
                        src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
                        style={{ height: '100px', width: "100px", float:"left", margin:"20px" }}
                    />) : (<img
                            alt={"No Image"}
                            src={postulant.url_photo}
                            style={{ height: '100px', width: "100px", float:"left", margin:"20px" }}
                        />)}
                    <br />
                    <p>Description personnelle du candidat: <br/>{postulant.description}</p>
                    <p className="cadre">Contact: {postulant.telephone}</p>
                </div>

                <div className="cadre">
                    <h5>Formations</h5>
                    <ul>
                        {formation.map((c, index) => (
                            <>
                                <li className="cadre" key={index}>
                                    <h5 >{c.diplome}</h5>
                                    <h5>Dates</h5>
                                    Début : {formateDate(c.date_debut)}<br /> Fin : {formateDate(c.date_fin)}
                                    <h5>Cursus</h5>
                                    {c.cursus}
                                    <h5>Diplôme</h5>
                                    {c.degree}
                                </li><br />
                            </>
                        ))}
                    </ul>
                </div>

                <div className="cadre">
                    <h5>Expériences professionnelles</h5>
                    <ul>
                        {experience.map((c, index) => (
                            <>
                                <li key={index}>
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

                </div>
                <div className="cadre">
                    <h5>Compétences</h5>

                    <h5>COMPETENCES</h5>
                    <ul>
                        {competence.map((c, index) => (
                            <li key={index}>
                                {c.competence}
                            </li>
                        ))}
                    </ul>

                </div>

                <div  className="cadre">
                    <h4>Langues</h4>

                    <ul>
                        {langues.map((c, index) => (
                            <>
                                <li key={index}>
                                    Langue: {c.langue} - Niveau: {c.niveau} - Certificat: {c.certificat}<br />
                                    Séjour:
                                    <ul>

                                        {c.sejours.map((d) => (
                                            <li key={d.id_sejour}>
                                                Pays: {d.pays} <br />Type: {d.type} <br />Date: {formateDate(d.debut)} - {formateDate(d.fin)}
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
                        {softskill.map((c, index) => (
                            <li key={index}>
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
