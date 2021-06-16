import React, {useEffect, useState} from "react";
import "../App.css";
import { Backend } from "../services/backend";
import { ID_USER_CONNECTED, TOKEN_STORAGE_KEY, TYPE_USER_CONNECTED } from "../utils/request";
import { useHistory } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setLog] = useState("false");
    const history = useHistory();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let loginData = await Backend.login(email, password);
            let users = await Backend.getUser();
            let userConnected;

            users.map(item => {
                if (item.e_mail === email) {
                    userConnected = item;
                }
            });

            localStorage.setItem(TOKEN_STORAGE_KEY, loginData.token);
            localStorage.setItem(ID_USER_CONNECTED, userConnected.id_user);
            localStorage.setItem(TYPE_USER_CONNECTED, userConnected.isEntreprise);

            history.go(0);
        } catch (e) {
            console.error(e);
        }
    };

    const logout = async (e) => {
        e.preventDefault();

        try {
            localStorage.clear();
            history.go(0);
        } catch (e) {
            console.error(e);
        }
    };
    useEffect(()=> {
        if(localStorage.getItem(ID_USER_CONNECTED)== undefined) {
            setLog(false);
        }else {
            setLog(true);
        }
    })

    return (
        <div className="login">
            <h4>{isLoggedIn==false ? 'Connectez-vous' : 'Vous êtes connectés'}</h4>

            {isLoggedIn==false ? (<form onSubmit={handleSubmit}>
                <input
                    required
                    placeholder="E-mail"
                    type="email"
                    onChange={handleEmailChange}
                    value={email}
                />
                <br />
                <input
                    required
                    placeholder="Password"
                    type="password"
                    onChange={handlePasswordChange}
                    value={password}
                />
                <br />
                <button type="submit">Login</button>

            </form>) : (<button type="submit" onClick={logout}>Logout</button>)}
        </div>
    );
}
