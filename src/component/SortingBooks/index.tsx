import React, { FC, ChangeEvent } from "react";
import { categoriesList, sortList } from "../../constants";
import "./sorting.css";

interface SortProps {
  labelText: string;
  setValue: (value: any) => void;
  list: string[];
  value: categoriesList | sortList;
}

const Sort: FC<SortProps> = ({ list, labelText, setValue, value }) => {
  const sortCategory = list.map((element, index) => (
    <option key={index} value={element}>
      {element}
    </option>
  ));

  function selectValue(e: ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value as categoriesList);
  }

  return (
    <div className="sort-content">
      <span className="label-text">{labelText}</span>
      <select onChange={selectValue} value={value}>
        {sortCategory}
      </select>
    </div>
  );
};

export default Sort;
