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
          <Route path="/planning/mountain" element={<mountains />} />
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
