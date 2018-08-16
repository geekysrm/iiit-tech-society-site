import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import logo from "../../images/logo.png";
import "./style.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img src={logo} className="logo" alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">
                  <span className="menu-item">Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <span className="menu-item">Events</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <span className="menu-item">About Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <span className="menu-item">Contact Us</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
