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
    const [active, setActive] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar dark expand="xl">
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
                <svg class={`ham hamRotate ham4 ${active ? 'active' : ''}`} viewBox="0 0 100 100" width="50" onClick={() => setActive(!active)}>
                    <path
                        class="line top"
                        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                    <path
                        class="line middle"
                        d="m 70,50 h -40" />
                    <path
                        class="line bottom"
                        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                </svg>
            </Navbar>
            <div className="megaheaderh1">
                <h1 class="h1-megaheader">FIND YOUR STREAMS.</h1>
                <h1 class="h1-megaheader-outlined">FIND YOUR STREAMS.</h1>
            </div>
        </div>
    );
};

export default Header;