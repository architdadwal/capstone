//import React, { useEffect } from "react";
import "./planning.css";
import { Link } from "react-router-dom";
//import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Planning() {
  return (
    <>
      <div class="a">
        <p>Please select the type of traveler you are</p>
        <Link to={"/mountains"}>
          <div class="b">mountains</div>
        </Link>
        <Link to={"/historical"}>
          <div class="c">History lover </div>
        </Link>
        <Link to={"/religious"}>
          <div class="d">Religious yatri </div>
        </Link>
        <Link to={"/beaches"}>
          <div class="e">Beaches </div>
        </Link>
      </div>
    </>
  );
}
