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
      "https://image.shutterstock.com/image-photo/jodhpur-blue-city-rajasthan-india-600w-1647371812.jpg",
    description:
      "Jodhpur is the second-largest city in the Indian state of Rajasthan and officially the second metropolitan city of the state. It was formerly the seat of the princely state of Jodhpur State. Jodhpur was historically the capital of the Kingdom of Marwar, which is now part of Rajasthan. Jodhpur is a popular tourist destination, featuring many palaces, forts, and temples, set in the stark landscape of the Thar Desert. It is popularly known as the Blue City among people of Rajasthan and all over India.[1] It serves as the administrative headquarters of the Jodhpur district and Jodhpur division.",
  },
  {
    id: 2,
    title: "Hampi",
    image:
      "https://www.worldatlas.com/r/w960-q80/upload/ff/49/57/shutterstock-1509720656.jpg",
    description:
      "Hampi or Hampe, also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in Hampi town, Vijayanagara district, east-central Karnataka, India.",
  },
  {
    id: 3,
    title: "Mysore",
    image:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ8Ma4AaWdnHV10hsN6u73h1w41cATTVFPO9vYrgJ-07JDV9TaWxiBIVew5AmAJH7yX",
    description:
      "Mysore (or Mysuru), a city in India's southwestern Karnataka state, was the capital of the Kingdom of Mysore from 1399 to 1947. In its center is opulent Mysore Palace, seat of the former ruling Wodeyar dynasty. The palace blends Hindu, Islamic, Gothic and Rajput styles. Mysore is also home to the centuries-old Devaraja Market, filled with spices, silk and sandalwood.",
  },
  {
    id: 4,
    title: "Delhi",
    image:
      "https://cdn.britannica.com/11/189811-050-C21A1A1C/Jami-Masjid-Delhi.jpg",
    description:
      "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls.",
  },
];

export default function Places() {
  console.log("historical", useLocation());
  const placesElements = places.map((item) => {
    return (
      <li>
        <div>
          <Link to={`/historical/${item.id}`} state={item}>
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
