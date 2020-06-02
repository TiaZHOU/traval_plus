import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../logo.png";

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
            width: 150,
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
            <div>
                <div id="my-signin2"></div>
                <br />
                {this.state.isLoggedIn && (
                    <button style={{ width: 150, height: 20, textAlign: 'center' }} onClick={this.logout}>
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
            <a href="/">
                <img src={logo} className="logo" alt="logo" />
            </a>
            <ul className="menu">
                <li><NavLink to="/travel-docs">Travel Requirements</NavLink></li>
                <li><NavLink to="/alert">Alert Map</NavLink></li>
                <li><NavLink to="/travel-tasks">Planner</NavLink></li>
                <li><NavLink to="/forum">Forum</NavLink></li>
            </ul>
            <div>
                <LoginButton className="LoginButton"/>
            </div>
        </nav>

    );
}
