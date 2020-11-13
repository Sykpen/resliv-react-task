import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" sticky="top" expand="md">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="link" to="/">
              Главная
            </Link>
            <Link className="link" to="/employees">
              Работники
            </Link>
          </Nav>
        </Navbar.Collapse>  
      </Navbar>
    );
  }
}

export default Header;
