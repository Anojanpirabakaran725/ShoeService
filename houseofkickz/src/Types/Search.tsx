import React, { useEffect, useState } from "react";
import { Shoe } from "./TypeShoe";

// eslint-disable-next-line react-hooks/rules-of-hooks

let inputValue: string;

export default function Search() {
  const [data, setData] = useState<Shoe[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/posts/")
      .then((response) => {
        return response.json(); //Die Posts werden zu einem Response.json Object
      })
      .then((myJson) => {
        //Das returnte Objekt wird im myJson spiechern
        setData(myJson); //Das Array wird hier im State data gespeichert
      });
  }, [inputValue]);

  return <div></div>;
}
