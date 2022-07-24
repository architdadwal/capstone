import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
// import AppRouter from './AppRouter';
import Attraction from "./Attraction/Attraction";
import TravelBlogs from "./TravelBlogs/TravelBlogs";
import AboutUs from "./AboutUs/AboutUs";
import Home from "./Home/Home";
import Planning from "./Planning/planning";
import SignIn from "./SignIn/SignIn";
//planning components here
import Mountains from "./Planning/mountains";
import Mountainplaces from "./Planning/Mountainplaces";
import Beachplaces from "./Planning/Beachplaces";
import Historicalplaces from "./Planning/Historicalplaces";
import Religiousplaces from "./Planning/Religiousplaces";
import Historical from "./Planning/historical";
import Religious from "./Planning/religious";
import Beaches from "./Planning/beaches";

// import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planning" element={<Planning />} />

          <Route path="/TravelBlogs" element={<TravelBlogs />} />
          <Route path="/Attraction" element={<Attraction />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/mountains" element={<Mountains />} />
          <Route path="/Historical" element={<Historical />} />
          <Route path="/Religious" element={<Religious />} />
          <Route path="/Beaches" element={<Beaches />} />
          <Route path="/mountains/:id" element={<Mountainplaces />} />
          <Route path="/beaches/:id" element={<Beachplaces />} />
          <Route path="/historical/:id" element={<Historicalplaces />} />
          <Route path="/religious/:id" element={<Religiousplaces />} />
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter> */}
      <section className="hero-section"></section>
      {/* <AppRouter /> */}
      <Attraction />
      <TravelBlogs />
      <AboutUs />
      {/* </BrowserRouter> */}
      <Footer />
    </>
  );
}

export default App;
