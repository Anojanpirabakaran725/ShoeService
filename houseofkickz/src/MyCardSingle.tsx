import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./App.css";
import { Shoe } from "./Types/TypeShoe";

function MyCardSingle(props: Shoe) {
  const history1 = useHistory();
  return (
    <Card className="card">
      <Card.Img className="img" src={props.img} alt="" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{props.id}</Card.Title>
        <Card.Text className="card-text-name">{props.name}</Card.Text>
        <Card.Text className="card-text-price">{props.price}</Card.Text> <br />
        <button
          className="button"
          onClick={() => history1.push("/AllProducts")}
        >
          Back
        </button>
      </Card.Body>
    </Card>
  );
}

export default MyCardSingle;
