import { useState } from "react";
import { categoriesList, sortList } from "../../constants";
import Searh from "../SearhBooks/search";
import Sort from "../SortingBooks";
import { useDispatch, useSelector } from "react-redux";
import "../Header/header.css";
import { FETCH_BOOKS } from "../../redux/sagas/actions";
import { RootState } from "../../redux/store";

function Header() {
  const [category, setCategory] = useState<categoriesList>(categoriesList.all);
  const [sortBy, setSortBy] = useState<sortList>(sortList.newest);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const IsLoadingBooks = useSelector<RootState>(
    (state) => state.books.isLoading
  );
  return (
    <div className="wrapper">
      {IsLoadingBooks ? (
        <div className="orbit-spinner">
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
        </div>
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
              list={Object.values(categoriesList)}
              labelText="category"
              setValue={setCategory}
              value={category}
            />
            <Sort
              list={Object.values(sortList)}
              labelText="sortingBy"
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