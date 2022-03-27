import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../logo.svg";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" /> Logo
        </Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Products" bg="green" variant="dark">
              <NavDropdown.Item href="products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="products/tea">Chocolate</NavDropdown.Item>
              <NavDropdown.Item href="products/tea">Cofee</NavDropdown.Item>
              <NavDropdown.Item href="products/tea">Other</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="products">Blog</Nav.Link>
            <Nav.Link href="products">About us</Nav.Link>
            <Nav.Link href="products">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
