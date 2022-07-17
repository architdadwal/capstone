import React from "react";
import "./planning.css";
import { Link } from "react-router-dom";

export default function Planning() {
  return (
    <div class="a">
      <p>Please select the type of traveler you are</p>
      <Link to={"/mountainman"}>
        <div class="b">Mountainman</div>
      </Link>
      <div class="c">History lover </div>
      <div class="d">Religious yatri </div>
      <div class="e">The party and beach lover</div>
    </div>
  );
}
