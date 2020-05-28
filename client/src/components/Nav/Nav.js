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
                <li><NavLink to="/travel-docs">Travel Document Finder</NavLink></li>
                <li><NavLink to="/travel-tasks">To Do List</NavLink></li>
                <li><NavLink to="/alert">Travel Alert</NavLink></li>
                <li><NavLink to="/forum">Forum</NavLink></li>
            </ul>
        </nav>
    );
}