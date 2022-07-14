import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <>
  <nav  className="main-nav">
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
                <a href="***">Home</a>
            </li>
            <li>
                <a href="***">Planning</a>
            </li>
            <li>
                <a href="***">Attraction</a>
            </li>
            <li>
                <a href="***">Travel Blogs</a>
            </li>
            <li>
                <a href="***">About us</a>
            </li>
        </ul>

    </div>
  </nav>
  <section className="hero-section">
    <p>Welcome to Travelers app</p>
  </section>
    </>
  )
}

export default Navbar;