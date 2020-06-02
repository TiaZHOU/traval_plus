import React, { Component } from "react";
import Select from "react-select";
import Footer from "../../components/Footer/Footer";
import PopUp from "../../components/PopUp/PopUp";
import "./Reqs.css";

const BASE_URL = "https://info30005travelplus.herokuapp.com";
const CountryMenu = require("./CountryMenu");

export default class Reqs extends Component {
    constructor(props) {
        super(props);
        this.state = { country: "", show: true };
        this.toggleDiv = this.toggleDiv.bind(this);
    }

    toggleDiv = () => {
        const {show} = this.state;
        this.setState({show: false});
    };

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
            <div>
                <div>
                    <h2>Travel Requirements Finder</h2>
                    <p>Search for this visa requirements and recommended vaccines you should get before travelling to your destination country!</p>
                    { this.state.show && <div className="Disclaimer" >
                        <PopUp />
                        <button type="button" className="Button" onClick={this.toggleDiv}>Agree</button>
                    </div> }
                </div>

                { !this.state.show? <Select
                    className="CountryMenu"
                    options={CountryMenu.options}
                    value={ country }
                    placeholder="Select a country"
                    onChange={(country) => this.handleChange(country)}
                /> : <p></p> }

                <div className="VisaReq">
                    {this.state.visas ?
                        this.state.visas.map(visa =>
                            <table key={visa.country}>
                                <th>Visa requirement</th>
                                <td key={visa.id}> {visa.visa_requirement} </td>
                            </table>
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
                <div className="source">
                    Source: <a href={"https://www.smartraveller.gov.au/destinations"}>https://www.smartraveller.gov.au/destinations</a>
                </div>
                <Footer/>
            </div>
        );
    }
}
const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]); // Array mapping function