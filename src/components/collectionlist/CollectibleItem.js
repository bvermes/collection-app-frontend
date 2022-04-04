import React, { useState } from "react";
import CollectibleFilter from "./CollectibleFilter";
import "bootstrap/dist/css/bootstrap.css";

export default function CollectibleItem() {
  const [edit, setEdit] = useState({
    name: "",
  });
  const elementList = [];
  return (
    <h1>
      <div>CollectibleItem</div>
    </h1>
  );
}
