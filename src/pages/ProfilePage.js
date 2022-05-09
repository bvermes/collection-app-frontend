import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export default function ProfilePage() {
  //Feltöltőgomb szép legyen
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
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Stack className="mt-5 mx-auto" gap={3}>
            <Card className="bg-dark text-white">
              <Card.Img src="logo512.png" alt="Card image" />
            </Card>
            <div className="row">
              <Button
                className="col m-2"
                variant="primary"
                size="lg"
                onClick={handleClick}
              >
                Upload image
              </Button>
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <Button className="col m-2" variant="success" size="lg">
                Save changes
              </Button>
            </div>
          </Stack>
        </div>

        <div className="col">
          <Stack className="mt-5" gap={5}>
            <div className="row bg-light border">
              <div className="col">Full name:</div>
              <div className="col">Vermes Balázs</div>
            </div>
            <div className="row bg-light border">
              <div className="col">Email:</div>
              <div className="col">qerix8787@gmail.com</div>
            </div>
          </Stack>
        </div>
        <div className="col">
          <Stack className="mt-5" gap={4}>
            <div className="row bg-light border">
              <div className="col">Collection type:</div>
              <div className="col">Cards</div>
            </div>
            <div className="row bg-light border">
              <div className="col">Money spent:</div>
              <div className="col">10000 ft</div>
            </div>
            <div className="row bg-light border">
              <div className="col">Profit:</div>
              <div className="col">10000 ft</div>
            </div>
            <div className="row bg-light border">
              <div className="col">Collection Value:</div>
              <div className="col">20000 ft</div>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
}
