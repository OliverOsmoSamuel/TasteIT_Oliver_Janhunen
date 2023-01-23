import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./AddRecipe.scss";
import * as Icon from "../../utilities/_icons";
import Picker from "../../components/Picker/Picker";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    origin: "",
    flag: "",
    description: "",
    image: "",
    ingredients: [{ item: "", quantity: "", id: "" }],
    instructions: [{ instruction: "", id: "" }],
    carbs: "",
    proteins: "",
    fats: "",
    Kcal: "",
  });

  const [countryList, setCountryList] = useState([{ name: "" }]);

  const addRecipeHandler = (e) => {
    e.preventDefault();
  };
  const removeRecipeHandler = (e) => {
    e.preventDefault();
  };
  const addInstructionHandler = (e) => {
    e.preventDefault();
  };
  const removeInstructionHandler = (e) => {
    e.preventDefault();
  };
  const submitHandler = (e) => {
    e.preventDefault();
    window.location.reload();
  };
  return (
    <div className="add-recipe">
      <div className="add-recipe__details">
        <h5 className="add-recipe__h5">Create recipe</h5>
        <div className="add-recipe__image"></div>
        <Input placeholder="Name of Recipe" />
        <Picker className="add-recipe__icon" type="number" icon={"Serves"}>
          Serves
        </Picker>
        <Picker
          className="add-recipe__icon"
          type="number"
          measurement={"min"}
          icon={"CookTime"}
        >
          Cook Time
        </Picker>
      </div>

      {/* Ingredients */}
      <div className="add-recipe__ingredients">
        <h5 className="add-recipe__h5">Ingredients</h5>
        <div className="add-recipe__ingredient-wrapper">
          <Input placeholder="Ingredient" />
          <Input placeholder="Amount" />
          <div
            onClick={removeRecipeHandler}
            className="add-recipe__remove-button"
          >
            <Icon.Remove />
          </div>
        </div>
        <div onClick={addRecipeHandler} className="add-recipe__add-button">
          + Add another step
        </div>
      </div>
      {/* Instructions */}
      <div className="add-recipe__ingredients">
        <h5 className="add-recipe__h5">Instructions</h5>
        <div className="add-recipe__instructions-wrapper">
          <Input placeholder="instructions" />
          <div
            onClick={removeInstructionHandler}
            className="add-recipe__remove-button"
          >
            <Icon.Remove />
          </div>
        </div>
        <div onClick={addInstructionHandler} className="add-recipe__add-button">
          + Add another instruction
        </div>
      </div>
      {/* Nutritional Values */}
      <div className="add-recipe__nutrition">
        <h5 className="add-recipe__h5">Nutritional values</h5>
        <Picker type="number" measurement={"g"} icon={"Carbs2"}>
          Carbs
        </Picker>
        <Picker type="number" measurement={"g"} icon={"Proteins"}>
          Proteins
        </Picker>
        <Picker type="number" measurement={"g"} icon={"Fats"}>
          Fats
        </Picker>
        <Picker type="number" measurement={"Kcal"} icon={"Kcal"}>
          Kcal
        </Picker>
      </div>
      <Button onClick={submitHandler}>Create Recipe</Button>
    </div>
  );
};

export default AddRecipe;
