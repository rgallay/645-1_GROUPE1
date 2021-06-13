import React from "react";
import { TOKEN_STORAGE_KEY } from "../utils/request";
import { Link } from "react-router-dom";

export default function Home() {
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        window.location = "/";
    };

    return (
        <>
            {!localStorage.getItem(TOKEN_STORAGE_KEY) ? (
                <Link className="App-link" to={`/login`}>
                    Login (Example)
                </Link>
            ) : (
                <a className="App-link" onClick={logout} href="/">
                    Logout
                </a>
            )}

            <Link className="App-link" to={`/companies`}>
                See List of Companies (Example)
            </Link>
            <Link className="App-link" to={`/conversation`}>
                Go To Conversation (Example)
            </Link>
            <Link className="App-link" to={`/postulants`}>
                See List of Postulants (Example)
            </Link>
        </>
    );
}