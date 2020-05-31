import React, { Component } from "react";
import Select from "react-select";
import Footer from "../../components/Footer/Footer";
import "./Reqs.css";

const BASE_URL = "https://info30005travelplus.herokuapp.com";
const CountryMenu = require("./CountryMenu");

export default class Visas extends Component {
    constructor(props) {
        super(props);
        this.state = { country: "", showPopup: false };
    }

    handleChange = country => {
        this.setState({ country });
        fetch(BASE_URL + `/requirement/visa/` + country.value)
            .then(res => res.json())
            .then(visas => this.setState({ visas }));

        fetch(BASE_URL + `/requirement/immunisation/` + country.value)
            .then(res => res.json())
            .then(immunisations =>
                this.setState({ immunisations }, () =>
                    console.log("Immunisations fetched...", immunisations)
                )
            );
    };

    render() {
        const { country } = this.state;

        return (
            <div className="page">
                <h2>Travel reqs</h2>
                <h4>Search for travel docs for 198 countries around the world!</h4>
                <h3>HEALTH RISKS DISCLAIMER</h3>
                <p>The following information is intended as a guide only and is not intended to replace professional
                    medical advice.</p>
                <p>Travel+ cannot guarantee that the following information is complete, up-to-date, accurate or error
                    free. You therefore view the following information at your own risk.</p>
                <p>You should obtain specific travel health advice in relation to your individual needs and your
                    intended travel, including advice on vaccinations, anti-malarial and other medications based on
                    your past vaccination history, your present medical condition and your intended itinerary.</p>
                <p>To continue you must accept this disclaimer by clicking the button below.</p>

                <button type="button">Agree</button>

                <Select
                    className="CountryMenu"
                    options={CountryMenu.options}
                    value={ country }
                    placeholder="Select a country"
                    onChange={(country) => this.handleChange(country)}
                />

                <div className="VisaReq">
                    {this.state.visas ?
                        this.state.visas.map(visa =>
                            <p key={visa.id}> {visa.visa_requirement} </p>
                        ) : <div></div>
                    }
                </div>

                <div className="ImmunisationReq">
                    {this.state.immunisations ?
                        this.state.immunisations.map(immunisation =>
                            <table key={immunisation.country}>
                                <tr>
                                    <th>Vaccine</th>
                                    <th>Details</th>
                                </tr>
                                {zip(immunisation.immunisation_req, immunisation.immunisation_info).map(data =>
                                    <tr>
                                        <td>{data[0]}</td>
                                        <td>{data[1]}</td>
                                    </tr>
                                )}
                            </table>
                        ) : <div></div>
                    }
                </div>

                <p>Source: blablabla</p>

                <Footer/>
            </div>
        );
    }
}
const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]); // Array mapping function