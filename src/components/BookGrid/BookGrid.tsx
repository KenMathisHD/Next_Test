"use client";

// external
import React, { SyntheticEvent, useRef } from "react";

// components

// assets and css
import "./BookGrid.scss";

export const BookGrid = (props: BooksArr) => {
  const version = useRef(null);

  console.log(props.books);

  const bookArr = [...props.books];

  const fallback_img = "/images/Biohazard.png";

  const imageOnErrorHandler = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = fallback_img;
    e.currentTarget.className = "error";
  };
  return (
    <div>
      <div className="books_grid" ref={version}>
        {bookArr.map((book, ind) => {
          return (
            <a href="" className="book_cont" key={ind}>
              <div className="book_img_cont">
                <img
                  src={book.image || "/images/Biohazard.png"}
                  onError={imageOnErrorHandler}
                  alt=""
                />
              </div>
              <div className="book_info_cont">
                <h3>{book.title}</h3>
                {book.caption && <p>{book.caption}</p>}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
