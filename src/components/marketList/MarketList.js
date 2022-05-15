import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Endpoints, headers } from "../../config";
import "bootstrap/dist/css/bootstrap.css";
import MarketFilter from "./MarketFilter";
import MarketItem from "./MarketItem";

export default function MarketList() {
  const [elements, setElements] = useState([]);
  const [listableElements, setListableElements] = useState([]);
  const [currentFilter, setCurrentFilter] = useState();
  const [edit, setEdit] = useState();

  //backendes adatbetöltés
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log(Endpoints.marketList);
    axios
      .get(Endpoints.collectionList, { headers })
      .then(({ data }) => {
        const loadData = () => JSON.parse(JSON.stringify(data));
        setElements(loadData);
        setElements((prev) =>
          prev.map((item) => {
            const updatedItem = {
              id: item.id,
              name: item.name,
              value: item.value,
              price: item.boughtFor,
              sellprice: 0,
              forSale: item.forSale,
              imageName: item.imageName,
              imageFile: item.imageFile,
            };
            return updatedItem;
          })
        );
        console.log(elements);
        setListableElements([...elements]);
        console.log(listableElements);
      })
      .catch(console.log);
  };

  //CollectibleFilter-en filter gombra nyomva szűrni
  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
    console.log(filter);
    setListableElements(
      [...elements]
        .filter((it) =>
          it.name?.toLowerCase().includes(filter.name.toLowerCase())
        )
        .filter(
          (it) =>
            parseFloat(filter.minPrice) === 0 ||
            it.price > parseFloat(filter.minPrice)
        )
        .filter(
          (it) =>
            parseFloat(filter.maxPrice) === 0 ||
            it.price < parseFloat(filter.maxPrice)
        )
        .filter(
          (it) =>
            parseFloat(filter.minValue) === 0 ||
            it.value > parseFloat(filter.minValue)
        )
        .filter(
          (it) =>
            parseFloat(filter.maxValue) === 0 ||
            it.value < parseFloat(filter.maxValue)
        )
    );
  };
  return (
    <div>
      <div>
        <MarketFilter onFilterClick={handleFilterClick} />
      </div>
      <div>
        <MarketItem elements={listableElements} />
      </div>
    </div>
  );
}
