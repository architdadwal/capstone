import React from "react";
import { Link } from "react-router-dom";

function party() {
  <>
    <div>
      <p>
        For those who love lovely sunsets and parties on beaches here's what we
        have
      </p>
      <h1> Select any one of the recommended places</h1>

      <Link to={"/goa"}>
        <div class="w">kedarnath</div>
      </Link>

      <Link to={"/pondicherry"}>
        <div class="x">pondicherry</div>
      </Link>
      <Link to={"/kovalam"}>
        <div class="y">puri</div>
      </Link>
      <Link to={"/gorkarna"}>
        <div class="z">gokarna</div>
      </Link>
    </div>
  </>;
}

export default party;
