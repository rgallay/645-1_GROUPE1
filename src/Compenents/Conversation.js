import React from "react";

export const  Conversation = (props) => {
    const {conversation} = props;

    return(
<>
        <li style={{fontSize:"0.7em"}}>
            De <span style={{color:"grey"}}>{conversation.nom_postulant}</span> le {conversation.date}<br /><br />
            {conversation.message}
        </li>

    </>
    )

}
