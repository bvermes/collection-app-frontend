import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function TeamDetails(props) {
  const [defencecolor, changeDefencecolor] = useState("black");
  const [midfieldcolor, changeMidfieldcolor] = useState("black");
  const [attackcolor, changeAttackcolor] = useState("black");

  useEffect(() => {
    if (props.team === undefined) {
      return;
    } else {
      console.log("changecolor");
      changecolor(props.team.defenceRating, 0);
      changecolor(props.team.midfieldRating, 1);
      changecolor(props.team.attackingRating, 2);
    }
  }, [props]);

  if (props.team === undefined) {
    return <>Choose a Team...</>;
  }

  const changecolor = (rating, num) => {
    if (rating <= 75) {
      if (num === 0) {
        changeDefencecolor("red");
      }
      if (num === 1) {
        changeMidfieldcolor("red");
      }
      if (num === 2) {
        changeAttackcolor("red");
      }
    }
    if (rating > 75 && rating <= 80) {
      if (num === 0) {
        changeDefencecolor("yellow");
      }
      if (num === 1) {
        changeMidfieldcolor("yellow");
      }
      if (num === 2) {
        changeAttackcolor("yellow");
      }
    }
    if (rating > 80) {
      if (num === 0) {
        changeDefencecolor("green");
      }
      if (num === 1) {
        changeMidfieldcolor("green");
      }
      if (num === 2) {
        changeAttackcolor("green");
      }
    }
  };

  return (
    <div
      style={{
        height: "500px",
        overflowY: "auto",
        fontSize: "16px",
        overflowX: "hidden",
      }}
    >
      <div>Team Name: {props.team.teamname}</div>
      <div>Club Worth: {props.team.clubWorth} Million $</div>
      <div>XI Average Age: {props.team.xiAverageAge}</div>
      <div className="mb-4">Matches Played: {props.team.matches_played}</div>

      <div className="mb-4">Team Overall: {props.team.overall}</div>

      <div className="row mb-4">
        <center className="col-sm" style={{ color: defencecolor }}>
          <center>Defence</center>
          <center>{props.team.defenceRating}</center>
        </center>
        <center className="col-sm" style={{ color: midfieldcolor }}>
          <center>Midfield</center>
          <center>{props.team.midfieldRating}</center>
        </center>
        <center className="col-sm" style={{ color: attackcolor }}>
          <center>Attacking</center>
          <center>{props.team.attackingRating}</center>
        </center>
      </div>

      <div className="row mb-4">
        <center className="col-sm">
          <center>Defence Width</center>
          <center>{props.team.defenceWidth}</center>
        </center>
        <center className="col-sm">
          <center>Defence Depth</center>
          <center>{props.team.defenceDepth}</center>
        </center>
      </div>
      <div className="mb-4">Offence Width: {props.team.offenceWidth}</div>

      <div className="row">
        <center className="col-sm">Lose</center>
        <center className="col-sm">Draw</center>
        <center className="col-sm">Win</center>
      </div>
      <div className="row">
        <center className="col-sm">
          {(props.team.avloses * 100).toFixed(0)}%
        </center>
        <center className="col-sm">
          {(props.team.avdraws * 100).toFixed(0)}%
        </center>
        <center className="col-sm">
          {(props.team.avwins * 100).toFixed(0)}%
        </center>
      </div>

      <div className="row mb-4">
        <center className="col-sm">
          <center></center>
          <center></center>
        </center>
        <center className="col-sm">
          <center></center>
          <center></center>
        </center>
        <center className="col-sm">
          <center></center>
          <center></center>
        </center>
      </div>

      <div>Average Goals: {props.team.avgoals.toFixed(2)}</div>
      <div>Average Goals Conceded: {props.team.avconceded.toFixed(2)}</div>
      <div>Average Goal Attempts: {props.team.avgoalattempts.toFixed(2)}</div>
      <div>Average Shots on Goal: {props.team.avshotsongoal.toFixed(2)}</div>
      <div>Average Shots off Goal: {props.team.avshotsoffgoal.toFixed(2)}</div>
      <div>Average Possession: {props.team.avpossession.toFixed(2)}%</div>
      <div>Average Freekicks: {props.team.avfreekicks.toFixed(2)}</div>
    </div>
  );
}
