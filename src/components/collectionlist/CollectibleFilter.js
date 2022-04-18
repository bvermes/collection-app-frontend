import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function CollectibleFilter(props) {
  const [autoId, setAutoId] = useState(0);
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

  return (
    <div>
      <form className="collectible-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of the collectible"
          value={inputName}
          name="name"
          className="collectible-inputName"
          onChange={handleNameChange}
          ref={inputRef}
        />
        <input
          type="number"
          placeholder="Purchase Price"
          value={inputPrice}
          name="price"
          className="collectible-inputPrice"
          onChange={handlePriceChange}
        />
        <input
          type="number"
          placeholder="Current Value"
          value={inputValue}
          name="value"
          className="collectible-inputValue"
          onChange={handleValueChange}
        />
        <button className="collectible-button">Add Collectible</button>
      </form>
      <h1>
        <div>CollectibleFilter</div>
      </h1>
    </div>
  );
}
