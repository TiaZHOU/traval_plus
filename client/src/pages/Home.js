import React from "react";
import './Home.css';

export default function Home() {
    return (
        <div>
            <section className="jumbotron">
                <div className="container">
                    <div className="row text-center">
                        <h2>Travel+</h2>
                        <h4>Travelling made easy</h4>
                        <a className="btn btn-primary" role="button">Start now</a> {/* add href */}
                    </div>
                </div>
            </section>
            <footer>
                <p>&copy; 2020 Travel+</p>
                <p>INFO30005 project by Angelina Lim, Tianqi Zhou, Zhuo Lin Chai and Angela
                        Theodora Nubary</p>
            </footer>
        </div>
    );
}
