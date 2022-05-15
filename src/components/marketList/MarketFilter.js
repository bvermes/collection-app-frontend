import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function MarketFilter(props) {
  const [name, setName] = useState("");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleFilterClick = () => {
    props.onFilterClick({
      name: name,
      minValue: minValue,
      maxValue: maxValue,
      minPrice: minPrice,
      maxPrice: maxPrice,
    });
    console.log(minPrice);
  };

  return (
    <div
      className="row m-2 mx-auto align-items-center justify-content-between filter-row"
      style={{ background: "#303030" }}
    >
      <div className="col m-3">
        <input
          type="text"
          placeholder="Enter Collectible's name"
          className="form-control textbox"
          value={name}
          style={{ background: "#505050" }}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="col m-3">
        <div>
          <input
            type="number"
            placeholder="Collectible's minimum value"
            className="form-control"
            style={{ background: "#505050" }}
            onChange={(e) => setMinValue(e.target.value)}
          />

          <input
            type="number"
            placeholder="Collectible's maximum value"
            className="form-control"
            style={{ background: "#505050" }}
            onChange={(e) => setMaxValue(e.target.value)}
          />
        </div>
      </div>

      <div className="col m-3">
        <input
          type="number"
          placeholder="Collectible's minimum price"
          className="form-control"
          style={{ background: "#505050" }}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Collectible's maximum price"
          className="form-control"
          style={{ background: "#505050" }}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="col m-3">
        <button
          className="btn btn-primary btn-block center"
          onClick={handleFilterClick}
          style={{ background: "#99FF33", color: "black" }}
        >
          Filter
        </button>
      </div>
    </div>
  );
}
