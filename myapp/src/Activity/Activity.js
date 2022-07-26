import React from "react";
import "./Activity.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import {data} from "./data";

const slideImages = [
  {
    url: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/xhy0g9slec2tcvljkyvo/5-in-1WaterSportsPackageinBagaBeach.webp",
    caption: "Slide 1",
  },
  {
    url: "https://www.tripsavvy.com/thmb/6H1eYlyjvau6p7cvorJd7tqcVCY=/2700x1519/smart/filters:no_upscale()/Paraglidingcoverimage-3450edfd57514d4fb0514a8a189988f5.jpg",
    caption: "Slide 2",
  },
  {
    url: "http://www.rishikeshtourism.co.in/images/bungee-jumping-rishikesh.jpg",
    caption: "Slide 3",
  },
  {
    url: "https://thumbs.dreamstime.com/b/rishikesh-india-young-people-adventure-white-water-river-rafting-enjoying-sports-ganges-whitewater-147576689.jpg",
    caption: "Slide 4",
  },
];


function Activity() {
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
      <div className="component">
        {data.map((data, index) => {
          return (
            <Link to={`/Activity/${data.id}`} key={index}>
              <div className="dist">
                <img
                  src={data.imgURL}
                  style={{ height: "300px", width: "300px",borderRadius:"10%"}}
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
                  {data.Activity}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Activity;
