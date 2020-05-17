import React, { useState } from "react";
import Select from 'react-select';
import { useReqs, getReqsByCountry, useReqsByCountry } from "../Reqs/ReqsAPI";
import Footer from "../../components/Footer/Footer";
import "./Reqs.css";

const CountryMenu = require("./CountryMenu");

export default function Visas() {
    const [ country, setCountry ] = useState("");
    const { loading, reqs, error } = useReqs();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong, please refresh: {error.message}</p>;
    }
    return (
        <div className="Reqs">
            <h2>Visa and Immunisation Requirements</h2>
            <label htmlFor="CountryMenu">
                Choose Your Destination:
            </label>
            <Select className="CountryMenu"
                    options={CountryMenu.options}
                    value={country}
                    onChange={event => console.log(event.value, event.label)} />
            <p className="text">Visa information:</p>
            {reqs.map(req => (
                <Visa key={req._id} {...req} />))
            }
            <p className="text">Immunisation information:</p>
            <Footer />
        </div>
    );
}


function Visa(visa) {
    const { _id, id, visa_requirement } = visa;
    return (
        <div className="info">
            {_id}<br/>
            {id}: {visa_requirement}
            <br/>
        </div>
    );
}