import React, { Component } from "react";

import { Menu } from "semantic-ui-react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu>
          <Menu.Item style={styles.logo_area}>
            <img src="/assets/IIIT_Bhubaneswar_Logo.png" style={styles.logo} />
          </Menu.Item>

          <Menu.Item style={styles.heading_area}>
            <div>Tech Scoiety - IIIT Bh</div>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const styles = {
  logo_area: {
    height: "10vh",
    width: "10%",
    padding: 0,
    paddingTop: 5,
    paddingBottom: 5
  },
  heading_area: {
    height: "10vh",
    width: "90%",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    fontSize: 24
  },
  logo: {
    height: "100%",
    width: "100%",
    objectFit: "contain"
  }
};

export default Navbar;
