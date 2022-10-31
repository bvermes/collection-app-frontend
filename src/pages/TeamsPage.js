import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import TeamFilter from "../components/predictionList/teamList/TeamFilter";
import TeamItem from "../components/predictionList/teamList/TeamItem";

import Modal from "../components/modal/Modal.js";

export default function TeamsPage(props) {
  const [elements, setElements] = useState([]);
  const [listableElements, setListableElements] = useState([]);
  const [currentFilter, setCurrentFilter] = useState({ name: "" });
  const [edit, setEdit] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [detailedTeam, setDetailedTeam] = useState();

  useEffect(() => {
    function init() {
      setElements(props.elements);
      setListableElements(props.element);
    }
    init();
  }, [props.elements]);

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
  useEffect(() => {
    console.log(currentFilter);
    setListableElements(
      [...elements].filter((it) =>
        it.teamname?.toLowerCase().includes(currentFilter.name.toLowerCase())
      )
    );
  }, [currentFilter]);

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
    console.log("handled");
  };

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
