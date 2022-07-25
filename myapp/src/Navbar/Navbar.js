import React from "react";
import "./Navbar.css";
// import { Input } from "@material-ui/core";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="main-nav">
        {/* first logo part */}
        <div className="logo">
          <h2>
            <span>T</span>ravlers
            <span>T</span>rip
          </h2>
        </div>
        {/* second logo part */}

        <div className="menu-link">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to="/Planning">Planning</Link>
            </li>
            <li>
              <Link to="/Activity">Activity</Link>
            </li>
            <li>
              <Link to="/TravelBlogs">TravelBlogs</Link>
            </li>
            <li>
              <Link to="/AboutUs">About us</Link>
            </li>
            <li>
              <Link to="/Signin">SignIn</Link>
            </li>
          </ul>
        </div>
        {/* <Input
          placeholder="🔍  Search"
          style={{
            alignContent: "center",
            alignItems: "center",
            width: "200px",
            height: "50px",
            fontSize: "20px",
            border: "px",
            marginLeft: "200px",
          }}
        /> */}

        <Searchbar/>
      </nav>
    </>
  );
}

export default Navbar;
