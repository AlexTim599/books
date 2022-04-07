import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import "../SearhBooks/searh.css";

interface SearhProps {
  value: string;
  setValue: (value: string) => void;
  buttonClick: (page: number, maxResults: number) => void;
}

const Searh: FC<SearhProps> = ({ value, setValue, buttonClick }) => {
  const SearshTotal = useSelector((state: RootState) => state.books.booksCount)
  const [page, setPage] = useState(0)
  const [maxResults, setMaxResults] = useState(10)
  const textValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSearsh = () => {
    buttonClick(page, maxResults)
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13) {
      handleSearsh();
    }
  };
  useEffect(() => {
    setPage(0)
  }, [maxResults])


  useEffect(() => {
    if (value) {
      handleSearsh()
    }
  }, [page])


  return (
    <div className="searh-content">
      <div>
        <p>Searh book</p>
      </div>
      <div>
        <input
          className="searh-input"
          onKeyUp={handleKeyUp}
          onChange={textValue}
          value={value}
          placeholder="Searh"
        ></input>
        <button onClick={handleSearsh} type="button">
          Searh
        </button>
      </div>
      <select name="select" value={maxResults} onChange={(e) => setMaxResults(Number(e.target.value))}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
      <div>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>сюда</button>
        <p>{page + 1}</p>
        <button disabled={!(SearshTotal - (page * maxResults) > maxResults)} onClick={() => setPage(page + 1)}>туда</button>

      </div>
    </div>
  );
};

export default Searh;
