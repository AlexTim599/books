import React from "react";
import { useSelector } from "react-redux";
import "../FoundResult/foundResult.css";

function BooksCount() {
  const books = useSelector((state) => state.books);

  return books.isError ? null : (
    <div className="booksCount">
      <span> Найдено {books.booksCount}</span>
    </div>
  );
}

export default BooksCount;
