//import React, { useEffect } from "react";
import "./planning.css";
import { Link } from "react-router-dom";
//import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Planning() {
  return (
    <>
      <div class="a">
        <p>
          <h1>
            {" "}
            Please select the type of traveler you are to get a list of
            recommended places for you
          </h1>{" "}
          We help you to choose a destination according to the type of user .
          Below there are some profiles you can select to see places .
        </p>
        <Link to={"/mountains"}>
          <h3>If mountains are calling you , answer them by clicking here </h3>
          <div class="b">mountains</div>
        </Link>
        <Link to={"/historical"}>
          <h3>
            {" "}
            If you are fascinated by historical events and palces where these
            events took place , click below{" "}
          </h3>
          <div class="c">History lover </div>
        </Link>
        <Link to={"/religious"}>
          <h3>
            {" "}
            God is everywhere but why not visit a holy place , to see some
            palces click below
          </h3>
          <div class="d">Religious yatri </div>
        </Link>
        <Link to={"/beaches"}>
          <h3>
            {" "}
            If you love sunsets on the beaches click below to see where you can
            go{" "}
          </h3>
          <div class="e">Beaches </div>
        </Link>
      </div>
    </>
  );
}
