import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../logo.png";

export default function Nav() {
    return (
        <nav>
            <a href="/">
                <img src={logo} className="logo" alt="logo" />
            </a>
            <ul className="menu">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/requirement/visa">Required Travel Documents</NavLink></li>
                <li><NavLink to="/tasks">Task Scheduler</NavLink></li>
                <li><NavLink to="/alert_test">Travel Alert</NavLink></li>
                <li><NavLink to="/forum/comment">Forum</NavLink></li>
            </ul>
        </nav>
    );
}