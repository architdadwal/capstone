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
import "./mountain.css";

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

    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/05/Trip-to-Kasol-A-memory-to-fill-your-adventure-wall-Tosh.webp",

    description:
      "Kasol is a hamlet in the Kullu district of the Indian state of Himachal Pradesh.[3][4] It is situated in Parvati Valley, on the banks of the Parvati River, on the way between Bhuntar and Manikaran. It is located 30 km (19 mi) from Bhuntar[5] and 36 km (22 mi) from Kullu town, the district headquarter, 3.5 km from Manikaran.↵Kasol is the Himalayan hotspot for backpackers[6] and acts as a base for nearby treks to Malana and Kheerganga. It is called Mini Israel of India due to a high percentage of Israeli tourists here",
  },
  {
    id: 3,
    title: "Narakanda",

    image:
      "https://shimlatourism.co.in/images/places-to-visit/headers/narkanda-near-shimla-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    description:
      "Narkanda is a town and a nagar panchayat in Kumarsain subdivision of Shimla district in the Indian state of Himachal Pradesh. It is at an elevation of 2708 meters on the Hindustan-Tibet Road (NH 5) in Himachal Pradesh, India within a fir (abies pindrow) forest. It is about 60 km away from Shimla and surrounded by the Himalayan Range.It is a skiing resort in winter. It connects Shimla with Kumarsain and Rampur and a detour also goes to Kotgarh-Thanedhar, the prime apple belt of Himachal Pradesh where Satyananda Stokes started the apple culture.",
  },
  {
    id: 4,
    title: " Bir",

    image:
      "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQaV6HZgCcuV2cM0vDO0PPi318Tgtz93fOEAA7HGrNZMuXBVFcxQp_wjAccThkhQpXg",
    description:
      "Bir is a rural village located in the west of Joginder Nagar Valley in the state of Himachal Pradesh in northern India. It is also the location of the Bir Tibetan Colony, founded in the early 1960s as a settlement for Tibetan refugees after the 1959 Tibetan uprising.Bir is noted for several Tibetan Buddhist monasteries and supportive centers of the Nyingma school, the Karma Kagyu school, and the Sakya school, located either in the town of Bir or nearby. A large stupa is also located in Bir. Ecotourism, spiritual studies, and meditation draws visitors.",
  },
  {
    id: 5,
    title: "Keylong",

    image:
      "https://images.thrillophilia.com/image/upload/s--3RYDLFh3--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/000/526/original/1549292137_shutterstock_606258098.jpg.jpg",
    description:
      "Kyelang (or Keylong) is a town and the administrative centre of the Lahaul and Spiti district in the Indian state of Himachal Pradesh, 71 kilometres (44 mi) north of Manali via Atal Tunnel and 120 km (75 mi) from the Indo-Tibetan border. It is located along the Manali-Leh Highway, about 7 km (4+1⁄2 mi) northeast of intersection of the Chandra, Bhaga, and Chenab valleys, on the banks of Bhaga River.",
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
