import React from "react";
import { Link } from "react-router-dom";
import "./historical.css";

function Historical() {
  return (
    <>
      <div class="xx">
        <p>
          If you like the historical stories and the art and want to live
          through that here's what we have
        </p>
        <h1> Select any one of the recommended places</h1>

        <Link to={"/udaipur"}>
          <div class="hh">udaipur</div>
        </Link>

        <Link to={"/hampi"}>
          <div class="jj">hampi</div>
        </Link>
        <Link to={"/mysore"}>
          <div class="kk">mysore</div>
        </Link>
        <Link to={"/delhi"}>
          <div class="ll">delhi</div>
        </Link>
      </div>
    </>
  );
}

export default Historical;
