import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../logo.svg";

export default function NavBar() {
  const elements = [
    ["/stream", "Stream"],
    ["/matched-templates", "Matched templates"],
    ["/template-editor", "Template editor"],
    ["/kit-editor", "Kit editor"],
    ["/station-editor", "Station editor"],
  ];
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <img src={logo} width="40px" height="40px" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="mycollection" to>
            My Collection
          </Nav.Link>
          <Nav.Link href="market">Market</Nav.Link>
          <Nav.Link href="profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
