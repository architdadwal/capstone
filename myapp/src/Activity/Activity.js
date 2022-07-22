import React from "react";
import "./Activity.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

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

const Destination = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2022/01/12/16/05/paragliding-6933278_960_720.jpg",
    service: "Paragliding",
    path: "/rescue",
  },
  {
    id: 2,
    url: "https://www.thrillophilia.com/blog/wp-content/uploads/2015/01/Waterwalk.jpg",
    service: "Under water walk",
    path: "/adoption",
  },
  {
    id: 3,
    url: "https://www.raftingbali.net/wp-content/uploads/2012/11/Water-Rafting-Bali-Feature-Imageg.jpg",
    service: "Rafting",
    path: "/vet",
  },
  {
    id: 4,
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3a/26/c0/caption.jpg?w=1200&h=-1&s=1",
    service: "Bungee Jumping",
    path: "/store",
  },
  
  {
    id: 5,
    url: "https://www.newframe.com/wp-content/uploads/2022/01/Arif-Khan-scaled.jpg",
    service: "Skiing",
    path: "/store",
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
        {Destination.map((data, index) => {
          return (
            <Link to={data.path} key={index}>
              <div className="dist">
                <img
                  src={data.url}
                  style={{ height: "300px", width: "300px" }}
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
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Activity;
