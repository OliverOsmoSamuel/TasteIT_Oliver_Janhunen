import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes")
      .then((res) => setRecipes(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div className="App">
      <Outlet context={{ recipes, countries }} />
      <Navbar />
    </div>
  );
}

export default App;
