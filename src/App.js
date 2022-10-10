import "./App.css";
import React from "react";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyCollectionPage from "./pages/MyCollectionPage";
import MarketPage from "./pages/MarketPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import PredicterPage from "./pages/PredicterPage";
import { Nav } from "react-bootstrap";
import TeamsPage from "./pages/TeamsPage";
import MatchesPage from "./pages/MatchesPage";

export default function App() {
  return (
    <Router className="collectible-app">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ErrorPage />} />
        <Route path={"/mycollection"} element={<ErrorPage />} />
        <Route path={"/market"} element={<MarketPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/predict"} element={<PredicterPage />} />
        <Route path={"/teams"} element={<TeamsPage />} />
        <Route path={"/matches"} element={<MatchesPage />} />
      </Routes>
    </Router>
  );
}
