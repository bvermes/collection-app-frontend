import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./CustomDropdown.css";

export default function CustomDropdown(props) {
  const [displayName, setDisplayName] = useState("Teams");

  const handleClick = (element) => {
    setDisplayName(element.teamname);
    props.handleDropdownRefresh(element, props.k);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle style={{ background: "#99FF33"}} id="dropdown-basic">
        {displayName}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{background:"rgba(255,255,255,0.7)", color:"white"}}className="dropdown-menu">
        {props.elements?.map((element, index) => (
          <Dropdown.Item style={{color:"black"}} key={index} onClick={() => handleClick(element)}>
            {element.teamname}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

//const hasSetInitialItem = useRef(false);

//useEffect(() => props.onSelectedChange(selectedItem), [props, selectedItem]);
//<Dropdown.Item key={1}>Another action</Dropdown.Item>

//<Dropdown.Item key={3}>Another action</Dropdown.Item>
//<Dropdown>
//<Dropdown.Toggle variant="success" id="dropdown-basic">
//  Teams
//</Dropdown.Toggle>
//
//<Dropdown.Menu>
//  {props.elements?.map((element, index) => {
//    <Dropdown.Item key={1}>Another action</Dropdown.Item>;
//  })}
//</Dropdown.Menu>
//</Dropdown>
