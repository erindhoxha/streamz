import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from "reactstrap";
import GoogleAuth from "./GoogleAuth"

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">streamz.</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/stream/new">Create</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <NavLink tag={Link} className="text-dark" to="/stream/edit">Edit</NavLink>
                                <NavLink tag={Link} className="text-dark" to="/stream/delete">Delete a stream</NavLink>
                                <DropdownItem divider />
                                <NavLink tag={Link} className="text-dark" to="/stream/show">Show stream</NavLink>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText><GoogleAuth /></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;