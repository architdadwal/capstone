import React from "react";
import { Link } from "react-router-dom";

function religious() {
  return (
    <>
      <div>
        <p>
          If you want to take time to spend some time in peace and visit these
          places
        </p>
        <h1> Select any one of the recommended places</h1>

        <Link to={"/kedarnath"}>
          <div class="l">kedarnath</div>
        </Link>

        <Link to={"/banaras"}>
          <div class="m"></div>
        </Link>
        <Link to={"/puri"}>
          <div class="n">puri</div>
        </Link>
        <Link to={"/haridwar"}>
          <div class="o">haridwar</div>
        </Link>
      </div>
    </>
  );
}

export default religious;
