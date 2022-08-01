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
              <Link
                to={"/"}
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Planning"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Planning
              </Link>
            </li>
            <li>
              <Link
                to="/Activity"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Activity
              </Link>
            </li>
            <li>
              <Link
                to="/TravelBlogs"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                TravelBlogs
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/Signin"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                SignIn
              </Link>
            </li>
          </ul>
        </div>

        <Searchbar />
      </nav>
    </>
  );
}

export default Navbar;
