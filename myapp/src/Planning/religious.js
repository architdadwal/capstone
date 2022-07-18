import React from "react";
import { Link } from "react-router-dom";
import "./religious.css";

function Religious() {
  return (
    <>
      <div class="aa">
        <p>
          If you want to take time to spend some time in peace and visit these
          places
        </p>
        <h1> Select any one of the recommended places</h1>

        <Link to={"/kedarnath"}>
          <div class="l">kedarnath</div>
        </Link>

        <Link to={"/banaras"}>
          <div class="m">banaras</div>
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

export default Religious;
