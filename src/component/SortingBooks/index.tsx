import React, { FC, ChangeEvent } from "react";
import "./sorting.css";

interface SortProps {
  labelText: string;
  setValue: (value: string) => string;
  list: string[];
  value: string[];
}

// function Sort({ list, labelText, setValue, value }) {
//   const sortCategory = list.map((element, index) => (
//     <option key={index} value={element}>
//       {element}
//     </option>
//   ));

//   function selectValue(e) {
//     setValue(e.target.value);
//   }

function Sort({ list, labelText, setValue, value }: SortProps) {
  const sortCategory = list.map((element, index) => (
    <option key={index} value={element}>
      {element}
    </option>
  ));

  function selectValue(e: ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="sort-content">
      <span className="label-text">{labelText}</span>
      <select onChange={selectValue} value={value}>
        {sortCategory}
      </select>
    </div>
  );
}

export default Sort;
