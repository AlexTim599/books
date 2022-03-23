import React from "react";
import "./sorting.css";

function Sort({ list, labelText, setValue, value }) {
  const sortCategory = list.map((element, index) => (
    <option key={index} value={element}>
      {element}
    </option>
  ));

  function selectValue(e) {
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
