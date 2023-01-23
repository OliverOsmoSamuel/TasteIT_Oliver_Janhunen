import React from "react";
import * as Icon from "../../utilities/_icons";
import Button from "../../components/Button/Button";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Image/Home/logo.svg";

import "./Home.scss";

const Home = () => {
  const { recipes } = useOutletContext(),
    numOfRecipes = recipes.length;
  return (
    <div className="home">
      <div className="home__logo">
        <Logo />
      </div>
      <div className="home__action">
        <div className="home__counter">
          <div className="home__icon">
            <Icon.Star />
          </div>
          {`${numOfRecipes}+ Recipes`}
        </div>
        <Link to={"./recipes"}>
          <Button>Get Started</Button>
        </Link>
      </div>
      <div className="home__shadow"></div>
    </div>
  );
};

export default Home;
