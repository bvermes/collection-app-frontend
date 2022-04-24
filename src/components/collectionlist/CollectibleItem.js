import React, { useState } from "react";
import CollectibleFilter from "./CollectibleFilter";
import "bootstrap/dist/css/bootstrap.css";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export default function CollectibleItem({
  elements,
  forSale,
  removeElement,
  updateElement,
}) {
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

  const submitUpdate = (value) => {
    updateElement(edit.id, value);
    setEdit({
      id: null,
      name: "",
      value: "",
      price: "",
    });
  };
  if (edit.id) {
    return <CollectibleFilter edit={edit} onSubmit={submitUpdate} />;
  }
  return elements.map((element, index) => (
    <div
      className={element.forSale ? "element-row forSale" : "element-row"}
      key={index}
    >
      <div>
        <div
          className="row"
          key={element.id}
          onClick={() => forSale(element.id)}
        >
          <div className="col">name</div>
          <div className="col">price</div>
          <div className="col">value</div>
        </div>
        <div
          className="row"
          key={element.id}
          onClick={() => forSale(element.id)}
        >
          <div className="col">{element.name}</div>
          <div className="col">{element.price}</div>
          <div className="col">{element.value}</div>
        </div>
      </div>

      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeElement(element.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() =>
            setEdit({
              id: element.id,
              name: element.name,
              value: element.value,
              price: element.price,
            })
          }
          className="edit-icon"
        />
      </div>
    </div>
  ));
}
