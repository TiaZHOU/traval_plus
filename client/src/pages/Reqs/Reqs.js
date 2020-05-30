import React, { Component } from "react";
import Select from 'react-select';
import Footer from "../../components/Footer/Footer";
import "./Reqs.css";

const BASE_URL = "https://info30005travelplus.herokuapp.com";
const CountryMenu = require("./CountryMenu");

export default class Visas extends Component {
    constructor(props) {
        super(props);
        this.state = { country: "" };
    }

    handleChange = country => {
        this.setState({ country });
        fetch(BASE_URL + `/requirement/visa/` + country.value)
            .then(res => res.json())
            .then(visas => this.setState({visas}));

        fetch(BASE_URL + `/requirement/immunisation/` + country.value)
            .then(res => res.json())
            .then(immunisations => this.setState({immunisations}, () =>
                console.log('Immunisations fetched...', immunisations)));
    };

    render() {
        const { country } = this.state;

        return (
            <div>
                <h2>Travel reqs</h2>
                <h4> Search for travel docs for 198 countries around the world! </h4>
                <h3>HEALTH RISKS DISCLAIMER</h3>
                <p>The following information is intended as a guide only and is not intended to replace professional
                    medical advice.</p>
                <p>Travel+ cannot guarantee that the following information is complete, up-to-date, accurate or error
                    free. You therefore view the following information at your own risk.</p>
                <p>You should obtain specific travel health advice in relation to your individual needs and your
                    intended travel, including advice on vaccinations, anti-malarial and other medications based on
                    your past vaccination history, your present medical condition and your intended itinerary.</p>
                <p>To continue you must accept this disclaimer by clicking the button below.</p>

                <Select
                    className="CountryMenu"
                    options={CountryMenu.options}
                    value={ country }
                    placeholder="Select a country"
                    onChange={(country) => this.handleChange(country)}
                />

                <ul className="result">
                    {this.state.visas ?
                        this.state.visas.map(visa =>
                        <li key={visa.id}> { visa.visa_requirement} </li>
                    ) : <div></div>
                    }
                </ul>

                <ul className="result">
                    {this.state.immunisations ?
                        this.state.immunisations.map(immunisation =>
                            <p key={immunisation.country}> { immunisation.immunisation_req} </p>
                        ) : <div></div>
                    }
                </ul>

                <Footer/>
            </div>
        );
    }
}