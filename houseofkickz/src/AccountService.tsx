import axios from "axios";
import { SetStateAction, useContext, useState } from "react";
import SearchContext from "./Context/SearchContext";
import { Shoe } from "./Types/TypeShoe";
import { Values } from "./Register";
export class AccountService {
  //create axios
  client = axios.create({
    //set the base url
    baseURL: "http://localhost:8080",
  });

  getAllAccounts() {
    return this.client.get("/accounts/");
  }

  getSingleAccounts(id: String) {
    return this.client.get("/accounts/" + id);
  }

  postAccount(data: Values) {
    const postValues = data;
    return this.client.post("/accounts/", postValues);
  }
}
