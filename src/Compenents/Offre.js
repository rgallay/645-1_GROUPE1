import React from "react";
import {formateDate} from "../utils/FormatDate";
export const Offre = (props) => {
    const { offre, entreprise } = props;

    return(
        <div className="offre">
            <div>
                <h3>Profil de l'entreprise et offre</h3>
                <h3>Nom: {entreprise.nom}</h3>
                {entreprise.image_url == undefined ? (<img
                    alt={entreprise.image_url}
                    src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    style={{ height: '100px', width: "100px", float:"left", margin:"20px" }}
                />) : (<img
                        alt={entreprise.image_url}
                        src={entreprise.image_url}
                        style={{ height: '100px', width: "100px", float:"left", margin:"20px" }}
                    />)}
                <br />
                <p>Adresse : {entreprise.adresse} <br /> {entreprise.adresse_suplémentaire}
                    <br />{entreprise.NPA} - {entreprise.localite}</p>
                <div>
                    <p>Description Entreprise : {entreprise.description}</p>
                </div>
                <p>Type d'entreprise: {entreprise.type_entreprise}</p>
                <p>Secteur d'activité: {entreprise.secteur}</p>
                <p>Notre éthique: {entreprise.ethique}</p>
                <p>Nos labels: {entreprise.label}</p>
                <p>Bénéfices externes:
                    <ul>
                        <li>{entreprise.benefice_externe_1}</li>
                        <li>{entreprise.benefice_externe_2}</li>
                        <li>{entreprise.benefice_externe_3}</li>
                    </ul></p>
            </div>
            <div className="cadre">
                <h4>Offre proposée</h4>
                <h5>Titre: {offre.nom}</h5>
                <p>Taux: {offre.taux}</p>
                <p>Contrat: {offre.contrat}</p>
                <p>Adresse: {offre.npa} {offre.ville}</p>
                <p>Salaire: {offre.salaire_max} CHF</p>
                <p>Durée: {offre.duree}</p>
                <p>Disponibilité souhaitée: {formateDate(offre.dispo)}</p>
                <p>Cahier des charges: <a style={{color:"black"}} href={offre.url} target={"_blank"}>Lien</a>
                </p>
            </div>
        </div>
    );
}
