import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <h4 className="about__h4">About</h4>
      <h5 className="about__h5">TasteIT</h5>
      <p className="about__p">
        A website built as a final project of the first semester of the React22s
        course at{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href={"https://www.bc.fi/"}
          className="about__link"
        >
          Business College Helsinki
        </a>
      </p>
      <h5 className="about__h5">Credits</h5>
      <p className="about__p">
        The initial data for the database (recipes) was created with the help of{" "}
        <a
          rel="noreferrer"
          target={"_blank"}
          href={"https://openai.com/blog/chatgpt/"}
          className="about__link"
        >
          chatGPT
        </a>
      </p>
      <p className="about__p">
        The design of the website is based on the{" "}
        <a
          rel="noreferrer"
          target={"_blank"}
          href={"https://www.figma.com/community/file/1165116522167127744"}
          className="about__link"
        >
          Cooking App UI Kit
        </a>{" "}
        by{" "}
        <a
          rel="noreferrer"
          target={"_blank"}
          href={"https://www.figma.com/"}
          className="about__link"
        >
          Figma
        </a>
      </p>
      <h5 className="about__h5">Source Code & Design</h5>
      <p className="about__p">
        My version of the Figma design can be found{" "}
        <a
          rel="noreferrer"
          target={"_blank"}
          href={
            "https://www.figma.com/file/EPr5HnFdTnplA8bodCRB9q/TasteIT---Cooking-App-UI-Kit?node-id=0%3A1161&t=mmrjVSmnnUSyicFs-1"
          }
          className="about__link"
        >
          Here
        </a>
      </p>
      <p className="about__p">
        The source code is available on{" "}
        <a
          rel="noreferrer"
          target={"_blank"}
          href={"https://github.com/OliverOsmoSamuel"}
          className="about__link"
        >
          My GitHub page
        </a>{" "}
        or can be directly viewed <Link className="about__link">here</Link>
      </p>
    </div>
  );
};

export default About;
