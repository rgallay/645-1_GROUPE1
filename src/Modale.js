import React from "react";
import './App.css';
import {Postulant} from "./Compenents/Postulant";



const Modale = (props) => {
    const {revele, cache, postulant} = props;

    return revele ? (
        <>
            <div className="overlay"/>
            <div className="wrapper">
                <div className="modal">
                    <button type="button" className="close" onClick={cache}>
                        <span>&lt; Retour</span>
                    </button>
                    <p>
                        <Postulant postulant={postulant}/>
                    </p>
                </div>
            </div>

        </>
    ) : null;

}
export default Modale;
