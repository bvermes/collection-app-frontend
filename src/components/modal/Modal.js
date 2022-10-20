import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Modal.css";
import TeamDetails from "../predictionList/teamList/TeamDetails";
import Card from "react-bootstrap/Card";

export default function Modal(props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalTitle">
          <h1>Team Details</h1>
        </div>
        <div className="modalBody">
          <TeamDetails team={props.team} />
          <Card className="bg-dark text-white">
            <Card.Img
              src={
                "/img/TeamImages/" +
                props.team.teamname.toLowerCase() +
                "aftmatchcorr.png"
              }
              height={500}
              alt="Card image"
            />
          </Card>
          <Card className="bg-dark text-white">
            <Card.Img
              src={
                "/img/TeamImages/" +
                props.team.teamname.toLowerCase() +
                "prematchcorr.png"
              }
              height={500}
              alt="Card image"
            />
          </Card>
        </div>
        <div className="modalFooter">
          <button
            className="btn btn-primary btn-block center"
            style={{ background: "#99FF33", color: "black" }}
            onClick={() => props.closeModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
