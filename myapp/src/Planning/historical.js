/*import React from "react";
import { Link } from "react-router-dom";
import "./historical.css";

function historical() {
  return (
    <>
      <div class="xx">
        <p>
          If you like the historical stories and the art and want to live
          through that here's what we have
        </p>
        <h1> Select any one of the recommended places</h1>
        <div class="fl">
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
      </div>
    </>
  );
}

export default historical;*/

import { Link, useLocation } from "react-router-dom";

export const places = [
  {
    id: 1,
    title: "Jodhpur",
    image:
      "https://i.pinimg.com/originals/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg",
  },
  {
    id: 2,
    title: "Hampi",
    image: "https://static.sadhguru.org/d/46272/1633415803-1633415802086.jpg",
  },
  {
    id: 3,
    title: "Mysore",
    image: "https://im.rediff.com/news/2022/jan/10badrinath.jpg?w=670&h=900",
  },
  {
    id: 4,
    title: "Delhi",
    image: "https://www.holidify.com/images/bgImages/GOKARNA.jpg",
  },
];

export default function Places() {
  console.log("beaches", useLocation());
  const placesElements = places.map((item) => {
    return (
      <li>
        <div>
          <Link to={`/beaches/${item.id}`} state={item}>
            <img alt={item.title} src={item.image} width={300} />
            <h4>{item.description}</h4>
          </Link>
        </div>
      </li>
    );
  });
  return (
    <div>
      <ul>{placesElements}</ul>
    </div>
  );
}
