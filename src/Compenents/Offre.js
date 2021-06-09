import React from "react";

export const Offre = (props) => {
    const {offre, entreprise} = props;

    return(
        <div>
            <div>
                <h2>Entreprise</h2>
                <img src={entreprise.image_url} />
                <h3>{entreprise.nom}</h3>
                <body>{entreprise.NPA} {entreprise.localite}</body>
            </div>

            <div>
                <h4>Offre</h4>
                <h5>{offre.nom}</h5>
                <body>{offre.npa} {offre.ville}</body>
            </div>
        </div>
    )
}