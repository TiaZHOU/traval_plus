import React, { Component } from "react";
//import Popup from "../components/Popup/Popup";
//import { Modal, Button, Space } from "antd";
import Select from "react-select";
import Footer from "../../components/Footer/Footer";
import "./Reqs.css";

const BASE_URL = "https://info30005travelplus.herokuapp.com";
const CountryMenu = require("./CountryMenu");

// function info() {
//
//   Modal.info({
//     title: "This is a notification message",
//     content: (
//       <div>
//         <p>
//           The following information is intended as a guide only and is not
//           intended to replace professional medical advice.
//         </p>
//         <p>
//           Travel+ cannot guarantee that the following information is complete,
//           up-to-date, accurate or error free. You therefore view the following
//           information at your own risk.
//         </p>
//         <p>
//           You should obtain specific travel health advice in relation to your
//           individual needs and your intended travel{" "}
//         </p>
//         <p>
//           {" "}
//           including advice on vaccinations, anti-malarial and other medications
//           based on your past vaccination history, your present medical condition
//           and your intended itinerary.
//         </p>
//         <p>
//           To continue you must accept this disclaimer by clicking the button
//           below.
//         </p>
//       </div>
//     ),
//     onOk() {}
//   });
// }
export default class Visas extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", showPopup: false };
  }

  handleChange = country => {
    this.setState({ country });
    fetch(BASE_URL + `/requirement/visa/` + country.value)
      .then(res => res.json())
      .then(visas => this.setState({ visas }));

    fetch(BASE_URL + `/requirement/immunisation/` + country.value)
      .then(res => res.json())
      .then(immunisations =>
        this.setState({ immunisations }, () =>
          console.log("Immunisations fetched...", immunisations)
        )
      );
  };

  render() {
    const { country } = this.state;

    return (
      <div>
        <h2>Travel Requirements</h2>
        <h4> Search for travel docs for 198 countries around the world! </h4>
        {/*<Space>*/}
        {/*  <Button onClick={info}>Health Risk Disclaimer</Button>*/}
        {/*</Space>*/}
        
        <Select
          className="CountryMenu"
          options={CountryMenu.options}
          value={country}
          placeholder="Select a country"
          onChange={country => this.handleChange(country)}
        />

        <ul className="result">
          {this.state.visas ? (
            this.state.visas.map(visa => (
              <li key={visa.id}> {visa.visa_requirement} </li>
            ))
          ) : (
            <div />
          )}
        </ul>

        <ul className="result_immunisation_requirements">
          {this.state.immunisations ? (
            this.state.immunisations.map(immunisation => (
              <p key={immunisation.country}>
                {" "}
                {immunisation.immunisation_req}{" "}
              </p>
            ))
          ) : (
            <div />
          )}
        </ul>

        <ul className="result_immunisation_info">
          {this.state.immunisations ? (
            this.state.immunisations.map(immunisation => (
              <p key={immunisation.country}>
                {" "}
                {immunisation.immunisation_info}{" "}
              </p>
            ))
          ) : (
            <div />
          )}
        </ul>

        <Footer />
      </div>
    );
  }
}
