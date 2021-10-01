import axios from "axios";
import { SetStateAction, useContext, useState } from "react";
import SearchContext from "./Context/SearchContext";
import { Shoe } from "./Types/TypeShoe";
import { Values } from "./CreateNewProduct";

//create axios
const client = axios.create({
  //set the base url
  baseURL: "http://localhost:3004",
});

export function getAllProducts() {
  return client.get("/posts");
}

export function getSingleProduct(url: String) {
  return client.get("/posts/" + url);
}

export function postProduct(data: Values) {
  const postValues = data;
  return client.post("/posts", postValues);
}
