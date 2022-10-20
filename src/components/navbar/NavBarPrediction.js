import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../logo.svg";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-evenly " >
      <Nav>
        <Nav.Link href="teams">Teams</Nav.Link>
        <Nav.Link href="matches">Matches</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  );
}
