import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Modal.css";
export default function Modal(props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalTitle">
          <h1>Team Details</h1>
        </div>
        <div className="modalBody">
          <div>Team Name: {props.team.teamname}</div>
          <div>Team Overall: {props.team.overall}</div>
          <div>Matches Played: {props.team.matches_played}</div>
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
