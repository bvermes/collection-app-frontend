import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MatchesPage.css";
import Dropdown from "../components/Dropdown";

export default function MatchesPage(props) {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(props.elements);
  }, [props.elements]);

  console.log(elements);

  if (elements.length == 0) {
    return <div>Loading...</div>;
    console.log("loading");
  } else {
    return (
      <div className="parentdiv">
        <div className="row">
          <center className="col-sm">
            <Dropdown elements={elements} />
            <div>logók</div>
            <div>team details</div>
          </center>
          <center className="col-sm">
            <center>Sport Betting office odds</center>
            <center className="row">
              <center className="col-sm">
                <div>Home odds</div>
                <input
                  type="text"
                  placeholder="Home odds"
                  className="form-control textbox"
                  style={{ background: "#505050" }}
                />
              </center>
              <center className="col-sm">
                <div>Draw odds</div>
                <input
                  type="text"
                  placeholder="Draw odds"
                  className="form-control textbox"
                  style={{ background: "#505050" }}
                />
              </center>
              <center className="col-sm">
                <div>Away odds</div>
                <input
                  type="text"
                  placeholder="Away odds"
                  className="form-control textbox"
                  style={{ background: "#505050" }}
                />
              </center>
            </center>
            <center>
              <button
                className="btn btn-primary btn-block center"
                style={{ background: "#99FF33", color: "black" }}
              >
                Evaluate
              </button>
            </center>
          </center>
          <center className="col-sm">
            <Dropdown>dropdown</Dropdown>
            <div>logók</div>
            <div>team details</div>
          </center>
        </div>
        <div></div>
        <div className="row">
          <div className="col-sm">
            <center>Home Team AI odds</center>
            <center>3.0</center>
          </div>
          <div className="col-sm">
            <center>Draw AI odds</center>
            <center>3.0</center>
          </div>
          <div className="col-sm">
            <center>Away AI odds</center>
            <center>3.0</center>
          </div>
        </div>
        <div>
          <center>Suggestion</center>
          <center>Bet on home team</center>
        </div>
      </div>
    );
  }
}
