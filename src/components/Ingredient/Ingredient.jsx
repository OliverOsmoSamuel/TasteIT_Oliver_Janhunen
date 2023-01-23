import React from "react";
import "./Ingredient.scss";

const Ingredient = ({ ingredient, amount }) => {
  return (
    <div className="ingredient">
      <div className="ingredient__body">{ingredient}</div>
      <div className="ingredient__amount">{amount}</div>
    </div>
  );
};

export default Ingredient;
