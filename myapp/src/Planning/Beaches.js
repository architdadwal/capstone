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
    image: "https://www.holidify.com/images/bgImages/GOKARNA.jpg",
    description:
      "Gokarna is a town on the Arabian Sea, in the southwestern Indian state of Karnataka. A popular pilgrimage destination for Hindus, it’s known for sacred sites like Mahabaleshwar Temple, which has a shrine dedicated to the deity Shiva. Nearby, Koti Teertha is a temple tank where devotees wash in the holy waters. The town is also home to beaches such as palm-lined Gokarna, in the center, plus Kudle and Om farther south.",
  },
  {
    id: 2,
    title: "Goa",
    image:
      "https://www.nomadasaurus.com/wp-content/uploads/2021/04/Fiirst-Timers-Guide-to-Goa.jpg",
    description:
      "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda",
  },
  {
    id: 3,
    title: "Varkala",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c8/f1/cb/varkala-beach.jpg?w=1200&h=1200&s=1",
    description:
      "Varkala is a town in the south Indian state of Kerala. It’s on the Arabian Sea and known for Varkala Beach, backed by palm-covered red cliffs. Just south, Papanasam Beach is believed to have holy waters. On a nearby hill, the ancient Janardanaswamy Temple is a Hindu pilgrimage site dedicated to Vishnu. Farther inland, the Sivagiri Mutt monument memorializes the social reformer Sree Narayana Guru, who is buried here.",
  },
  {
    id: 4,
    title: "Palolem",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/9c/palolem-sea-beach.jpg?w=800&h=-1&s=1",
    description:
      "Palolem Beach is a stretch of white sand on a bay in Goa, South India. It's known for its calm waters and for its nightlife, including silent discos where partygoers wear headphones. Lined with palm trees and colorful wooden shacks, the beach faces Canacona Island, known for its resident monkeys. To the south, turtles nest at Galgibaga Beach. Inland, Cotigao Wildlife Sanctuary is home to birds, wild boars and gaur",
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
