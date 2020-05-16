import React, {useEffect, useState} from "react";

const BASE_URL = "https://info30005travelplus.herokuapp.com";

function getReqs() {
    const endpoint = BASE_URL + `/requirement/visa`;

    // return fetch call that gets task list
    return fetch(endpoint).then(res => {
        return res.json();
    });
}

export function getReqsByCountry(country) {
    const endpoint = BASE_URL + `/requirement/visa/${country}`;
    return fetch(endpoint).then(res => {
        return res.json();
    });
}

export function useReqs() {
    const [loading, setLoading] = useState(true);
    const [reqs, setReqs] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        getReqs()
            .then(reqs => {
                setReqs(reqs);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);
    return { loading, reqs, error };
}