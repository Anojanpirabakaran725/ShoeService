import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./MyCard";
import { Shoe } from "./Types/TypeShoe";
import { SearchContext } from "./Context/SearchContext";
import { ProductService } from "./ProductService";

const productservice = new ProductService();

export default function AllProducts() {
  const [data, setData] = useState<Shoe[]>([]);
  const { search, addSearch } = useContext(SearchContext);

  //use the getAllProducts function and set the url as argument
  useEffect(() => {
   productservice.getAllProducts()
      //if you get the data save it to data
      .then((response) => response.data)
      //set the data to show the products
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1 className="all-products-title">Shop</h1>
      <Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            onChange={(event) => addSearch(event.target.value)}
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Nav>
      <Container>
        <Row>
          {data
            .filter((value) => {
              return value.name.toLowerCase().includes(search) || search === "";
            })
            .map((posts: Shoe) => {
              return (
                <Col md={4}>
                  <MyCard
                    img={posts.img}
                    id={posts.id}
                    name={posts.name}
                    price={posts.price}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}
