import "bootstrap/dist/css/bootstrap.css";
import TeamsPage from "./TeamsPage";
import MatchesPage from "./MatchesPage";
import NavBarPredictor from "../components/navbar/NavbarPredictor";
import React, { useState, useEffect, useCallback } from "react";
import { Endpoints, headers } from "../config.js";
import axios from "axios";

export default function PredicterPage() {
  const [isLoading, SetIsLoading] = useState(true);
  const [elements, setElements] = useState([]);

  //false == TeamsPage
  //true == MatchesPage
  const [activepage, setActivepage] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
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
              return updatedItem;
            })
          );
        })
        .catch(console.log);
    }
    fetchData();
    SetIsLoading(false);
  }, [Endpoints]);

  const handlePageChange = useCallback(
    async (change) => {
      setActivepage(change);
      console.log(change);
    },
    [activepage]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBarPredictor changePage={handlePageChange} />
      {!activepage && <TeamsPage elements={elements} />}
      {activepage && <MatchesPage elements={elements} />}
    </div>
  );
}
