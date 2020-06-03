import React from "react";
import Footer from "../../components/Footer/Footer";
import './Home.css';
import { NavLink } from "react-router-dom";
import logowhite from "../../logowhite.png";

export default function Home() {
    return (
        <div>
            <div className="jumbotron">
                <h2>
                    <img src={logowhite} className="logowhite" alt="logowhite" />
                </h2>
                <h4>Travelling made easy</h4>
                <NavLink to="/map" className="button">Start</NavLink>
            </div>
            <Footer />
        </div>
    );
}
