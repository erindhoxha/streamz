import React from 'react'
import { NavLink } from 'reactstrap';
import { Link } from "react-router-dom"
class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get(),
                })
                this.auth.signIn().then(() => {
                    this.setState({
                        isSignedIn: this.auth.isSignedIn.get(),
                    })

                }).catch(err => {
                    this.setState({
                        isSignedIn: this.auth.isSignedIn.get(),
                    })
                })
            })
        })
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in!</div>
        } else if (this.state.isSignedIn) {
            return <div>Hello, user! <button onClick={() => { window.gapi.auth2.getAuthInstance().signOut(); this.setState({ isSignedIn: false }) }}>Sign out</button></div>
        } else if (this.state.isSignedIn === false) {
            return <div>Please sign in</div>
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;