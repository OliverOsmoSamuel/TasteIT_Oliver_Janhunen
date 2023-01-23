import React from "react";
import "./Toggle.scss";

const Toggle = ({
  toggle,
  first = "Ingredients",
  second = "Instructions",
  onFirstClick,
  onSecondClick,
}) => {
  return (
    <div className="toggle">
      <div
        onClick={onFirstClick}
        className={!toggle ? "toggle__button toggle--active" : "toggle__button"}
      >
        {first}
      </div>
      <div
        onClick={onSecondClick}
        className={toggle ? "toggle__button toggle--active" : "toggle__button"}
      >
        {second}
      </div>
    </div>
  );
};

export default Toggle;
