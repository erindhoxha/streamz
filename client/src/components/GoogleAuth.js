import React from 'react'
import { NavLink } from 'reactstrap';
import { Link } from "react-router-dom"
import Config from "../config"

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    }
    componentDidMount() {
        this.gAuthInit();
    }

    gAuthInit() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: `${Config.googleAuthKey}.apps.googleusercontent.com`,
                scope: "email"
            }).then(() => {

                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);

                if (!this.state.isSignedIn) {
                    this.auth.signIn().then(() => {
                        this.onAuthChange();
                    }).catch(err => {
                        this.onAuthChange();
                    })
                }
            })
        })
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
        })
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in!</div>
        } else if (this.state.isSignedIn) {
            return <div>Hello, user! <button onClick={() => { window.gapi.auth2.getAuthInstance().signOut(); }}>Sign out</button></div>
        } else if (this.state.isSignedIn === false) {
            return <div>Please <button onClick={() => this.gAuthInit()}>Sign in</button></div>
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;