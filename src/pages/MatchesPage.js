import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MatchesPage.css";
import CustomDropdown from "../components/CustomDropdown";
import Card from "react-bootstrap/Card";
import TeamDetails from "../components/predictionList/teamList/TeamDetails";
import { Endpoints, headers } from "../config";
import axios from "axios";

export default function MatchesPage(props) {
  const [elements, setElements] = useState([]);
  const [homeTeam, setHomeTeam] = useState();
  const [awayTeam, setAwayTeam] = useState();

  const [homeImgSrc, setHomeImgSrc] = useState("/img/default.png");
  const [awayImgSrc, setAwayImgSrc] = useState("/img/default.png");

  const [homebetodds, setHomebetodds] = useState("");
  const [drawbetodds, setDrawbetodds] = useState("");
  const [awaybetodds, setAwaybetodds] = useState("");
  const [homeaiodds, setHomeaiodds] = useState(3);
  const [drawaiodds, setDrawaiodds] = useState(3);
  const [awayaiodds, setAwayaiodds] = useState(3);
  const [suggestion, setSuggestion] = useState("Click on Evaluate");

  const [homesugcolor, changeHomesugcolor] = useState("black");
  const [drawsugcolor, changeDrawsugcolor] = useState("black");
  const [awaysugcolor, changeGuestsugcolor] = useState("black");
  const [sugcolor, changeSugcolor] = useState("rgb(154, 47, 47)");

  useEffect(() => {
    setElements(props.elements);
  }, [props.elements]);

  useEffect(() => {
    setElements(props.elements);
    let homeworth = homeaiodds / homebetodds;
    let awayworth = awayaiodds / awaybetodds;
    let drawworth = drawaiodds / drawbetodds;
    console.log(homeworth);
    console.log(awayworth);
    console.log(drawworth);
    if (homeaiodds != 3) {
      if (homeworth <= awayworth && homeworth <= drawworth) {
        setSuggestion("Bet on Home Team!");
      }
      if (awayworth <= homeworth && awayworth <= drawworth) {
        setSuggestion("Bet on Away Team!");
      }
      if (drawworth <= awayworth && drawworth <= homeworth) {
        setSuggestion("Bet on Draw!");
      }
      changeSugcolor("green");
    }
  }, [homeaiodds]);

  const getResults = () => {
    console.log(Endpoints.modelresults);

    console.log(homebetodds);
    console.log(drawbetodds);
    console.log(awaybetodds);

    const formData = new FormData();
    formData.append("homeTeamName", homeTeam.teamname);
    formData.append("guestTeamName", awayTeam.teamname);
    formData.append("homeBetOdds", homebetodds);
    formData.append("guestBetOdds", awaybetodds);
    formData.append("drawBetOdds", drawbetodds);

    for (var [key, value] of formData.entries()) {
      console.log(key, value);
    }
    axios
      .post(Endpoints.modelresults, formData, { headers })
      .then(({ data }) => {
        console.log(data);
        setDrawaiodds(data.drawBetOdds);
        setAwayaiodds(data.guestBetOdds);
        setHomeaiodds(data.homeBetOdds);
      })
      .catch(console.log)
      .finally(() => {
        console.log(homeaiodds);
        console.log(awayaiodds);
        console.log(drawaiodds);
      });
  };
  //const hometeamChanges = () => {
  //
  //};
  useEffect(() => {
    if (homeTeam !== undefined) {
      setHomeImgSrc(
        "/img/TeamImages/" + homeTeam.teamname.toLowerCase() + ".png"
      );
    }
  }, [homeTeam]);

  useEffect(() => {
    if (awayTeam !== undefined) {
      setAwayImgSrc(
        "/img/TeamImages/" + awayTeam.teamname.toLowerCase() + ".png"
      );
    }
  }, [awayTeam]);

  const handleDropdownRefresh = (e, k) => {
    if (k === 1) {
      setHomeTeam(e);
      //hometeamChanges();
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
              <img className="logo" src={homeImgSrc} alt="" />
            </div>

            <TeamDetails team={homeTeam} />
          </center>
          <center className="col-sm" id="middiv">
            <center>Sport Betting office odds</center>
            <center className="row">
              <center className="col-sm">
                <div>Home odds</div>
                <input
                  type="number"
                  placeholder="Home odds"
                  className="form-control textbox"
                  style={{ background: "#505050" }}
                  onChange={(e) => setHomebetodds(e.target.value)}
                />
              </center>
              <center className="col-sm">
                <div>Draw odds</div>
                <input
                  type="number"
                  placeholder="Draw odds"
                  className="form-control textbox"
                  style={{ background: "#505050" }}
                  onChange={(e) => setDrawbetodds(e.target.value)}
                />
              </center>
              <center className="col-sm">
                <div>Away odds</div>
                <input
                  type="number"
                  placeholder="Away odds"
                  className="form-control textbox"
                  style={{ background: "#505050" }}
                  onChange={(e) => setAwaybetodds(e.target.value)}
                />
              </center>
            </center>
            <center>
              <button
                className="btn btn-block center"
                style={{ background: "#99FF33" }}
                onClick={getResults}
              >
                Evaluate
              </button>
            </center>
            <div className="row">
              <div className="col-sm">
                <center>Home AI odds</center>
                <center>{homeaiodds.toFixed(2)}</center>
              </div>
              <div className="col-sm">
                <center>Draw AI odds</center>
                <center>{drawaiodds.toFixed(2)}</center>
              </div>
              <div className="col-sm">
                <center>Away AI odds</center>
                <center>{awayaiodds.toFixed(2)}</center>
              </div>
            </div>
            <div>
              <center>Suggestion</center>
              <center style={{ color: sugcolor }}>{suggestion}</center>
            </div>
          </center>
          <center className="col-sm">
            <CustomDropdown
              elements={elements}
              handleDropdownRefresh={handleDropdownRefresh}
              k={2}
            />
            <div style={{ width: "50%" }}>
              <img className="logo" src={awayImgSrc} alt="" />
            </div>
            <TeamDetails team={awayTeam} />
          </center>
        </div>
      </div>
    );
  }
}
