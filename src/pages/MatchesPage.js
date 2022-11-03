import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MatchesPage.css";
import CustomDropdown from "../components/CustomDropdown";
import Card from "react-bootstrap/Card";
import TeamDetails from "../components/predictionList/teamList/TeamDetails";

export default function MatchesPage(props) {
  const [elements, setElements] = useState([]);
  const [homeTeam, setHomeTeam] = useState();
  const [awayTeam, setAwayTeam] = useState();

  const [homeImgSrc, setHomeImgSrc] = useState("/img/default.png");
  const [awayImgSrc, setAwayImgSrc] = useState("/img/default.png");

  useEffect(() => {
    setElements(props.elements);
  }, [props.elements]);

  const hometeamChanges = () => {
    setHomeImgSrc(
      "/img/TeamImages/" + homeTeam.teamname.toLowerCase() + ".png"
    );
  };

  const handleDropdownRefresh = (e, k) => {
    if (k === 1) {
      setHomeTeam(e);
      hometeamChanges();
    }
    if (k === 2) {
      setAwayTeam(e);
    }
  };

  if (elements.length == 0) {
    console.log("loading");
    return <div>Loading...</div>;
  } else {
    return (
      <div className="parentdiv">
        <div className="row">
          <center className="col-sm">
            <CustomDropdown
              elements={elements}
              handleDropdownRefresh={handleDropdownRefresh}
              k={1}
            />
            <div style={{ width: "50%" }}>
              <Card
                className="bg-dark text-white m-3"
                style={{ height: "100px" }}
              >
                <Card.Img src={homeImgSrc} alt="Card image" />
              </Card>
            </div>
            <TeamDetails team={homeTeam} />
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
            <CustomDropdown
              elements={elements}
              handleDropdownRefresh={handleDropdownRefresh}
              k={2}
            />
            <div style={{ width: "50%" }}>
              <Card
                className="bg-dark text-white m-3"
                style={{ height: "100px" }}
              >
                <Card.Img src={awayImgSrc} alt="Card image" />
              </Card>
            </div>

            <TeamDetails team={awayTeam} />
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
