import React, { useState } from "react";
import { categoriesList, sortList } from "../../constants";
import Searh from "../SearhBooks/search";
import Sort from "../SortingBooks";
import { useDispatch } from "react-redux";
import "../Header/header.css";
import { FETCH_BOOKS } from "../../redux/sagas/actions";

function Header() {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      {isLoading ? (
        <h1>Грузим</h1>
      ) : (
        <>
          <Searh
            setValue={setTitle}
            value={title}
            buttonClick={() =>
              dispatch({
                type: FETCH_BOOKS,
                payload: { title, category, sortBy },
              })
            }
          />
          <div className="sort-books">
            <Sort
              list={categoriesList}
              labelText={"category"}
              setValue={setCategory}
              value={category}
            />
            <Sort
              list={sortList}
              labelText={"sortingBy"}
              setValue={setSortBy}
              value={sortBy}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
