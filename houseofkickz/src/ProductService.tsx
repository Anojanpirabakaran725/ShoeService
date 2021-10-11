import axios from "axios";
import { SetStateAction, useContext, useState } from "react";
import SearchContext from "./Context/SearchContext";
import { Shoe } from "./Types/TypeShoe";
import { Values } from "./CreateNewProduct";
export class ProductService {
  //create axios
  client = axios.create({
    //set the base url
    baseURL: "http://localhost:8080",
  });

  getAllProducts() {
    return this.client.get("/products/");
  }

  getSingleProduct(id: String) {
    return this.client.get("/products/" + id);
  }

  postProduct(data: Values) {
    const postValues = data;
    return this.client.post("/products/", postValues);
  }
  /*
  updateProduct(data: Values) {
    const updateValues = data;
    return this.client.put("/product/", updateValues);
  }*/
}
