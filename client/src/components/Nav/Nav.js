import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../img/logo.png";

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    toggleLoggedIn = () =>
        this.setState(state => {
            return { isLoggedIn: !state.isLoggedIn };
        });

    onSignIn = googleUser => {
        this.toggleLoggedIn();

        let user = googleUser.getBasicProfile();
        let id_token = googleUser.getAuthResponse().id_token;

        console.log('google user obj', user);
        console.log('google_id_token', id_token);
        // plus any other logic here
    };

    renderGoogleLoginButton = () => {
        console.log('rendering google signin button');
        window.gapi.signin2.render('my-signin2', {
            scope: 'profile email',
            width: 200,
            height: 30,
            longtitle: true,
            theme: 'light',
            onsuccess: this.onSignIn
        });
    };

    logout = () => {
        console.log('in logout');

        let auth2 = window.gapi && window.gapi.auth2.getAuthInstance();
        if (auth2) {
            auth2
                .signOut()
                .then(() => {
                    this.toggleLoggedIn();
                    console.log('Logged out successfully');
                })
                .catch(err => {
                    console.log('Error while logging out', err);
                });
        } else {
            console.log('error while logging out');
        }
    };

    componentDidMount() {
        window.addEventListener('google-loaded', this.renderGoogleLoginButton);
        window.gapi && this.renderGoogleLoginButton();
    }

    render() {
        // noinspection CheckTagEmptyBody
        return (
            <div className="LoginButton">
                <div id="my-signin2"></div>
                {this.state.isLoggedIn && (
                    <button className="logout" onClick={this.logout}>
                        Logout
                    </button>
                )}
            </div>
        );
    }
}

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
                <LoginButton className="LoginButton"/>
            </div>
        </nav>
    );
}
