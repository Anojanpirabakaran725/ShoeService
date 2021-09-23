import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import MyCardSingle from "./MyCardSingle";
import {Shoe} from "./Types/TypeShoe"
import {SinglePost} from './Types/TypeSinglePost'

export default function SingleProductPage() {
  const { id } = useParams<SinglePost>();

  const [data, setData] = useState<Shoe>({} as Shoe);

  useEffect(() => {
    fetch("http://localhost:3001/posts/" + id)
      .then((response) => {
        return response.json(); //Die Posts werden zu einem Response.json Object
      })
      .then((myJson) => {
        //Das returnte Objekt wird im myJson spiechern
        setData(myJson); //Das Array wird hier im State data gespeichert
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <MyCardSingle
              name={data.name}
              price={data.price}
              id={data.id}
              img={data.img}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
