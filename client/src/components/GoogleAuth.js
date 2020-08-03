import React from 'react'
import { Spinner } from 'reactstrap';
import Config from "../config"
import { connect } from 'react-redux'
import { SignIn, SignOut } from "../actions"

class GoogleAuth extends React.Component {

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
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.SignIn();
        } else {
            this.props.SignOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <div>
                    <Spinner animation="border" role="status">
                        Loading...
                    </Spinner>
                </div>
            )
        } else if (this.props.isSignedIn) {
            return <div>Hello, user! <button className="btn btn-danger" onClick={this.onSignOutClick}>Sign out <i className="fab fa-google" aria-hidden="true"></i></button></div >
        } else if (this.props.isSignedIn === false) {
            return <div><button className="btn btn-danger" onClick={this.onSignInClick}><i className="fab fa-google"></i> Sign in with Google</button></div>
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    // This will be converted from STATE to PROPS
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(
    mapStateToProps,
    { SignIn, SignOut }
)(GoogleAuth)