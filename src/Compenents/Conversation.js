import React, {useEffect, useState} from "react";
import {Backend} from "../services/backend";

export const Conversation = (props) => {
    const[user, setUser] = useState([0]);
    const {conversations} = props;

    function trouve(userid){
        if(user!=0) {
            let test = user.find(element => element.id_user === userid);

            return test.e_mail;
        }

    }


    // Affiche la liste de toutes les conversations
    useEffect(() => {
        async function ListUsers() {
            try {
                let users = await Backend.getUser();
                setUser(users);
            } catch (e) {
                console.error(e);
            }
        }
        ListUsers();
    }, []);

    return(
<>
           {conversations.map((c, index) => (
                <>
               <li key={index} className="customList2">

                    <span>De <span style={{color:"black"}}>{trouve(c.id_user1)}</span><br />
                    {c.message}
                    </span>
                    <br />

                </li>
               <span style={{fontSize:"0.4em", float:"right", marginRight:"20px"}}>{c.date}</span>
               </>
            ))}


    </>
    )

}
