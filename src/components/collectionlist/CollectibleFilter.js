import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function CollectibleFilter(props) {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleNameChange = (e) => {
    setInputName(e.target.name);
  };
  const handlePriceChange = (e) => {
    setInputPrice(e.target.price);
  };
  const handleValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      name: inputName,
      value: inputValue,
      price: inputPrice,
    });

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
        />
        <input
          type="text"
          placeholder="Purchase Price"
          value={inputPrice}
          name="price"
          className="collectible-inputPrice"
          onChange={handlePriceChange}
        />
        <input
          type="text"
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
