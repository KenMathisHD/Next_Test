// external
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import { BookGrid } from "../../components/BookGrid/BookGrid";
import { BookFilter } from "../../components/BookFilter/BookFilter";

// assets and css
import "./BookDisplayPage.scss";

export const BookDisplayPage = () => {
  const [booksArr, setBooksArr] = useState([0]);

  useEffect(() => {
    console.log("call");
    axios
      .get("/db/data.json")
      .then((res) => {
        console.log(res.data);
        const { books } = res.data;
        setBooksArr(books);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBooksUpdate = (arr) => {
    setBooksArr([...arr]);
  };

  return (
    <div>
      <BookFilter
        books={[...booksArr]}
        handleBooksUpdate={handleBooksUpdate}
      ></BookFilter>
      <BookGrid books={[...booksArr]}></BookGrid>
    </div>
  );
};
