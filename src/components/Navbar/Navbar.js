//reusable
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="itemLeft">Clicky Abstract Art Game!</li>
          <li className="itemCenter" />
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
