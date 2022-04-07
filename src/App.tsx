import React from "react";
import Header from "./component/Header/Header";
import BooksItem from "./component/BooksItem";
import "./App.css";
import BooksCount from "./component/FoundResult";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <BooksCount />
      <div className=" booksItem">
        <BooksItem />
        <div />
        <button className=" btn"> next</button>

      </div>
    </div>
  );
}

export default App;
