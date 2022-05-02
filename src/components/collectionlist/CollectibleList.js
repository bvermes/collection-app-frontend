import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CollectibleFilter from "./CollectibleFilter";
import CollectibleItem from "./CollectibleItem";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import { Endpoints, headers } from "../../config";

export default function CollectibleList() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    console.log(Endpoints.collectionList);
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
            };
            return updatedItem;
          })
        );
        console.log(elements);
      })
      .catch(console.log);
  }, []);

  //filter segédfüggvénye, hogy hozzá tudjunk adni a listához
  const addElement = (element) => {
    if (!element.name || /^\s*$/.test(element.text)) {
      return;
    }
    const newElements = [element, ...elements];

    setElements(newElements);
    console.log(...elements);
  };
  //item segédfüggvénye, hogy töröljünk az iconkattintáskor a listából
  const removeElement = (id) => {
    const removeArr = [...elements].filter((element) => element.id != id);

    setElements(removeArr);
  };
  //item segédfüggvénye, hogy módosítani tudjunk az iconkattintáskor a listából
  const updateElement = (elementId, newValue) => {
    if (!newValue.name || /^\s*$/.test(newValue.text)) {
      return;
    }
    setElements((prev) =>
      prev.map((item) => (item.id === elementId ? newValue : item))
    );
  };
  ////item segédfüggvénye, hogy checkboxmódosításkor változzon a listában szereplő elem forSale értéke
  const handleCheckboxChange = (id, checked) => {
    setElements((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            forSale: !item.forSale,
          };
          return updatedItem;
        }
        return item;
      })
    );
  };

  const handleSellPriceChange = (id, inputsellprice) => {
    console.log(id);
    console.log(inputsellprice);
    setElements((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            sellprice: inputsellprice,
          };
          return updatedItem;
        }
        return item;
      })
    );
  };

  return (
    <div>
      <CollectibleFilter edit={null} onSubmit={addElement} />
      <CollectibleItem
        elements={elements}
        removeElement={removeElement}
        updateElement={updateElement}
        handleCheckboxChange={handleCheckboxChange}
        handleSellPriceChange={handleSellPriceChange}
      />
    </div>
  );
}
