import  { FC, ChangeEvent } from "react";
import { TCategoriesList, TSortList } from "../../constants";
import "./sorting.css";

interface SortProps<T> {
  labelText: string;
  setValue: (value: T) => void;
  list: readonly T[];
  value: T;
}

const Sort = <T extends TCategoriesList | TSortList>({ list, labelText, setValue, value }: SortProps<T>) => {
  const sortCategory = list.map((element, index) => (
    <option key={index} value={element}>
      {element}
    </option>
  ));

  function selectValue(e: ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value as T);
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
