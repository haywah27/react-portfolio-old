import "./nav.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";


function Navigation() {

    return (
        <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
          <Navbar.Brand href="/" className="navbar-header">
            Hayley Wahlroos
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" bg="dark" variant="dark">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link className="navbar-link" href="/">
                About
              </Nav.Link>
              <Nav.Link className="navbar-link" href="/work">
                Work
              </Nav.Link>
              <Nav.Link className="navbar-link" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
}

export default Navigation;
