import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

export default function CollectibleAdder(props) {
  const [autoId, setAutoId] = useState(1);
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [imageSrc, setImageSrc] = useState("img/default.png");
  const [imageFile, setImageFile] = useState(null);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    if (props.edit != null) {
      setInputName(props.edit.name);
      setInputPrice(props.edit.boughtFor);
      setInputValue(props.edit.value);
      setImageSrc("https://localhost:7028/Images/" + props.edit.imageName);
      setImageFile(props.edit.imageFile);
    }
  }, []);

  //https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  //https://www.youtube.com/watch?v=ORVShW0Yjaw&list=WL&index=44&ab_channel=CodAffection
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let fileUploaded = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setImageFile(fileUploaded);
        setImageSrc(x.target.result);
      };
      reader.readAsDataURL(fileUploaded);
    }
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

  const validate = () => {
    if (inputName === "") {
      console.log(inputName);
      return false;
    } else return true;
  };

  //itt adja hozzá a list-hez az elemet, majd nullázza az értékeket
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate() === true) {
      console.log("admitted");
      props.onSubmit({
        id: autoId,
        name: inputName,
        value: inputValue,
        boughtFor: inputPrice,
        sellingPrice: 0,
        forSale: false,
        sold: false,
        imageName: imageSrc,
        imageFile: imageFile,
        //imageSrc: imageSrc,
      });

      setAutoId(autoId + 1);
      setInputName("");
      setInputPrice("");
      setInputValue("");
      setImageSrc("img/default.png");
      setImageFile(null);
    } else {
      console.log("missing info");
      console.log(inputName);
    }
  };

  //ha módosítunk az eredeti értékek betöltésre kerülnek
  //useEffect(() => {
  //  if (props.edit != null) {
  //    setInputName(props.edit.name);
  //    setInputPrice(props.edit.price);
  //    setInputValue(props.edit.value);
  //  }
  //}, [setInputName, setInputPrice, setInputValue]);

  return (
    <div className="collectible-adder">
      <form className="collectible-form" onSubmit={handleSubmit}>
        <div>
          <div className="p-2 m-2">
            <Card className="bg-dark text-white">
              <Card.Img src={imageSrc} alt="Card image" />
            </Card>
            <button
              className="p-2 m-2 collectible-button"
              onClick={handleClick}
            >
              Upload a file
            </button>
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
          <div className="m-2">
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
          <div className="m-2">
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
          <div className="m-2">
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
