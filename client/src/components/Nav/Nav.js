import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <nav>
            <a href="/">
                <img src="../../../public/logo.png" alt="logo" height="60" width="150" />
            </a>
            <div class="col-sm-8 text-right">
                <p><NavLink exact to="/">Home</NavLink></p>
                <p><NavLink to="/requirement/visa">Required Travel Documents</NavLink></p>
                <p><NavLink to="/tasks">Task Scheduler</NavLink></p>
                <p><NavLink to="/alert_test">Travel Alert</NavLink></p>
                <p><NavLink to="/forum/comment">Forum</NavLink></p>
            </div>
        </nav>
    );
}