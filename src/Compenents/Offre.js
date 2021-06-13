import React from "react";

export const Offre = (props) => {
    const { offre, entreprise } = props;

    return(
        <div className="offre">
            <div>
                <h3>Profil de l'entreprise et offre</h3>
                <h3>Nom: {entreprise.nom}</h3>
                <img
                    alt={entreprise.image_url}
                    src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    style={{ height: '100px', width: "100px", float:"left", margin:"20px" }}
                />
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
                <body>{offre.npa} {offre.ville}</body>
            </div>
        </div>
    );
}