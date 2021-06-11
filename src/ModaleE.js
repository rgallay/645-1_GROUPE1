import React from "react";
import './App.css';
import {Offre} from "./Compenents/Offre";
import {Backend} from "./services/backend";
import {useHistory} from "react-router-dom";


const ModaleE = (props) => {
    const {revele, cache, offre, entreprise} = props;
    const history = useHistory();


    const createConversation = async (e) => {
        e.preventDefault();

        try {
            await Backend.createChat(localStorage.getItem('idUserConnected'),entreprise.id_user);
            history.push("/listeconversations");
        } catch (e) {
            console.error(e);
        }
    };

    return revele ? (
        <>
            <div className="overlay"/>
            <div className="wrapper">
                <div className="modal">
                    <button type="button" className="contact" onClick={createConversation}>
                        <span>Contacter</span>
                    </button>
                    <button type="button" className="close" onClick={cache}>
                        <span>&lt; Retour</span>
                    </button>
                    <p>
                        {offre && entreprise ? (<Offre offre ={offre} entreprise={entreprise} />) :null }
                    </p>
                </div>
            </div>
        </>
    ) : null;

}
export default ModaleE;
