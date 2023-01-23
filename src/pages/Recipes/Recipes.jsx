import React, { useState } from "react";
import RecipeItem from "../../components/RecipeItem/RecipeItem";
import Search from "../../components/Search/Search";
import { useOutletContext } from "react-router";
import "./Recipes.scss";
import { Link } from "react-router-dom";

const Recipes = () => {
  /* import variables declared in outlet context */
  const { recipes, countries } = useOutletContext();
  /* search state */
  const [search, setSearch] = useState("");
  /* handle search state */
  const onSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  /* create new object with filtered recipes */
  const recipeFilter = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="recipes">
      <h4 className="recipes__h4">Get amazing recipes for cooking</h4>
      <Search onChange={onSearchHandler} />
      <div className="recipes__trending">
        <h5 className="recipes__h5">Trending Now 🔥</h5>
        <div className="recipes__list">
          {/* TODO: map over filtered object */}
          {recipeFilter.map((recipe) => (
            <Link
              state={{
                recipe: recipe,
                countries: countries,
              }}
              to={`${recipe.name}`}
            >
              <RecipeItem
                key={Math.random() * 1000}
                country={recipe.country}
                countryFlag={countries.filter(
                  (country) => country.name.common === recipe.country
                )}
                recipeName={recipe.name}
                ingredients={recipe.ingredients}
                preparation_time={recipe.preparation_time}
                cooking_time={recipe.cooking_time}
                image={recipe.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
