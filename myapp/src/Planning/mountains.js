import React from "react";
import { Link } from "react-router-dom";
import "./mountains.css";

function Mountains() {
  return (
    <>
      <div class="g">
        <p> If you are a mountain lover we have a lot for you </p>
        <h1> Select any one of the recommended places</h1>

        <Link to={"/manali"}>
          <div class="h">manali</div>
        </Link>

        <Link to={"/kasol"}>
          <div class="j">kasol</div>
        </Link>
        <Link to={"/bir"}>
          <div class="k">bir</div>
        </Link>
        <Link to={"/kalpa"}>
          <div class="l">kalpa</div>
        </Link>
      </div>
    </>
  );
}

export default Mountains;
