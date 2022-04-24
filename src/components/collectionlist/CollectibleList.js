import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CollectibleFilter from "./CollectibleFilter";
import CollectibleItem from "./CollectibleItem";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

export default function CollectibleList() {
  const [elements, setElements] = useState([]);

  const addElement = (element) => {
    if (!element.name || /^\s*$/.test(element.text)) {
      return;
    }
    const newElements = [element, ...elements];

    setElements(newElements);
    console.log(...elements);
  };

  const removeElement = (id) => {
    const removeArr = [...elements].filter((element) => element.id != id);

    setElements(removeArr);
  };

  const updateElement = (elementId, newValue) => {
    if (!newValue.name || /^\s*$/.test(newValue.text)) {
      return;
    }
    setElements((prev) =>
      prev.map((item) => (item.id === elementId ? newValue : item))
    );
  };

  return (
    <div>
      <CollectibleFilter onSubmit={addElement} />
      <CollectibleItem
        elements={elements}
        removeElement={removeElement}
        updateElement={updateElement}
      />
    </div>
  );
}
