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
    const { _id, country, lat, lng, alert_info } = alert;
    return (
        <MyMarker lat={lat} lng={lng} text={alert_info} />
    );
}
//TODO change marker text format into more good looking one
const MyMarker = ({ text }) => (
    <div
        style={{
            color: "white",
            background: "red",
            padding: "10px 40px",
            display: "inline-flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10%",
            transform: "translate(-40%, -40%)"
        }}
    >
        {text}
    </div>
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
                <div>
                    <h2>Check Alerts Before Your Trip!</h2>
                    <h3>Use the map to see more live information about each destination</h3>
                </div>
                <div style={{ height: "60vh", width: "60%" }}>
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
            <h4>Due to COVID-19, many countries have since closed their borders for travellers to enter in order to decrese the spread of the virus. </h4>
            <Footer/>
        </div>
    );
}
