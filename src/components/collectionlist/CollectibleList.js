import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CollectibleFilter from "./CollectibleFilter";
import CollectibleItem from "./CollectibleItem";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

export default function CollectibleList() {
  const [elements, setElements] = useState([]);

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

  return (
    <div>
      <CollectibleFilter edit={null} onSubmit={addElement} />
      <CollectibleItem
        elements={elements}
        removeElement={removeElement}
        updateElement={updateElement}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}
