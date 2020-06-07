import React, {Component} from "react";

export default class MapInfo extends Component {
    render() {
        return(
            <div className="info">
                <h2>Live Travel Alert Map</h2>
                <span className="live"><span>&#9679; </span> LIVE</span>
                <h4>Pan around the map to see live travel alerts and plan your trip accordingly.</h4>
                <h3>COVID-19</h3>
                <h4>Due to the current COVID-19 pandemic, most countries have closed their borders in order
                    to decrease the spread of the virus. You can't leave Australia unless you seek
                    an <a href="https://covid19.homeaffairs.gov.au/leaving-australia">exemption from Home Affairs</a>.
                </h4>
                <h3>Travel Exemptions</h3>
                <h4>
                    You should apply for an exemption at least 48 hours before, but not more than 3 months before your planned travel.
                </h4>
                <p>Source: <a href="https://www.smartraveller.gov.au/destinations">https://www.smartraveller.gov.au/destinations</a></p>
            </div>
        )
    }
}