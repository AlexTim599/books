import React, { FC, ChangeEvent } from "react";

import "../SearhBooks/searh.css";

interface SearhProps {
  value: string;
  setValue: (value: string) => void;
  buttonClick: () => void;
}

const Searh: FC<SearhProps> = ({ value, setValue, buttonClick }) => {
  const textValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13) {
      buttonClick();
    }
  };

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
        <button onClick={buttonClick} type="button">
          Searh
        </button>
      </div>
    </div>
  );
};

export default Searh;
