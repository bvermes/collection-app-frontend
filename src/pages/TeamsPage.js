import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import TeamFilter from "../components/predictionList/teamList/TeamFilter";
import TeamItem from "../components/predictionList/teamList/TeamItem";

export default function TeamsPage() {
    const [elements, setElements] = useState([]);
    const [listableElements, setListableElements] = useState([]);
    const [currentFilter, setCurrentFilter] = useState();
    const [edit, setEdit] = useState();

    const item1 ={
        name: "Alaves"
    }
    const item2 ={
        name: "Barcelona"
    }
    elements.push(item1);
    elements.push(item2);
    //TODO: SetElements(indítás)

    const handleFilterClick = (filter) => {
        setCurrentFilter(filter);
        console.log("handled");
      };
      useEffect(() => {
        console.log(currentFilter);
        setListableElements(
          [...elements]
            .filter((it) =>
              it.name?.toLowerCase().includes(currentFilter.name.toLowerCase())
            )
        );
      }, [currentFilter]);

    return (
        <div>
            <TeamFilter onFilterClick={handleFilterClick}/>
            <TeamItem elements={listableElements}/>
        </div>
    );
}
