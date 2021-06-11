import React from "react";
import NavigationEntreprise from "./NavigationEnterprise";

export const LoggedType = (props) => {
    const {type} = props;
    console.log(type)
    return(
        <>
        <p>toto {props.user_id}</p>
        <NavigationEntreprise />
        </>

    );
}
