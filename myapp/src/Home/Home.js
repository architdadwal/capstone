import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
// import { Link } from "react-router-dom";

import "./Home.css";

const slideImages = [
  {
    url: "https://ihpl.b-cdn.net/images/header-banner.jpg",
    // caption: "Slide 1",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKD-llOI0HsGK1u7fegkknQszBqtg6kknnAA&usqp=CAU",
    // caption: "Slide 2",
  },
  {
    url: "https://cdn.discordapp.com/attachments/947918952338706462/998104981192315010/unknown.png",
    // caption: "Slide 3",
  },
];

const Destination = [
  {
    id: 1,
    url: "https://cdn.discordapp.com/attachments/947918952338706462/998649128584224789/unknown.png",
    service: "Ladhakh",
    path: "/",
  },
  {
    id: 2,
    url: "https://cdn.discordapp.com/attachments/947918952338706462/998646725701021820/unknown.png",
    service: "Goa",
    path: "/",
  },
  {
    id: 3,
    url: "https://cdn.discordapp.com/attachments/947918952338706462/998649423489929256/unknown.png",
    service: "kedarnath",
    path: "/",
  },
  {
    id: 4,
    url: "https://cdn.discordapp.com/attachments/947918952338706462/998650965219622912/unknown.png",
    service: "Shimla",
    path: "/",
  },
  
];

function Home() {
  return (
    <>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <img
                src={slideImage.url}
                alt="Category"
                style={{
                  height: "400px",
                  width: "1500px",
                }}
              />
            </div>
          ))}
        </Slide>
      </div>
      <h1 style={{textAlign:"center",}}>Most Visited places</h1>
      <div className="component">
        {Destination.map((data, index) => {
          return (
          
              <div className="dist">
                <img
                  src={data.url}
                  style={{ height: "300px", width: "300px" ,borderRadius:"10%" }}
                  alt="Category"
                />
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  {data.service}
                </h1>
              </div>
            // </Link>
          );
        })}
      </div>
    </>
  );
}

export default Home;



