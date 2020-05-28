import React, { Component } from "react";
import Select from 'react-select';
//import { useReqs, getReqsByCountry, useReqsByCountry } from "../Reqs/ReqsAPI";
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
        fetch(BASE_URL + `/requirement/visa/` + country.value) // FIX BACKEND
            .then(res => res.json())
            .then(visas => this.setState({visas}, () =>
                console.log('Visas fetched...', visas)));
    };

    render() {
        const { country } = this.state;

        return (
            <div>
                <Select
                    options={CountryMenu.options}
                    value={country}
                    placeholder="Select a country"
                    onChange={(country) => this.handleChange(country)}
                />
                <p>You have selected {country.value}</p>
            </div>
        );
    }
}

/*    constructor() {
        super();
        this.state = {
            visas: []
        }
    }
    componentDidMount() {
        fetch(BASE_URL + `/requirement/visa`)
            .then(res => res.json())
            .then(visas => this.setState({visas}, () =>
                console.log('Visas fetched...', visas)));
    }
    render() {
        return(
            <div>
                <h2>Travel visa reqs</h2>
                <ul className="visaRes">
                    {this.state.visas.map(visa =>
                        <li key={visa.id}>{ visa.id } { visa.visa_requirement }</li>
                    )}
                </ul>
                <Footer/>
            </div>
        )
    }
}*/