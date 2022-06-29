import React from "react";
import { Card, Button } from "react-bootstrap";
import Rocket from "../assets/image/rocket.png";

function CardPage(props) {
  return (
    <>
      <Card bg="dark" variant="dark" onClick={props.onClick}>
        <div>
          <img src={props.image} width={150} height={150} />
        </div>
        <div className="text-light mt-4">
          <h3>{props.text}</h3>
        </div>
      </Card>
    </>
  );
}

export default CardPage;
