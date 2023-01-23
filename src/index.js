import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes/Recipes";
import Home from "./pages/Home/Home";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import Error404 from "./pages/Error404/Error404";
import About from "./pages/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:id" element={<RecipeDetail />} />
        <Route path="add-recipe" element={<AddRecipe />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
