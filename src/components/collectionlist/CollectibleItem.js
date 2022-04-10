import React, { useState } from "react";
import CollectibleFilter from "./CollectibleFilter";
import "bootstrap/dist/css/bootstrap.css";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

export default function CollectibleItem() {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
    value: "",
    price: "",
  });
  const [name, setName] = useState({
    name: "",
  });
  const [value, setValue] = useState({
    value: 0,
  });
  const [price, setPrice] = useState({
    price: 0,
  });
  return elements.map((element, index) => (
    <div
      className={element.forSale ? "element-row forSale" : "element-row"}
      key={index}
    >
      <div key={element.id} onClick={() => forSaleElement(element.id)}>
        {element.id}
      </div>
      <div className="icons"></div>
    </div>
  ));
}
