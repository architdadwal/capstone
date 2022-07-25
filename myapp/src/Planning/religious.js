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
      "https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/cover-for-Best-Places-To-Visit-In-Haridwar.jpg",
    description:
      "Haridwar is an ancient city and important Hindu pilgrimage site in North India's Uttarakhand state, where the River Ganges exits the Himalayan foothills. The largest of several sacred ghats (bathing steps), Har Ki Pauri hosts a nightly Ganga Aarti (river-worshipping ceremony) in which tiny flickering lamps are floated off the steps. Worshipers fill the city during major festivals including the annual Kanwar Mela",
  },
  {
    id: 2,
    title: "Badrianth",
    image: "https://im.rediff.com/news/2022/jan/10badrinath.jpg?w=670&h=900",
    description:
      "Badrinath is a town and nagar panchayat in Chamoli district in the state of Uttarakhand, India. A Hindu holy place, it is one of the four sites in India's Char Dham pilgrimage and is also part of India's Chota Char Dham pilgrimage circuit. It gets its name from the Badrinath Temple",
  },
  {
    id: 3,
    title: "Banaras",
    image:
      "https://gumlet.assettype.com/swarajya%2F2019-02%2F90f784f1-3da6-4615-8814-cf77fb4d5119%2FVaranasi.jpg?q=75&auto=format%2Ccompress&w=610&dpr=1.3&format=webp",
    description:
      "Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva",
  },
  {
    id: 4,
    title: "Puri",
    image:
      "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/08/jagannath-temple-pti-1627842679.jpg",
    description:
      "Puri is a coastal city and a municipality in the state of Odisha in eastern India. It is the district headquarters of Puri district and is situated on the Bay of Bengal, 60 kilometres south of the state capital of Bhubaneswar",
  },
];

export default function Places() {
  console.log("religious", useLocation());
  const placesElements = places.map((item) => {
    return (
      <li>
        <div>
          <Link to={`/religious/${item.id}`} state={item}>
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
