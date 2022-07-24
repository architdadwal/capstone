// import React from "react";
// import { Link } from "react-router-dom";
// import "./religious.css";

// function Religious() {
//   return (
//     <>
//       <div class="aa">
//         <p>
//           If you want to take time to spend some time in peace and visit these
//           places
//         </p>
//         <h1> Select any one of the recommended places</h1>

//         <Link to={"/kedarnath"}>
//           <div class="l">kedarnath</div>
//         </Link>

//         <Link to={"/banaras"}>
//           <div class="m">banaras</div>
//         </Link>
//         <Link to={"/puri"}>
//           <div class="n">puri</div>
//         </Link>
//         <Link to={"/haridwar"}>
//           <div class="o">haridwar</div>
//         </Link>
//       </div>
//     </>
//   );
// }

// export default Religious;

import { Link, useLocation } from "react-router-dom";

export const places = [
  {
    id: 1,
    title: "Haridwar",
    image:
      "https://i.pinimg.com/originals/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg",
  },
  {
    id: 2,
    title: "Badrianth",
    image: "https://static.sadhguru.org/d/46272/1633415803-1633415802086.jpg",
  },
  {
    id: 3,
    title: "Banaras",
    image: "https://im.rediff.com/news/2022/jan/10badrinath.jpg?w=670&h=900",
  },
  {
    id: 4,
    title: "Puri",
    image: "https://www.holidify.com/images/bgImages/GOKARNA.jpg",
  },
];

export default function Places() {
  console.log("mountains", useLocation());
  const placesElements = places.map((item) => {
    return (
      <li>
        <div>
          <Link to={`/mountains/${item.id}`} state={item}>
            <img alt={item.title} src={item.image} width={300} />
            <h4>{item.description}</h4>
          </Link>
          <p>{item.price}</p>
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
