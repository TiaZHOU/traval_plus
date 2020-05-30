import React from "react";
import GoogleMapReact from "google-map-react";
import "./Alert.css";
import Footer from "../../components/Footer/Footer";

const MyMarker = ({ text }) => (
    <div
        style={{
            color: "white",
            background: "red",
            padding: "15px 15px",
            display: "inline-flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
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
    return (
        <div>
            <section className="jumbotron">
                <div style={{ height: "50vh", width: "70%" }}>
                    <GoogleMapReact
                        distanceToMouse={distanceToMouse}
                        bootstrapURLKeys={{
                            key: "AIzaSyDm1LGRwK1dWiCNc77SrsjpK4U-xxFA408"
                        }}
                        center={{ lat: -25.81, lng: 135.957 }}
                        defaultZoom={13}
                    >
                        <MyMarker lat={-10.796} lng={111.96} text="Stay in Australia" />
                    </GoogleMapReact>
                </div>
                <div>
                    <h2>Before you trip</h2>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
