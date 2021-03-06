import React, { useState } from "react";
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
import GoogleAuth from "./GoogleAuth";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar dark expand="sm">
        <NavbarBrand href="/">
          stream.io
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink data-text="H O M E" className="" tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-text="C R E A T E"
                className=""
                tag={Link}
                to="/stream/new"
              >
                Create
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                className=""
                data-text="O P T I O N S"
              >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <NavLink
                  data-text="E D I T"
                  tag={Link}
                  className="text-dark "
                  to="/stream/edit"
                >
                  Edit
                </NavLink>
                <DropdownItem divider />
                <NavLink tag={Link} className="text-dark" to="/stream/delete">
                  Delete a stream
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <GoogleAuth />
          </NavbarText>
        </Collapse>
        <svg
          className={`ham hamRotate ham4 ${active ? "active" : ""}`}
          viewBox="0 0 100 100"
          width="50"
          onClick={() => setActive(!active)}
        >
          <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path className="line middle" d="m 70,50 h -40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </Navbar>
      {!props.minified && (
        <div
          style={{
            backgroundColor: "black",
            position: "relative",
          }}
          className="banner-wrapper"
        >
          <div className="banner-welcome-msg">
            <h6 className="header-small">Find, watch and stream any videos</h6>
            <h1 className="h1-banner">stream.io</h1>
            <h1 className="h1-bg">stream.io</h1>
            <div>
              <NavLink
                className="d-inline"
                tag={Link}
                to="/stream/new"
              >
                <button className="learn-more">View latest streams <i className="fas fa-chevron-down ml-2"></i></button>
              </NavLink>
              <NavLink
                className="d-inline"
                tag={Link}
                to="/stream/new"
              >
                <button className="create-more">Create stream <i className="fas fa-chevron-right ml-2"></i></button>
              </NavLink>
            </div>


          </div>
          <div className="dots">
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#dc3545",
                position: "sticky",
                left: "0",
                top: "30%",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "70%",
              height: "100%",
              borderLeft: "1px solid rgba(255,255,255,0.03)",
              margin: "0 auto",
              position: "absolute",
              right: "25%",
              zIndex: "99999",
            }}
          ></div>
          <div
            style={{
              width: "40%",
              height: "100%",
              borderRight: "1px solid rgba(255,255,255,0.03)",
              margin: "0 auto",
              position: "absolute",
              right: "15%",
              zIndex: "99999",
              top: "0",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#dc3545",
                position: "absolute",
                right: "0",
                top: "60%",
              }}
            ></div>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#dc3545",
                position: "absolute",
                right: "0",
                top: "2%",
              }}
            ></div>
          </div>
          <img
            className="banner-image"
            src="https://images.unsplash.com/photo-1560252719-59e35a3bbc6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#dc3545",
              position: "absolute",
              left: "25",
              bottom: "0",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Header;
