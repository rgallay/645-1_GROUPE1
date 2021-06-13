import React, { useState } from "react";
import { Login } from "./Login";
import { ID_USER_CONNECTED, TOKEN_STORAGE_KEY, TYPE_USER_CONNECTED } from "../utils/request";


const userContext = React.createContext(userType);
export { userContext };

export default function LoginContext() {
    const [userType, setUserType] = useState("");
    const [userId, setUserId] = useState("");

4

            // Save the token to localStorage & redirect to the home page
            localStorage.getItem(TOKEN_STORAGE_KEY);
            localStorage.getItem(ID_USER_CONNECTED);

            setUserType(localStorage.getItem(TYPE_USER_CONNECTED));
            // Redirect to the home page



        return (
            <userContext.Provider value={this.state.user}>
                <Main/>
            </userContext.Provider>
        );

}
