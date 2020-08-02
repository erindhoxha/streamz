import React from 'react'
import { NavLink } from 'reactstrap';
import { Link } from "react-router-dom"
class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', async () => {
            await window.gapi.client.init({
                clientId: "1",
                scope: "email"
            }, console.log('started')).then(response => {
                console.log('Finished');
                const auth = window.gapi.auth2.getAuthInstance()
                console.log(auth);
            })
        });
    }
    render() {
        return (
            <NavLink tag={Link} to="/login">Login</NavLink>
        )
    }
}

export default GoogleAuth;