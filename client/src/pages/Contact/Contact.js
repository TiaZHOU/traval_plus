import React from "react";
import { NavLink } from "react-router-dom";
import "../Home/Home.css";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
    return (
        <div>
            <section className="jumbotron">
                <h3>Please email to XXXXXX@gmail.com for us.</h3>
                <a className="btn" role="button">
                    <p>
                        <NavLink to="/">Back to home</NavLink>
                    </p>
                </a>{" "}
            </section>
            <Footer/>
        </div>
    );
}
