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
    Jumbotron,
} from "reactstrap";
import GoogleAuth from "./GoogleAuth"

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar dark expand="sm">
                <NavbarBrand href="/"><img className="logo" src="../assets/v.png" /></NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink data-text="H O M E" className="glitch" tag={Link} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink data-text="C R E A T E" className="glitch" tag={Link} to="/stream/new">Create</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="glitch" data-text="O P T I O N S">
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <NavLink data-text="E D I T" tag={Link} className="text-dark glitch" to="/stream/edit">Edit</NavLink>
                                <NavLink tag={Link} className="text-dark" to="/stream/delete">Delete a stream</NavLink>
                                <DropdownItem divider />
                                <NavLink tag={Link} className="text-dark" to="/stream/show">Show stream</NavLink>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                    <NavbarText><GoogleAuth /></NavbarText>
                </Collapse>
                <svg className={`ham hamRotate ham4 ${active ? 'active' : ''}`} viewBox="0 0 100 100" width="50" onClick={() => setActive(!active)}>
                    <path
                        className="line top"
                        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                    <path
                        className="line middle"
                        d="m 70,50 h -40" />
                    <path
                        className="line bottom"
                        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                </svg>
            </Navbar>
            <div style={{ height: '100%', backgroundColor: 'black', position: 'relative' }}>
                <div style={{ padding: '10px', border: '1px solid rgba(0,0,0,0.2)', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', margin: 'auto', zIndex: '9999999' }}>
                    <button style={{ height: '50px', padding: '10px 30px 10px 30px', border: 'none', backgroundColor: '#dc3545', fontSize: '20px', zIndex: '999999999999' }}>Get game now</button>
                </div>
                <div style={{ width: '70%', height: '100%', borderLeft: '1px solid rgba(255,255,255,0.2)', margin: '0 auto', position: 'absolute', left: '25%', zIndex: '99999', top: '0' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#dc3545', position: 'absolute', left: '0', top: '30%' }}></div>
                </div>
                <div style={{ width: '70%', height: '100%', borderLeft: '1px solid rgba(255,255,255,0.2)', margin: '0 auto', position: 'absolute', right: '25%', zIndex: '99999' }}></div>
                <div style={{ width: '40%', height: '100%', borderRight: '1px solid rgba(255,255,255,0.2)', margin: '0 auto', position: 'absolute', right: '15%', zIndex: '99999', top: '0' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#dc3545', position: 'absolute', right: '0', top: '60%' }}></div>
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#dc3545', position: 'absolute', right: '0', top: '2%' }}></div>
                </div>
                <img style={{ height: '800px', width: '100%', objectFit: 'cover', opacity: 0.6 }} src="./assets/banner.jpg" />
                <div style={{ width: '20px', height: '20px', backgroundColor: '#dc3545', position: 'absolute', left: '25', bottom: '0' }}></div>
            </div>
            <hr />
            <div className="megaheaderh1">
                <h1 className="h1-megaheader">FIND YOUR FAVOURITE STREAMS.</h1>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#dc3545', position: 'absolute', right: '0', top: '2%' }}></div>
                <h1 className="h1-megaheader-outlined">FIND YOUR FAVOURITE STREAMS.</h1>
            </div>
        </div>
    );
};

export default Header;