import React from "react";   
// import { Input, Badge, makeStyles } from "@material-ui/core";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./Home.css";

const slideImages = [
  {
    url: "https://cdn.discordapp.com/attachments/947918952338706462/998111295784099871/unknown.png",
    // caption: "Slide 1", 
  },
  {
    url: "https://cdn.discordapp.com/attachments/947918952338706462/998104550105960519/unknown.png",
    // caption: "Slide 2",
  },
  {
    url: "https://cdn.discordapp.com/attachments/947918952338706462/998104981192315010/unknown.png",
    // caption: "Slide 3",
  },
];

function Home() {
  return (
    <>
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                height: "350px",
                width: "1400px",
                alignItems: "center",
              }}
            >
              {/* <span>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
    <div className="templeteContainer">
      <div className="searchInput_Container">
        <input id="searchInput" type="text" placeholder="Search here..."/>
      </div>
 
        </div>
    </>
  );
}

export default Home;
