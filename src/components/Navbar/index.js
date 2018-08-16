import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";

import "./style.css";

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      items={leftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top">
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item>
          <Image size="mini" src="/assets/IIIT_Bhubaneswar_Logo.png" />
        </Menu.Item>
        <Menu.Menu position="right">
          {rightItems.map(item => (
            <Menu.Item {...item} />
          ))}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" style={{ display: "flex" }}>
    <Menu.Item>
      <Image size="mini" src="/assets/IIIT_Bhubaneswar_Logo.png" />
    </Menu.Item>
    {leftItems.map(item => (
      <Menu.Item {...item} />
    ))}
    <Menu.Menu position="right">
      {rightItems.map(item => (
        <Menu.Item {...item} />
      ))}
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "About", key: "about" },
  { as: "a", content: "Contact", key: "contact" }
];
const rightItems = [
  // { as: "a", content: "Login", key: "login" },
  // { as: "a", content: "Register", key: "register" }
];

const NavbarComponent = () => (
  <NavBar leftItems={leftItems} rightItems={rightItems}>
    <p>Hello World!!</p>
  </NavBar>
);

export default NavbarComponent;
