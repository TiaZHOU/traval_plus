import React from "react";
import { NavLink } from "react-router-dom";
import "../Home/Home.css";
import Footer from "../../components/Footer/Footer";

export default function Help() {
    return (
        <div>
            <section className="jumbotron">
                <h1>No idea about what to do next?</h1>
                <a className="option_btn">
                    <p>
                        <NavLink to="/travel-docs">Find a destination</NavLink>
                    </p>
                    <p>
                        <NavLink to="/forum">Check what others talking about</NavLink>
                    </p>
                    <p>
                        <NavLink to="/travel-tasks">Prepare for a travel plan</NavLink>
                    </p>
                    <p>
                        <NavLink to="/Contact">Contact Us</NavLink>
                    </p>
                </a>
            </section>
            <Footer/>
        </div>
    );
}
