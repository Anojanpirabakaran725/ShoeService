import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import MyCardSingle from "./MyCardSingle";
import { getAllProducts } from "./ProductService";
import { Shoe } from "./Types/TypeShoe";
import { SinglePost } from "./Types/TypeSinglePost";

export default function SingleProductPage() {
  const { id } = useParams<SinglePost>();

  const [data, setData] = useState<Shoe>({} as Shoe);

  //use the getAllProducts function and set the url as argument
  getAllProducts("/posts/" + id)
    //if you get the products save it to data
    .then((response) => response.data)
    //set the data to show the products
    .then((data) => setData(data));
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
