// import React from "react";
// import { Link } from "react-router-dom";
// import "./beaches.css";

// function beaches() {
//   <>
//     <div class="f">
//       <p>
//         For those who love lovely sunsets and parties on beaches here's what we
//         have
//       </p>
//       <h1> Select any one of the recommended places</h1>

//       <Link to={"/goa"}>
//         <div class="w">goa</div>
//       </Link>

//       <Link to={"/pondicherry"}>
//         <div class="x">pondicherry</div>
//       </Link>
//       <Link to={"/kovalam"}>
//         <div class="y">kovalam</div>
//       </Link>
//       <Link to={"/gorkarna"}>
//         <div class="z">gokarna</div>
//       </Link>
//     </div>
//   </>;
// }

// export default beaches;

import { Link, useLocation } from "react-router-dom";

export const places = [
  {
    id: 1,
    title: "Gokarna",
    image:
      "https://i.pinimg.com/originals/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg",
  },
  {
    id: 2,
    title: "Goa",
    image: "https://static.sadhguru.org/d/46272/1633415803-1633415802086.jpg",
  },
  {
    id: 3,
    title: "Varkala",
    image: "https://im.rediff.com/news/2022/jan/10badrinath.jpg?w=670&h=900",
  },
  {
    id: 4,
    title: "Palolem",
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
