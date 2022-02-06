import * as React from "react";
import HeaderText from "../headerText/HeaderText";
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header-tab">
        <nav>
          <ul className="header-nav-links">
              <HeaderText content="Home"></HeaderText>
              <HeaderText content="About"></HeaderText>
              <HeaderText content="Resume"></HeaderText>
              <HeaderText content="Works"></HeaderText>
              <HeaderText content="Contact me"></HeaderText>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
