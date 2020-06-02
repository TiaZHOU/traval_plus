import React, {Component} from "react";

export default class PopUp extends Component {
    render() {
        return(
            <div className="PopUp">
                <h3>HEALTH RISKS DISCLAIMER</h3>
                <p>The following information is intended as a guide only and is not intended to replace professional
                    medical advice.</p>
                <p>Travel+ cannot guarantee that the following information is complete, up-to-date, accurate or error
                    free. You therefore view the following information at your own risk.</p>
                <p>You should obtain specific travel health advice in relation to your individual needs and your
                    intended travel, including advice on vaccinations, anti-malarial and other medications based on
                    your past vaccination history, your present medical condition and your intended itinerary.</p>
                <p>To continue you must accept this disclaimer by clicking the button below.</p>
            </div>
        )
    }
}