import React from "react";
import "./RecipeItem.scss";
import * as Icon from "../../utilities/_icons";
import { useParams } from "react-router";

const RecipeItem = ({
  rating = 4.5,
  country,
  countryFlag,
  recipeName,
  ingredients,
  preparation_time,
  cooking_time,
  image,
}) => {
  const { id } = useParams;
  console.log(id);
  return (
    <div className="recipe-item" style={{ backgroundImage: `url(${image})` }}>
      <div className="recipe-item__top">
        <div className="recipe-item__rating">
          <Icon.Star />
          {rating}
        </div>
        <div
          style={{ backgroundImage: `url(${countryFlag[0].flags.png})` }}
          className="recipe-item__country-flag"
        ></div>
      </div>
      <div className="recipe-item__bottom">
        <p className="recipe-item__title">{recipeName}</p>
        <p className="recipe-item__description">
          {`${ingredients.length} Ingredients | ${
            preparation_time + cooking_time
          } min`}
        </p>
      </div>
    </div>
  );
};

export default RecipeItem;
