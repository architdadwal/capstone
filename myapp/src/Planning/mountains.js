/*import React from "react";
import { Link } from "react-router-dom";
import "./mountains.css";

function mountains() {
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

export default mountains;*/

// import "./mountain.css";
// import data from "./mountain.json";
// import { Link } from "react-router-dom";
// export default function mountain() {
//   const placeInfo = data.map((place) => {
//     return (
//       <div key={place.id} className="place-list">
//         <Link to={`/mountain/${place.id}`} state={place}>
//           <img alt={place.title} src={place.image} width={300} />
//           <h2>
//             <em> place:</em>
//             {place.title}
//           </h2>
//         </Link>
//       </div>
//     );
//   });
//   return <div className="place-container">{placeInfo}</div>;
// }

import { Link, useLocation } from "react-router-dom";

export const places = [
  {
    id: 1,
    title: "Manali",
    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/11/Top-4-Indian-skiing-destinations-Solang-1280x720.webp",
    description:
      "Manali is a town in the Indian state of Himachal Pradesh.[2] It is situated in the northern end of the Kullu Valley, formed by the Beas River. The town is located in the Kullu district, approximately 270 kilometres (170 mi) north of the state capital of Shimla and 544 kilometres (338 mi) northeast of the national capital of Delhi. With a population of 8,096 people recorded in the 2011 Indian census Manali is the beginning of an ancient trade route through Lahaul and Ladakh, over the Karakoram Pass and onto Yarkand and Hotan in the Tarim Basin of China. Manali is a popular tourist destination in India and serves as the gateway to the Lahaul and Spiti district as well as the city of Leh in Ladakh.",
  },
  {
    id: 2,
    title: "Kasol",
    price: "Rs 30000",
    image:
      "https://i.pinimg.com/originals/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg",
    image1:
      "https://i.pinimg.com/originals/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg",
    description: "Mini israel",
  },
  {
    id: 3,
    title: "Narakanda",

    image:
      "https://i.pinimg.com/originals/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg",
    description: "Perfect hill top area",
  },
  {
    id: 4,
    title: " Bir",

    image:
      "https://i.pinimg.com/originals/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg",
    description: "Indias top paragliding destination",
  },
  {
    id: 5,
    title: "Keylong",

    image:
      "https://i.pinimg.com/originals/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg",
    description: "Keylong is a beautiful place",
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
            <h4>{item.title}</h4>
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
