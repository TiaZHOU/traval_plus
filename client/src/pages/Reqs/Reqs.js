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

                <p> Search for travel docs for 198 countries around the world! </p>

                <Select
                    className="CountryMenu"
                    options={CountryMenu.options}
                    value={ country }
                    placeholder="Select a country"
                    onChange={(country) => this.handleChange(country)}
                />

                <ul className="visaReq">
                    {this.state.visas ?
                        this.state.visas.map(visa =>
                        <li key={visa.id}> { visa.id } { visa.visa_requirement} </li>
                    ) : <div></div>
                    }
                </ul>

                <ul className="immunisationReq">
                    {this.state.immunisations ?
                        this.state.immunisations.map(immunisation =>
                            <p key={immunisation.country}> { immunisation.country } { immunisation.immunisation_req} </p>
                        ) : <div></div>
                    }
                    {/*{this.state.immunisations.map(immunisation =>*/}
                    {/*    <li key={immunisation.id}>{ immunisation.id } { immunisation.immunisation_req }</li>*/}
                    {/*)}*/}
                </ul>

                <Footer/>
            </div>
        );
    }
}