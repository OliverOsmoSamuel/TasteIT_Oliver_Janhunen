import React, { useEffect, useState } from "react";
import "./RecipeDetail.scss";
import * as Icon from "../../utilities/_icons";
import { Link, useLocation } from "react-router-dom";
import ButtonSmall from "../../components/ButtonSmall/ButtonSmall";
import Toggle from "../../components/Toggle/Toggle";
import Ingredient from "../../components/Ingredient/Ingredient";
import Instruction from "../../components/Instruction/Instruction";

const RecipeDetail = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;
  const [toggle, setToggle] = useState(false);
  const onIngredientsHandler = () => {
    setToggle(false);
  };
  const onInstructionsHandler = () => {
    setToggle(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="recipe-detail">
      <div
        className="recipe-detail__banner"
        style={{ backgroundImage: `url(${recipe.image})` }}
      >
        <Link to={"/recipes"} className="recipe-detail__banner-top">
          <ButtonSmall />
        </Link>

        <div className="recipe-detail__banner-bottom">
          <Icon.Clock />
          {`${recipe.preparation_time + recipe.cooking_time} Min`}
        </div>
      </div>

      {/* Main */}

      <div className="recipe-detail__main">
        <div className="recipe-detail__top">
          <div className="recipe-detail__top-bar"></div>
        </div>
        <h4 className="recipe-detail__h4">{recipe.name}</h4>
        <p className="recipe-detail__p">{recipe.description}</p>

        <div className="recipe-detail__nutrition">
          <div className="recipe-detail__info">
            <div className="recipe-detail__icon">
              <Icon.Carbs />
            </div>
            {`${recipe.nutrition.carbohydrates} carbs`}
          </div>
          <div className="recipe-detail__info">
            <div className="recipe-detail__icon">
              <Icon.Protein />
            </div>
            {`${recipe.nutrition.protein} proteins`}
          </div>
          <div className="recipe-detail__info">
            <div className="recipe-detail__icon">
              <Icon.Fat />
            </div>
            {`${recipe.nutrition.fat} fats`}
          </div>
          <div className="recipe-detail__info">
            <div className="recipe-detail__icon">
              <Icon.Calories />
            </div>
            {`${recipe.nutrition.calories} Kcal`}
          </div>
        </div>
        <div className="recipe-detail__toggle">
          <Toggle
            toggle={toggle}
            onFirstClick={onIngredientsHandler}
            onSecondClick={onInstructionsHandler}
          />
        </div>
        {!toggle ? (
          <div className="recipe-detail__ingredients">
            <div className="recipe-detail__subheading">
              <div className="recipe-detail__h5">Ingredients</div>
              <div className="recipe-detail__p">
                {`${recipe.ingredients.length} items`}
              </div>
            </div>
            <div className="recipe-detail__list">
              {recipe.ingredients.map((ingredient, i) => {
                return (
                  <Ingredient
                    key={ingredient + i}
                    ingredient={ingredient.name}
                    amount={ingredient.quantity}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="recipe-detail__ingredients">
            <div className="recipe-detail__subheading">
              <div className="recipe-detail__h5">Instructions</div>
              <div className="recipe-detail__p">
                {`${recipe.directions.length} steps`}
              </div>
            </div>
            <div className="recipe-detail__list">
              {recipe.directions.map((direction, i) => {
                return (
                  <Instruction
                    key={direction + i}
                    instruction={direction}
                    index={i + 1}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
