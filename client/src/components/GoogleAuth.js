import React from 'react'
import { NavLink } from 'reactstrap';
import { Link } from "react-router-dom"
class GoogleAuth extends React.Component {
    render() {
        return (
            <NavLink tag={Link} to="/login">Login</NavLink>
        )
    }
}

export default GoogleAuth;