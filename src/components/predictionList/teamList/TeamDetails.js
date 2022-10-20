import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function TeamDetails(props) {
  return (
    <div style={{ height: "300px", overflowY: "auto" }}>
      <div>Team Name: {props.team.teamname}</div>
      <div>Team Overall: {props.team.overall}</div>
      <div>Matches Played: {props.team.matches_played}</div>
      <div>attackingRating: {props.team.attackingRating}</div>
      <div>midfieldRating: {props.team.midfieldRating}</div>
      <div>defenceRating: {props.team.defenceRating}</div>
      <div>clubWorth: {props.team.clubWorth}</div>
      <div>xiAverageAge: {props.team.xiAverageAge}</div>
      <div>defenceWidth: {props.team.defenceWidth}</div>
      <div>defenceDepth: {props.team.defenceDepth}</div>
      <div>offenceWidth: {props.team.offenceWidth}</div>
      <div>likes: {props.team.likes}</div>
      <div>dislikes: {props.team.dislikes}</div>
      <div>avgoals: {props.team.avgoals}</div>
      <div>avconceded: {props.team.avconceded}</div>
      <div>avgoalattempts: {props.team.avgoalattempts}</div>
      <div>avshotsongoal: {props.team.avshotsongoal}</div>
      <div>avshotsoffgoal: {props.team.avshotsoffgoal}</div>
      <div>avblockedshots: {props.team.avblockedshots}</div>
      <div>avpossession: {props.team.avpossession}</div>
      <div>avfreekicks: {props.team.avfreekicks}</div>
      <div>avGoalDiff: {props.team.avGoalDiff}</div>
      <div>avwins: {props.team.avwins}</div>
      <div>avdraws: {props.team.avdraws}</div>
      <div>avloses: {props.team.avloses}</div>
    </div>
  );
}
