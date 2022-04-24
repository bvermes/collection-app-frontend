import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export default function ProfilePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col" height="400px">
          <Card className="mt-5 bg-dark text-white">
            <Card.Img src="logo512.png" alt="Card image" />
          </Card>
          <Button className="mt-3" variant="primary" size="lg">
            Large button
          </Button>
        </div>
        <div className="col ">
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
