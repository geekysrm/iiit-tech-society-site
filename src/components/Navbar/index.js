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

import AnchorLink from "react-anchor-link-smooth-scroll";

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
                <NavLink href="/">
                  <span className="menu-item">Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <AnchorLink offset={() => 54} href="#societies">
                  <span className="menu-item">Societies</span>
                </AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink offset={() => 54} href="#events">
                  <span className="menu-item">Events</span>
                </AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink offset={() => 105} href="#contact">
                  <span className="menu-item">Contact Us</span>
                </AnchorLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
