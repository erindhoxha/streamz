import React from 'react'
import { Spinner } from 'reactstrap';
import Config from "../config"
import { connect } from 'react-redux'
import { SignIn, SignOut } from "../actions"


class GoogleAuth extends React.Component {
    state = {
        name: null,
        id: null
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
                // Initialize AUTH
                this.auth = window.gapi.auth2.getAuthInstance();
                // This.auth.isSignedIn if it changes, it listens and it runs the function in the argument
                this.auth.isSignedIn.listen(this.onAuthChange);
                // Run onAuthChange with the value it has to initiate state
                this.onAuthChange(this.auth.isSignedIn.get());

            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.SignIn(this.auth.currentUser.get().getBasicProfile().getId(), this.auth.currentUser.get().getBasicProfile().getName());
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
            return (<div className="profile">
                <button data-text="S I G N O U T" className="btn btn-danger glitch"
                    onClick={this.onSignOutClick}>Sign out
                </button>
            </div>
            )
        } else if (this.props.isSignedIn === false) {
            return (<div>
                <button
                    className="btn btn-danger"
                    onClick={this.onSignInClick}>
                    <span className="glitch" data-text="S I G N I N">Sign in</span>
                </button>
            </div>)
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    // This will be converted from STATE to PROPS
    return { isSignedIn: state.auth.isSignedIn, id: state.auth.id, name: state.auth.name }
}

export default connect(
    mapStateToProps,
    { SignIn, SignOut }
)(GoogleAuth)