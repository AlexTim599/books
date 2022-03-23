import React from "react";
import "../BooksCatalog/catalog.css";

// interface CatalogPage {
//   imageLink: string;
//   category: string;
//   title: string;
//   author: string;
// }

const Catalog = ({ imageLink, category, title, author }) => {
  return (
    <div className="book-item-view">
      <img className="book-item-view__img" alt="img" src={imageLink} />
      <div className="book-item-view__title">
        <span className="book-item-view__title-category">{category}</span>
        <span className="book-item-view__title-about">{title}</span>
        <span className="book-item-view__title-author">{author}</span>
      </div>
    </div>
  );
};

export default Catalog;
