import React from "react";
import { Link } from "react-router-dom";

function Mountains() {
  return (
    <>
      <div>
        <p> If you are a mountain lover we have a lot for you </p>
        <h1> Select any one of the recommended places</h1>

        <Link to={"/manali"}>
          <div class="1">manali</div>
        </Link>

        <Link to={"/kasol"}>
          <div class="2">kasol</div>
        </Link>
        <Link to={"/bir"}>
          <div class="3">bir</div>
        </Link>
        <Link to={"/bir"}>
          <div class="4">bir</div>
        </Link>
      </div>
    </>
  );
}

export default Mountains;
