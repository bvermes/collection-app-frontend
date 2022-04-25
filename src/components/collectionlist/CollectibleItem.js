import React, { useState } from "react";
import CollectibleFilter from "./CollectibleFilter";
import "bootstrap/dist/css/bootstrap.css";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Card from "react-bootstrap/Card";

export default function CollectibleItem({
  elements,
  removeElement,
  updateElement,
}) {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
    value: "",
    price: "",
    forSale: false,
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

  const handleCheckboxChange = (e) => {};

  if (edit.id) {
    return <CollectibleFilter edit={edit} onSubmit={submitUpdate} />;
  }
  return elements.map((element, index) => (
    <div className="d-flex element-row" key={index}>
      <Card className="bg-dark text-white">
        <Card.Img src="ronaldinho.jpg" height={200} alt="Card image" />
      </Card>
      <div className="row col-8 p-2">
        <div className="col-10 p-2">
          <div className="row">
            <div className="col">name</div>
            <div className="col">price</div>
            <div className="col">value</div>
          </div>
          <div className="row" key={element.id}>
            <div className="col">{element.name}</div>
            <div className="col">{element.price}</div>
            <div className="col">{element.value}</div>
          </div>
        </div>
        <div className="col-2 mx-auto">
          <div>For Sale</div>
          <input
            type="checkbox"
            name="name"
            className="collectible-inputcheckbox"
            onChange={handleCheckboxChange}
          />
        </div>
      </div>

      <div className="col-1 p-2 icons">
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
