import React from "react";
import './App.css';
import {Offre} from "./Compenents/Offre";



const ModaleE = (props) => {
    const {revele, cache, offre, entreprise} = props;

    return revele ? (
        <>
            <div className="overlay"/>
            <div className="wrapper">
                <div className="modal">
                    <button type="button" className="close" onClick={cache}>
                        <span>&lt; Retour</span>
                    </button>
                    <p>
                        <Offre offre ={offre} entreprise={entreprise} />
                    </p>
                </div>
            </div>

        </>
    ) : null;

}
export default ModaleE;
