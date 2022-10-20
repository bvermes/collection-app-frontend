import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarPredictor from "../components/navbar/NavbarPredictor";
import TeamsPage from "./TeamsPage";
import MatchesPage from "./MatchesPage";
import NavBarPredictor from "../components/navbar/NavbarPredictor";
import ErrorPage from "../pages/ErrorPage";
import MyCollectionPage from "./MyCollectionPage";
export default function PredicterPage() {
  /*return (
    <NavBarPredictor />
    <Routes>
    <Route path={"/teams"} element={<TeamsPage />} />
    <Route path={"/matches"} element={<MatchesPage />} />
  </Routes>
</>
  );*/
  return (
    <div>
      <NavBarPredictor />
      <TeamsPage />
    </div>
  );
}
