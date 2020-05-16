import React, { useState } from "react";
import { useReqs, getReqsByCountry, useReqsByCountry } from "../Reqs/ReqsAPI";
import CountryMenu from "../../components/CountryMenu/CountryMenu";
import Footer from "../../components/Footer/Footer";
//import "./Reqs.css";

export default function Visas() {
    const [ country, setCountry ] = useState("");
    const { loading, reqs, error } = useReqs();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong, please refresh: {error.message}</p>;
    }
    // Pass to child component CountryMenu
    function handleChange(e) {
        e.preventDefault();
        setCountry(e.target.value);
    }
    return (
        <div>
            <h2>Visa and Immunisation Requirements</h2>

            <label htmlFor="CountryMenu">
                Choose Your Destination:
            </label>
            <CountryMenu country={country} onChange={handleChange} />
            <p className="text">Visa information:</p>

            {reqs.map(req => (
                <Visa key={req._id} {...req} />))
            }

            <p className="text">Immunisation information:</p>

            <Footer />
        </div>
    );
}

//function Visa(visa) => {
    //const {loading, reqs, error} = useReqsByCountry();
    //getReqsByCountry(e.target.value));
    //FIND COUNTRY VALUE
//}
// console.log(getReqsByCountry(setCountry));

function Visa(visa) {
    const { destination, visa_requirement } = visa;
    return (
        <div className="info">
            {destination} {visa_requirement}
        </div>
    );
}