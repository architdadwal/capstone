import { useEffect } from "react";
import { useParams } from "react-router-dom";
//import React, { useState } from "react";

import { places } from "./mountains";
import "./mount.css";
import axios from "axios";

export default function Mountainplaces(props) {
  const params = useParams();
  const place = places.find((item) => item.id == params.id);

  // useEffect(async () => {
  //   const result = await axios.get(
  //     "https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=manali&currency=USD&locale=en_US",
  //     {
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "cd988153f4msh3286001b4445b59p1edf5bjsn3a0c898dc87a",
  //         "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
  //       },
  //     }
  //   );
  //   console.log(result);
  // }, []);

  console.log("PARAMs", params);
  return (
    <div>
      <h1>place description</h1>
      <h3>{place.title}</h3>
      <p className="desc">{place.description} </p>
      <img alt={place.title} src={place.image} width={300} />
      <div>
        <img alt={place.title} src={place.image1} width={600} />
      </div>
    </div>
  );
}
