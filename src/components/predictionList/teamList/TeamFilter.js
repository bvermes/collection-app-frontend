import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function CollectibleFilter(props) {
  const [name, setName] = useState("");

  const handleFilterClick = () => {
    props.onFilterClick({name: name});
    console.log(name);
  };

  return (
    <div
      className="row m-2 mx-auto align-items-center justify-content-between filter-row"
      style={{ background: "#303030" }}
    >
      <div className="col m-3">
        <input
          type="text"
          placeholder="Enter Team's name"
          className="form-control textbox"
          value={name}
          style={{ background: "#505050" }}
          onChange={(e) => setName(e.target.value)}
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
