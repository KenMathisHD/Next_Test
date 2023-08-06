"use client";
import type { Metadata } from "next";
import { useState, useEffect } from "react";

// components
import { BookGrid, BookFilter } from "@/components";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Here we filter all the books in all the series. Or, you know, some of them",
};

export default async function Books() {
  const [booksArr, setBooksArr] = useState<Book[] | number[]>([0]);

  useEffect(() => {
    console.log("call");
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
  }, []);
  const handleBooksUpdate = (arr: []) => {
    setBooksArr([...arr]);
  };
  return (
    <main>
      <BookFilter
        books={...booksArr}
        handleBooksUpdate={handleBooksUpdate}
      ></BookFilter>
      <BookGrid books={...booksArr} />
    </main>
  );
  try {
    const response = await fetch("http://localhost:3000/api/getBooks");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Data:", data);

    return (
      <main>
        <BookFilter
          books={...data}
          handleBooksUpdate={handleBooksUpdate}
        ></BookFilter>
        <BookGrid books={...data} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // You may want to add error handling here, e.g., display an error message on the page
    return <main>Error fetching data: {error.message}</main>;
  }
}
