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
            <h3 className="text">Visa information:</h3>
            {reqs.map(req => (
                <Visa key={req._id} {...req} />))
            }
            <h3 className="text">Immunisation information:</h3>
            <Footer />
        </div>
    );
}


function Visa(visa) {
    const { _id, id, visa_requirement } = visa;
    return (
        <div className="info">
            <p> id:{_id} {id}: {visa_requirement} </p>
            <br/>
        </div>
    );
}