import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
// import AppRouter from './AppRouter';
import Activity from "./Activity/Activity";
import TravelBlogs from "./TravelBlogs/TravelBlogs";
import AboutUs from "./AboutUs/AboutUs";
import Home from "./Home/Home";
import Planning from "./Planning/planning";
import SignIn from "./SignIn/SignIn";
import Cities from "./Activity/Cities";
import CityDisc from "./Activity/CityDisc";
import Booking from "./Activity/Booking";
import "./App.css";



// import {BrowserRouter} from 'react-router-dom';
function App() {
  const [username,setUsername]= useState("")
  console.log(username)
  const handleSubmit = (e)=>{
e.preventDefault();
const data =new FormData(e.target)
console.log(Object.formEntries(data.entries));
  }
  return (
    <div style={{marginBottom:"100px"}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/TravelBlogs" element={<TravelBlogs />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Activity/:id" element={<Cities />} />
          <Route path="/Activity/:id/:tag" element={<CityDisc />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/planning/mountain" element={<mountains />} />

        </Routes>
      </BrowserRouter>
      <Footer />
      <div className="input" >
<form onSubmit={handleSubmit}>
  <Booking name="First Name" placeholder="First Name" setUsername={setUsername}/>
  <Booking name="Last Name" placeholder="Last Name"/>
  <Booking name="Email" placeholder="Email"/>
  <Booking name="Date of Birth" placeholder="Date of Birth"/>
  <Booking name="Age" placeholder="Age"/>
  <Booking name="Mobile No" placeholder="Mobile No"/>
  <Booking name="Gender" placeholder="Gender"/>
  <Booking name="Booking Date" placeholder="Booking Date"/>
  <button>Submit</button>
</form>
      </div>
    </div>
  );
}


export default App;
