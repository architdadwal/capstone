import React from "react";
import { Link } from "react-router-dom";
import "./beaches.css";

function Beaches() {
  <>
    <div class="f">
      <p>
        For those who love lovely sunsets and parties on beaches here's what we
        have
      </p>
      <h1> Select any one of the recommended places</h1>

      <Link to={"/goa"}>
        <div class="w">goa</div>
      </Link>

      <Link to={"/pondicherry"}>
        <div class="x">pondicherry</div>
      </Link>
      <Link to={"/kovalam"}>
        <div class="y">kovalam</div>
      </Link>
      <Link to={"/gorkarna"}>
        <div class="z">gokarna</div>
      </Link>
    </div>
  </>;
}

export default Beaches;
