import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function CollectibleAdder(props) {
  const [autoId, setAutoId] = useState(1);
  const [inputFile, setInputFile] = useState(null);
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [inputPrice, setInputPrice] = useState(0);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleFile = (e) => {
    let file = e.target.file[0];
    setInputFile(file);
    console.log(inputFile);
  };
  //https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    //props.handleFile(fileUploaded);
  };

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setInputPrice(e.target.value);
  };
  const handleValueChange = (e) => {
    setInputValue(e.target.value);
  };

  //itt adja hozzá a list-hez az elemet, majd nullázza az értékeket
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: autoId,
      name: inputName,
      value: inputValue,
      price: inputPrice,
      sellprice: 0,
      forSale: false,
    });

    setAutoId(autoId + 1);
    setInputName("");
    setInputPrice("");
    setInputValue("");
  };

  //ha módosítunk az eredeti értékek betöltésre kerülnek
  useEffect(() => {
    if (props.edit != null) {
      setInputName(props.edit.name);
      setInputPrice(props.edit.price);
      setInputValue(props.edit.value);
    }
  }, [setInputName, setInputPrice, setInputValue]);

  return (
    <div>
      <form className="collectible-form" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <div className="p-2 m-2">
            <div>Picture of the collectible</div>
            <button
              className="p-2 m-2 collectible-button"
              onClick={handleClick}
            >
              Upload a file
            </button>
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </div>
          <div className="p-2 m-2">
            <div>Name of the collectible</div>
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
            <div>Purchase Price</div>
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
            <div>Current Value</div>
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
