import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function CollectibleFilter(props) {
  const [autoId, setAutoId] = useState(1);
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [inputPrice, setInputPrice] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setInputPrice(e.target.value);
  };
  const handleValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: autoId,
      name: inputName,
      value: inputValue,
      price: inputPrice,
    });

    setAutoId(autoId + 1);
    setInputName("");
    setInputPrice("");
    setInputValue("");
  };

  //if (props.edit != null) {
  //  setInputName(props.edit.name);
  //  setInputPrice(props.edit.price);
  //  setInputValue(props.edit.value);
  //}

  return (
    <div>
      <form className="collectible-form" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <div className="p-2 m-2">
            <div style={{ color: "white" }}>Name of the collectible</div>
            <input
              type="text"
              placeholder="Name of the collectible"
              value={inputName}
              name="name"
              className="collectible-inputName"
              onChange={handleNameChange}
              ref={inputRef}
            />
          </div>
          <div className="p-2 m-2">
            <div style={{ color: "white" }}>Purchase Price</div>
            <input
              type="number"
              placeholder="Purchase Price"
              value={inputPrice}
              name="price"
              className="collectible-inputPrice"
              onChange={handlePriceChange}
            />
          </div>
          <div className="p-2 m-2">
            <div style={{ color: "white" }}>Current Value</div>
            <input
              type="number"
              placeholder="Current Value"
              value={inputValue}
              name="value"
              className="collectible-inputValue"
              onChange={handleValueChange}
            />
          </div>
          <button className="p-2 m-2 collectible-button">
            Add Collectible
          </button>
        </div>
      </form>
    </div>
  );
}
