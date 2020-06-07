import React from "react";
import Footer from "../../components/Footer/Footer";
import './Home.css';
import { NavLink } from "react-router-dom";
import logowhite from "../../img/logowhite.png";

export default function Home() {
    return (
        <div>
            <div className="jumbotron">
                <h2>
                    <img src={logowhite} className="logowhite" alt="logowhite" />
                </h2>
                <h3>Travelling made easy</h3>
                <h4>No more wasting time looking for<br/>
                information before your travels</h4>
                <NavLink to="/map" className="button">Travel alerts →</NavLink>
            </div>
            <Footer />
        </div>
    );
}
