import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CollectibleAdder from "./CollectibleAdder";
import CollectibleItem from "./CollectibleItem";
import axios from "axios";
import { Endpoints, headers } from "../../config";
import "bootstrap/dist/css/bootstrap.css";
import CollectibleFilter from "./CollectibleFilter";

export default function CollectibleList() {
  const [elements, setElements] = useState([]);
  const [listableElements, setListableElements] = useState([]);
  const [currentFilter, setCurrentFilter] = useState();
  const [edit, setEdit] = useState();

  //backendes adatbetöltés
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log(Endpoints.collectionList);
    axios
      .get(Endpoints.collectionList, { headers })
      .then(({ data }) => {
        const loadData = () => JSON.parse(JSON.stringify(data));
        setElements(loadData);
        setElements((prev) =>
          prev.map((item) => {
            const updatedItem = {
              id: item.id,
              name: item.name,
              value: item.value,
              price: item.boughtFor,
              sellprice: 0,
              forSale: item.forSale,
              imageName: item.imageName,
              imageFile: item.imageFile,
            };
            console.log(item);
            return updatedItem;
          })
        );
        console.log(elements);
        setListableElements([...elements]);
        console.log(listableElements);
      })
      .catch(console.log);
  };

  //useEffect(async () => {
  //  updateListables();
  //});

  //CollectibleAdder segédfüggvénye, hogy hozzá tudjunk adni a listához
  const addElement = (element) => {
    if (!element.name || /^\s*$/.test(element.text)) {
      return;
    }
    const formData = new FormData();
    formData.append("id", element.id);
    formData.append("name", element.name);
    formData.append("boughtFor", element.boughtFor);
    formData.append("value", element.value);
    formData.append("forSale", element.forSale);
    formData.append("imageName", element.imageName);
    formData.append("imageFile", element.imageFile);
    //formData.append("imageSrc", element.imageSrc);
    console.log(formData);
    axios.post(Endpoints.collectionList, formData).then((res) => {
      console.log("Sikerült");
    });
    const newElements = [element, ...elements];
    setElements(newElements);
    console.log(element);
    console.log(elements);
    handleFilterClick(currentFilter);
  };

  //CollectibleItem segédfüggvénye, hogy töröljünk az iconkattintáskor a listából
  const removeElement = (id) => {
    const removeArr = [...elements].filter((element) => element.id != id);

    setElements(removeArr);
    handleFilterClick(currentFilter);
  };

  //CollectibleItem segédfüggvénye, hogy módosítani tudjunk az iconkattintáskor a listából
  const updateElement = (elementId, newValue) => {
    if (!newValue.name || /^\s*$/.test(newValue.text)) {
      return;
    }
    setElements((prev) =>
      prev.map((item) => (item.id === elementId ? newValue : item))
    );
    handleFilterClick(currentFilter);
  };

  ////CollectibleItem segédfüggvénye, hogy checkboxmódosításkor változzon a listában szereplő elem forSale értéke
  const handleCheckboxChange = (id, checked) => {
    setElements((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            forSale: !item.forSale,
          };
          return updatedItem;
        }
        return item;
      })
    );
    handleFilterClick(currentFilter);
  };

  //eladási ár módsoítását menti a helyi listában
  const handleSellPriceChange = (id, inputsellprice) => {
    console.log(id);
    console.log(inputsellprice);
    setElements((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            sellprice: inputsellprice,
          };
          return updatedItem;
        }
        return item;
      })
    );
    handleFilterClick(currentFilter);
  };

  //CollectibleFilter-en filter gombra nyomva szűrni
  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
    console.log(filter);
    setListableElements(
      [...elements]
        .filter((it) =>
          it.name?.toLowerCase().includes(filter.name.toLowerCase())
        )
        .filter(
          (it) =>
            parseFloat(filter.minPrice) === 0 ||
            it.price > parseFloat(filter.minPrice)
        )
        .filter(
          (it) =>
            parseFloat(filter.maxPrice) === 0 ||
            it.price < parseFloat(filter.maxPrice)
        )
        .filter(
          (it) =>
            parseFloat(filter.minValue) === 0 ||
            it.value > parseFloat(filter.minValue)
        )
        .filter(
          (it) =>
            parseFloat(filter.maxValue) === 0 ||
            it.value < parseFloat(filter.maxValue)
        )
    );

    //if (parseFloat(filter.minValue) !== 0) {
    //  setListableElements(
    //    [...listableElements].filter(
    //      (it) => it.value > parseFloat(filter.minValue)
    //    )
    //  );
    //  console.log("min value:" + parseFloat(filter.minValue));
    //  console.log(
    //    [...listableElements].filter(
    //      (it) => it.value > parseFloat(filter.minValue)
    //    )
    //  );
    //}
    //if (parseFloat(filter.maxValue) !== 0) {
    //  setListableElements(
    //    [...listableElements].filter(
    //      (it) => it.value < parseFloat(filter.maxValue)
    //    )
    //  );
    //
    //  console.log("max value:" + parseFloat(filter.maxValue));
    //  console.log(
    //    [...listableElements].filter(
    //      (it) => it.value > parseFloat(filter.minValue)
    //    )
    //  );
    //}
    //if (parseFloat(filter.minPrice) !== 0) {
    //  setListableElements(
    //    [...listableElements].filter(
    //      (it) => it.price > parseFloat(filter.minPrice)
    //    )
    //  );
    //}
    //if (parseFloat(filter.maxPrice) !== 0) {
    //  setListableElements(
    //    [...listableElements].filter(
    //      (it) => it.price < parseFloat(filter.maxPrice)
    //    )
    //  );
    //}
  };

  const handleEditClicked = (e) => {
    setEdit(e);
    console.log(edit);
  };
  if (edit) {
    return (
      <div>
        <div>
          <CollectibleFilter onFilterClick={handleFilterClick} />
        </div>
        <div className="row">
          <center className="col-3 center">
            <CollectibleAdder edit={edit} onSubmit={updateElement} />
          </center>
          <div className="col-9">
            <CollectibleItem
              elements={listableElements}
              removeElement={removeElement}
              updateElement={updateElement}
              handleCheckboxChange={handleCheckboxChange}
              handleSellPriceChange={handleSellPriceChange}
              handleEditClicked={handleEditClicked}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <CollectibleFilter onFilterClick={handleFilterClick} />
        </div>
        <div className="row">
          <center className="col-3 center">
            <CollectibleAdder edit={null} onSubmit={addElement} />
          </center>
          <div className="col-9">
            <CollectibleItem
              elements={listableElements}
              removeElement={removeElement}
              updateElement={updateElement}
              handleCheckboxChange={handleCheckboxChange}
              handleSellPriceChange={handleSellPriceChange}
              handleEditClicked={handleEditClicked}
            />
          </div>
        </div>
      </div>
    );
  }
}
