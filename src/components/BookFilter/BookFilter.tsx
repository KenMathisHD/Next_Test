// external
import React, { useRef } from "react";

// components

// assets and css
import "./BookFilter.scss";

export const BookFilter = (props) => {
  const { books, handleBooksUpdate } = props;

  const bookArr = [...books];

  const updateTheBooks = () => {
    handleBooksUpdate(bookArr.slice(1));
  };

  // function setOptions(option, imageArr) {
  //   const galleryLinks = [...imageArr];
  //   let optionArr = [];
  //   galleryLinks.forEach((y) => {
  //     if (optionArr.indexOf(y[option]) === -1) {
  //       optionArr.push(y[option]);
  //     }
  //   });

  //   return sortOptions(optionArr);
  // }

  const generateFilters = (arr: [], filters: []) => {
    const newObj = {};
    filters.forEach((value) => {
      newObj[value] = [];
      arr.forEach((key) => {
        if (newObj[value].indexOf(key[value]) === -1)
          newObj[value].push(key[value]);
      });
    });

    return newObj;
  };

  const filters = generateFilters(bookArr, ["collection", "series"]);
  console.log(filters);
  return (
    <div>
      <div className="books_filter">
        <ul>
          <h2>Filters</h2>
          <li>collection</li>
          <li>series</li>
        </ul>
        {filters.collection.length && (
          <ul>
            <h2>Collections</h2>
            {filters.collection.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        )}
        {filters.series.length && (
          <ul>
            <h2>Seriess</h2>
            {filters.series.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        )}

        <ul>
          <h2>Sorts</h2>
          <li>publish</li>
          <li>date</li>
          <li>new--old</li>
          <li>old--new title</li>
          <li>seriesPosition</li>
        </ul>
      </div>
      <button onClick={updateTheBooks}>Click me to update the array</button>
    </div>
  );
};
