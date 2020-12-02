import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../img/logo.png";


export default function Nav() {
    return (
        <nav>
            <div className="controls">
                <a href="/">
                    <img src={logo} className="logo" alt="logo" />
                </a>
                <label htmlFor="toggle" className="label">&#9776;</label>
            </div>
            <input type="checkbox" id="toggle" />
            <div className="menu">
                <NavLink to="/map" activeClassName="active">
                    Alert Map
                </NavLink>
                <NavLink to="/travel-docs" activeClassName="active">
                    Travel Requirements
                </NavLink>
                <NavLink to="/travel-tasks" activeClassName="active">
                    Planner
                </NavLink>
                <NavLink to="/forum" activeClassName="active">
                    Forum
                </NavLink>
            </div>
        </nav>
    );
}
