import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CollectibleFilter from "./CollectibleFilter";
import CollectibleItem from "./CollectibleItem";

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
  return (
    <div>
      <CollectibleFilter onSubmit={addElement} />
      <CollectibleItem />
    </div>
  );
}
