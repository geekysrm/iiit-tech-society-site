import React, { Component } from "react";

import { Menu } from "semantic-ui-react";

import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu>
          <Menu.Item className="logo_area">
            <img
              src="/assets/IIIT_Bhubaneswar_Logo.png"
              alt="IIIT Logo"
              className="logo"
            />
          </Menu.Item>

          <Menu.Item className="heading_area">
            <div>Tech Society - IIIT Bh</div>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
