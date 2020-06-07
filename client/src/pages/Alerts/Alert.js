import React, {useEffect, useState} from "react";
import GoogleMapReact from "google-map-react";
import "./Alert.css";
import Footer from "../../components/Footer/Footer";
import MapInfo from "../../components/MapInfo/MapInfo";
const BASE_URL = "https://info30005travelplus.herokuapp.com";

function getAlerts() {
    const endpoint = BASE_URL + '/alert';
    // return fetch call that gets alert list
    return fetch(endpoint).then(res => {
        return res.json();
    });
}

function useAlerts() {
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

// Renders markers
const MyMarker = ({ text }) => (
    <div className="marker"> {text} </div>
);

// Helper function to assist panning on map
const distanceToMouse = (pt, mousePos, markerProps) => {
    console.log(pt, mousePos, markerProps);
    if (pt && mousePos) {
        return Math.sqrt(
            (pt.x - mousePos.x) * (pt.x - mousePos.x) +
            (pt.y - mousePos.y) * (pt.y - mousePos.y)
        );
    }
};

export default function App() {
    const { loading, alerts, error } = useAlerts();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    return (
        <div className="mapPage">
            <div className="alertBackground">
                <MapInfo />
                <div className="map">
                    <GoogleMapReact
                        distanceToMouse={distanceToMouse}
                        bootstrapURLKeys={{ key: "AIzaSyDm1LGRwK1dWiCNc77SrsjpK4U-xxFA408"}}
                        center={{ lat: -28.5, lng: 135.95 }}
                        defaultZoom={2} >
                        {alerts.map(alert => (
                            <Alert key={alert._id} {...alert} />
                        ))}
                    </GoogleMapReact>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
