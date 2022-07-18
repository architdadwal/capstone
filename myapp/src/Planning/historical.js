import React from "react";
import { Link } from "react-router-dom";

function historical() {
  return (
    <>
      <div>
        <p>
          If you like the historical stories and the art and want to live
          through that here's what we have
        </p>
        <h1> Select any one of the recommended places</h1>

        <Link to={"/udaipur"}>
          <div class="p">udaipur</div>
        </Link>

        <Link to={"/hampi"}>
          <div class="q">hampi</div>
        </Link>
        <Link to={"/mysore"}>
          <div class="r">mysore</div>
        </Link>
        <Link to={"/delhi"}>
          <div class="s">delhi</div>
        </Link>
      </div>
    </>
  );
}

export default historical;
