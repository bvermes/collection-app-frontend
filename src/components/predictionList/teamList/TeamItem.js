import React, { useState, useEffect, useRef, ScrollView } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit, TiChartBarOutline } from "react-icons/ti";
import Card from "react-bootstrap/Card";

export default function TeamItem({ elements, handleDetailsClicked }) {
  //módosításra szánt értékek
  const [edit, setEdit] = useState({
    name: "",
  });

  //frissíti az elemet, átadja a filternek, ami a valueba visszaadja az inputokat, hogy meg lehessen hívni a list updateElement fv-ét
  const submitUpdate = (value) => {
    //TODO : updateElement(edit.id, value);
    setEdit({
      id: null,
      name: "",
    });
  };
  //ha az edit.id értéket vesz fel(csak akkor vehet fel, ha az editre nyomunk, akkor betölt a filter)
  if (edit.id) {
    {
      /*return <CollectibleAdder edit={edit} onSubmit={submitUpdate} />;*/
    }
    //TODO : handleEditClicked(edit);
  }
  return (
    <div style={{ height: "600px", overflowY: "auto" }}>
      {elements?.map((element, index) => (
        <div className="d-flex element-row" key={index}>
          <Card className="bg-dark text-white">
            <Card.Img
              src={"/img/TeamImages/" + element.teamname.toLowerCase() + ".png"}
              height={150}
              alt="Card image"
            />
          </Card>
          <div className="row col-8 p-2">
            <div className="col-10 p-2">
              <div className="row">
                <div className="col">Name</div>
              </div>
              <div className="row" key={element.id}>
                <div className="col">{element.teamname}</div>
              </div>
            </div>
          </div>

          <div className="col-1 p-2 icons">
            <RiCloseCircleLine
              //TODO: onClick={() => removeElement(element.id)}
              className="delete-icon"
            />
            <TiEdit
              //TODO: onClick={() => handleEditClicked(element)}
              className="edit-icon"
            />
            <TiChartBarOutline
              onClick={() => handleDetailsClicked(element)}
              className="edit-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
