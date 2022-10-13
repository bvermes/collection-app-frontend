import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import TeamFilter from "../components/predictionList/teamList/TeamFilter";
import TeamItem from "../components/predictionList/teamList/TeamItem";
import { Endpoints, headers } from "../config.js";
import axios from "axios";
import Modal from "../components/modal/Modal.js";

export default function TeamsPage() {
  const [elements, setElements] = useState([]);
  const [listableElements, setListableElements] = useState([]);
  const [currentFilter, setCurrentFilter] = useState({ name: "" });
  const [edit, setEdit] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [detailedTeam, setDetailedTeam] = useState();

  useEffect(() => {
    fetchData();
    setEdit(null);
    setDetailedTeam(null);
    //if(elements.length == 0){
    //  console.log(elements)
    //  fetchData();
    //}
    //////////
  }, []);

  const fetchData = () => {
    console.log(Endpoints.teamsList);
    axios
      .get(Endpoints.teamsList, { headers })
      .then(({ data }) => {
        const loadData = () => JSON.parse(JSON.stringify(data));
        setElements(loadData);
        setElements((prev) =>
          prev.map((item) => {
            const updatedItem = {
              id: item.id,
              teamname: item.teamname,
              matches_played: item.matches_played,
              overall: item.overall,
              attackingRating: item.attackingRating,
              midfieldRating: item.midfieldRating,
              defenceRating: item.defenceRating,
              clubWorth: item.clubWorth,
              xiAverageAge: item.xiAverageAge,
              defenceWidth: item.defenceWidth,
              defenceDepth: item.defenceDepth,
              offenceWidth: item.offenceWidth,
              likes: item.likes,
              dislikes: item.dislikes,
              avgoals: item.avgoals,
              avconceded: item.avconceded,
              avgoalattempts: item.avgoalattempts,
              avshotsongoal: item.avshotsongoal,
              avshotsoffgoal: item.avshotsoffgoal,
              avblockedshots: item.avblockedshots,
              avpossession: item.avpossession,
              avfreekicks: item.avfreekicks,
              avGoalDiff: item.avGoalDiff,
              avwins: item.avwins,
              avdraws: item.avdraws,
              avloses: item.avloses,
            };
            //console.log(updatedItem);
            return updatedItem;
          })
        );
        //console.log(elements);
        setListableElements([...elements]);
        //console.log(listableElements);
      })
      .catch(console.log);
  };

  // const fetchData = () => {
  //   const item1 ={
  //     name: "Alaves"
  // }
  // const item2 ={
  //     name: "Barcelona"
  // }
  // elements.push(item1);
  // elements.push(item2);
  // console.log(elements);
  // }

  //TODO: SetElements(indítás)

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
    console.log("handled");
  };
  useEffect(() => {
    console.log(currentFilter);
    setListableElements(
      [...elements].filter((it) =>
        it.teamname?.toLowerCase().includes(currentFilter.name.toLowerCase())
      )
    );
  }, [currentFilter]);

  const handleDetailsClicked = (element) => {
    console.log(element);
    setOpenModal(true);
    setDetailedTeam(element);
    console.log(detailedTeam);
    console.log("done");
  };
  ///////////

  return (
    <div>
      {openModal && <Modal closeModal={setOpenModal} team={detailedTeam} />}
      <TeamFilter onFilterClick={handleFilterClick} />
      <TeamItem
        elements={listableElements}
        handleDetailsClicked={handleDetailsClicked}
      />
    </div>
  );
}
