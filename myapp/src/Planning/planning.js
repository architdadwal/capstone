//import React, { useEffect } from "react";
import "./planning.css";
import { Link } from "react-router-dom";
//import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Planning() {
  return (
    <>
      <p>
        <h1>
          {" "}
          Please select the type of traveler you are to get a list of
          recommended places for you
        </h1>{" "}
        <h2>
          {" "}
          We help you to choose a destination according to the type of user .
          Below there are some profiles you can select to see places .{" "}
        </h2>
      </p>
      <div class="a">
        <Link to={"/mountains"}>
          <img
            src="https://thumbs.dreamstime.com/b/scenic-view-moraine-lake-mountain-range-sunset-landscape-canadian-rocky-mountains-49666349.jpg"
            alt="new"
            width={300}
          />
          <h3>The mountains are calling you</h3>
        </Link>
        <Link to={"/historical"}>
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/05/laxmi-nivas-palace-Copy.jpg"
            alt="new"
            width={300}
          />
          <h3>To witness history click here</h3>
        </Link>
        <Link to={"/religious"}>
          <img
            src="https://im.rediff.com/news/2022/jan/10badrinath.jpg"
            alt="new"
            width={300}
          />
          <h3>Enjoy the company of god</h3>
        </Link>
        <Link to={"/beaches"}>
          <img
            src="https://www.zingbus.com/blog/wp-content/uploads/2022/04/goa-9.jpg"
            alt="new"
            width={300}
          />
          <h3>If you love sunsets on the beaches , click here</h3>
        </Link>
      </div>
    </>
  );
}
