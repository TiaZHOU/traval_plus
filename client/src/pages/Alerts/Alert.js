import React, {useEffect, useState} from "react";
import GoogleMapReact from "google-map-react";
import "./Alert.css";
import Footer from "../../components/Footer/Footer";
const BASE_URL = "https://info30005travelplus.herokuapp.com";

function getAlerts() {
    const endpoint = BASE_URL + '/alert';
    // return fetch call that gets alert list
    return fetch(endpoint).then(res => {
        return res.json();
    });
}

function useAlets() {
    const [loading, setLoading] = useState(true);
    const [alerts, setAlerts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        getAlerts()
            .then(alerts => {
                setAlerts(alerts);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);
    return { loading, alerts, error };
}

function Alert(alert) {
    const { lat, lng, alert_info } = alert;
    return (
        <MyMarker lat={lat} lng={lng} text={alert_info} />
    );
}
//TODO change marker text format into more good looking one
const MyMarker = ({ text }) => (
    <div className="marker"> {text} </div>
);

const distanceToMouse = (pt, mousePos, markerProps) => {
    console.log(pt, mousePos, markerProps);

    // pt can be undefined in some cases
    // don't know why this happens
    if (pt && mousePos) {
        return Math.sqrt(
            (pt.x - mousePos.x) * (pt.x - mousePos.x) +
            (pt.y - mousePos.y) * (pt.y - mousePos.y)
        );
    }
};
export default function App() {
    const { loading, alerts, error } = useAlets();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    return (
        <div>
            <section className="alert_background">
                <div className="info">
                    <h2>Live Travel Alert Map</h2>
                    <h4>Pan around the map to see live travel alerts and plan your trip accordingly.</h4>
                    <h4>Due to the current COVID-19 pandemic, most countries have closed their borders in order to decrease the spread of the virus.
                        You can't leave Australia unless you seek an <a href="https://covid19.homeaffairs.gov.au/leaving-australia">exemption from Home Affairs</a>.
                    </h4>
                    <h5>
                        You should apply for an exemption at least 48 hours before, but not more than 3 months before your planned travel.
                    </h5>
                    <p>Source: <a href="https://www.smartraveller.gov.au/destinations">https://www.smartraveller.gov.au/destinations</a></p>
                </div>
                <div className="map">
                    <GoogleMapReact
                        distanceToMouse={distanceToMouse}
                        bootstrapURLKeys={{
                            key: "AIzaSyDm1LGRwK1dWiCNc77SrsjpK4U-xxFA408"
                        }}
                        center={{ lat: -28.5, lng: 135.95 }}
                        defaultZoom={2}
                    >
                        {alerts.map(alert => (
                            <Alert key={alert._id} {...alert} />
                        ))}
                    </GoogleMapReact>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
