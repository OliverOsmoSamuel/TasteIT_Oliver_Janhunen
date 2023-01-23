import React from "react";
import * as Icon from "../../utilities/_icons.js";
import "./Picker.scss";

const Picker = ({
  icon,
  children,
  onPickerInputChange,
  measurement,
  type = "text",
}) => {
  return (
    <div className="picker">
      {icon === "Serves" ? (
        <div className="picker__icon-wrapper">
          <Icon.Serves className="picker__icon" />
        </div>
      ) : icon === "CookTime" ? (
        <div className="picker__icon-wrapper">
          <Icon.CookTime className="picker__icon" />
        </div>
      ) : icon === "Carbs2" ? (
        <div className="picker__icon-wrapper">
          <Icon.Carbs2 className="picker__icon" />
        </div>
      ) : icon === "Proteins" ? (
        <div className="picker__icon-wrapper">
          <Icon.Proteins className="picker__icon" />
        </div>
      ) : icon === "Fats" ? (
        <div className="picker__icon-wrapper">
          <Icon.Fats className="picker__icon" />
        </div>
      ) : icon === "Kcal" ? (
        <div className="picker__icon-wrapper">
          <Icon.Kcal className="picker__icon" />
        </div>
      ) : null}

      <label htmlFor={children} className="picker__label">
        {children}
      </label>
      <div className="picker__input-wrapper">
        <input
          onChange={onPickerInputChange}
          id={children}
          type={type}
          className="picker__input"
        />
        <div className="picker__measurement">{measurement}</div>
      </div>
    </div>
  );
};

export default Picker;
