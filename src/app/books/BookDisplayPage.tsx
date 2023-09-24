"use client";
// external
import React, { useEffect, useState } from "react";

// components
import { BookGrid, BookFilter } from "@/components";

// assets and css
import "./BookDisplayPage.scss";

export const BookDisplayPage = () => {
  const [booksArr, setBooksArr] = useState<Book[]>([
    { image: "", title: "", caption: "string" },
  ]);
  const handleBooksUpdate = (arr: []) => {
    setBooksArr([...arr]);
  };
  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/getBooks");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: Book[] = await response.json();
      console.log("Data:", data);
      setBooksArr(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // You may want to add error handling here, e.g., display an error message on the page
    }
  };

  useEffect(() => {
    console.log("call");
    fetchBooks();
  }, []);

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
