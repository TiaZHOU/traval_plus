import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../logo.png";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const responseGoogle = response => {
    console.log(response);
};

export default function Nav() {
    return (
        <nav>
            <a href="/">
                <img src={logo} className="logo" alt="logo" />
            </a>
            <ul className="menu">
                <li><NavLink to="/travel-docs">Travel Requirements</NavLink></li>
                <li><NavLink to="/alert">Alert Map</NavLink></li>
                <li><NavLink to="/travel-tasks">Planner</NavLink></li>
                <li><NavLink to="/forum">Forum</NavLink></li>
            </ul>

            <div className="loginControls">
                    <GoogleLogin
                        className="loginButton"
                        clientId="224843828266-862i7muvqmc3cr9nb7sep6d47itlu70k.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                    />
                    <GoogleLogout
                        className="logoutButton"
                        clientId="224843828266-862i7muvqmc3cr9nb7sep6d47itlu70k.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={responseGoogle}
                    />
            </div>
        </nav>
    );
}