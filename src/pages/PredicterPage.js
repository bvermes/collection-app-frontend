import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarPredictor from "../components/navbar/NavbarPredictor";
import TeamsPage from "./TeamsPage";
import MatchesPage from "./MatchesPage";

export default function PredicterPage() {
  /*return (
    <NavBarPredictor />
    <Routes>
    <Route path={"/teams"} element={<TeamsPage />} />
    <Route path={"/matches"} element={<MatchesPage />} />
  </Routes>
</>
  );*/
  return(
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