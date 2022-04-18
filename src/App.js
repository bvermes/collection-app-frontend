import "./App.css";
import React from "react";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyCollectionPage from "./pages/MyCollectionPage";
import MarketPage from "./pages/MarketPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import { Nav } from "react-bootstrap";

export default function App() {
  return (
    <Router className="collectible-app">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<MyCollectionPage />} />
        <Route path={"/mycollection"} element={<MyCollectionPage />} />
        <Route path={"/market"} element={<MarketPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
