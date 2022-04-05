import { useState } from "react";
import { categoriesList, sortList, TCategoriesList, TSortList } from "../../constants";
import Searh from "../SearhBooks/search";
import Sort from "../SortingBooks";
import { useDispatch, useSelector } from "react-redux";
import "../Header/header.css";
import { FETCH_BOOKS } from "../../redux/sagas/actions";
import { RootState } from "../../redux/store";

function Header() {
  const [category, setCategory] = useState<TCategoriesList>('all');
  const [sortBy, setSortBy] = useState<TSortList>('newest');
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const IsLoadingBooks = useSelector<RootState>(
    (state) => state.books.isLoading
  );
  return (
    <div className="wrapper">
        
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
              labelText="category"
              setValue={setCategory}
              value={category}
            />
            <Sort
              list={sortList}
              labelText="sortingBy"
              setValue={setSortBy}
              value={sortBy}
            />
          </div>
       
    </div>
  );
}

export default Header;
