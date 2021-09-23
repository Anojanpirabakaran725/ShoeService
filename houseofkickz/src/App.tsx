import React, {} from "react";
import "./App.css";
import {
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingleProductPage from "./SingleProductPage";
import LandingPage from "./LandingPage";
import Contact from "./Contact";
import AllProducts from "./AllProducts";
import About from "./About";
import SignIn from "./Login";
import SearchProvider from "./Context/SearchContext";

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
                <Nav.Link href="/About.tsx">About</Nav.Link>
                <Nav.Link href="/Contact.tsx">Contact Us</Nav.Link>
                <Nav.Link href="/AllProducts.tsx">Shop</Nav.Link>
                <Nav.Link href="/Login.tsx">Admin Mode</Nav.Link>
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
            <Route exact path={"/Contact.tsx"} component={Contact} />
            <Route exact path={"/AllProducts.tsx"} component={AllProducts} />
            <Route exact path={"/About.tsx"} component={About} />
            <Route exact path={"/Login.tsx"} component={SignIn} />
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
                  <a href="/About.tsx">About</a>
                </li>
                <li>
                  <a href="Contact.tsx">Contact Us</a>
                </li>
                <li>
                  <a href="AllProducts.tsx">Shop</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          Copyright © 2021
          <a href="https://houseofkickz.netlify.app/" target="_blank">House of Kickz</a>
        </div>
      </footer>
      
    </>
  );
}

export default App;
