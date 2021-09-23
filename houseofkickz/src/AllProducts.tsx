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

export default function AllProducts() {
  const [data, setData] = useState<Shoe[]>([]);
  //const [searchInput, setSearchInput] = useState("");
  const { search, addSearch } = useContext(SearchContext);

  useEffect(() => {
    fetch("http://localhost:3001/posts/")
      .then((response) => {
        return response.json(); //Die Posts werden zu einem Response.json Object
      })
      .then((myJson) => {
        //Das returnte Objekt wird im myJson spiechern
        setData(myJson); //Das Array wird hier im State data gespeichert
      });
  }, [search]);

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
