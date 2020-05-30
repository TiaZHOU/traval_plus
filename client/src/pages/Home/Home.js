import React from "react";
import Footer from "../../components/Footer/Footer";
import './Home.css';

export default function Home() {
    return (
        <div>
            <section className="jumbotron">
                <h2>Travel+</h2>
                <h4>Travelling made easy</h4>
                <NavLink to="/alert">Start</NavLink>
            </section>
            <Footer />
        </div>
    );
}
