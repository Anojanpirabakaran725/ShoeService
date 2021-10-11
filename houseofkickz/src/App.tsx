import React from "react";
import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingleProductPage from "./SingleProductPage";
import LandingPage from "./LandingPage";
import Contact from "./Contact";
import AllProducts from "./AllProducts";
import About from "./About";
import SearchProvider from "./Context/SearchContext";
import formikFormular from "./FormikFormular";
import CreateNewProduct from "./CreateNewProduct";
import register from "./Register";
import Register from "./Register";

function App() {
  return (
    <>
      <div className="App">
        <SearchProvider>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/">House of Kickz</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                  <Nav.Link href="/Contact">Contact Us</Nav.Link>
                  <Nav.Link href="/AllProducts">Shop</Nav.Link>
                  <Nav.Link href="/FormikFormular">Sign in</Nav.Link>
                  <Nav.Link href="/Register">Register</Nav.Link>
                  <Nav.Link href="/CreateNewProduct">New Product</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <BrowserRouter>
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <Route
                exact
                path={"/SingleProductpage/:id"}
                component={SingleProductPage}
              />
              <Route exact path={"/Contact"} component={Contact} />
              <Route exact path={"/AllProducts"} component={AllProducts} />
              <Route exact path={"/About"} component={About} />
              <Route
                exact
                path={"/FormikFormular"}
                component={formikFormular}
              />
              <Route
                exact
                path={"/Register"}
                component={Register}
              />
              <Route
                exact
                path={"/CreateNewProduct"}
                component={CreateNewProduct}
              />
            </Switch>
          </BrowserRouter>
        </SearchProvider>
      </div>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">House of Kickz</h5>
              <p>Thank you for visiting House of Kickz!</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-6 mb-md-0 mb-6">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="Contact">Contact Us</a>
                </li>
                <li>
                  <a href="AllProducts">Shop</a>
                </li>
                <li>
                  <a href="FormikFormular">Sign in</a>
                </li>
                <li>
                  <a href="Register">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          Copyright © 2021
          <a href="https://houseofkickz.netlify.app/" target="_blank">
            House of Kickz
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
