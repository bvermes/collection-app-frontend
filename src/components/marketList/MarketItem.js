import React, { useState, useEffect, useRef, ScrollView } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Card from "react-bootstrap/Card";

export default function MarketItem({ elements, updateElement }) {
  //módosításra szánt értékek
  const [edit, setEdit] = useState({
    id: null,
    name: "",
    value: "",
    price: "",
    forSale: false,
  });

  //frissíti az elemet, átadja a filternek, ami a valueba visszaadja az inputokat, hogy meg lehessen hívni a list updateElement fv-ét
  const submitUpdate = (value) => {
    updateElement(edit.id, value);
    setEdit({
      id: null,
      name: "",
      value: "",
      price: "",
      forSale: false,
    });
  };
  //ha az edit.id értéket vesz fel(csak akkor vehet fel, ha az editre nyomunk, akkor betölt a filter)
  return (
    <div style={{ height: "600px", overflowY: "auto" }}>
      {elements?.map((element, index) => (
        <div className="d-flex element-row" key={index}>
          <Card className="bg-dark text-white">
            <Card.Img
              src={"https://localhost:7028/Images/" + element.imageName}
              height={150}
              alt="Card image"
            />
          </Card>
          <div className="row col-8 p-2">
            <div className="col-10 p-2">
              <div className="row">
                <div className="col">Name</div>
                <div className="col">Purchase price</div>
                <div className="col">Current value</div>
              </div>
              <div className="row" key={element.id}>
                <div className="col">{element.name}</div>
                <div className="col">{element.price}</div>
                <div className="col">{element.value}</div>
              </div>
            </div>
            <div className="col-2 p-2 mx-auto">
              <div>Selling price</div>
              <div>1000</div>
            </div>
          </div>
          <div className="col-2 mx-auto">
            <div>Seller's profile</div>
            <div>Balazs</div>
          </div>
        </div>
      ))}
    </div>
  );
}
