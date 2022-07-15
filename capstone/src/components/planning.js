import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
const Planning = () => {
  const places = [
    {
      id: 1,
      url: "https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh#/media/File:Mall_Road,_Manali.jpg",
      place: "Manali",
    },
    {
      id: 2,
      url: "https://www.euttaranchal.com/tourism/timthumb.php?src=https://www.euttaranchal.com/tourism/photos/kedarnath-2240900.jpg&w=750&h=510&q=50",
      place: "kedarnath",
    },
    {
      id: 3,
      url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Hampi_virupaksha_temple.jpg",
      place: "Hampi",
    },
    {
      id: 4,
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1",
      place: "Goa",
    },
  ];
  return (
    <Categories>
      {places.map((data, index) => {
        return <Link to={data.path} key={index}></Link>;
      })}
    </Categories>
  );
};

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
export default Planning;
