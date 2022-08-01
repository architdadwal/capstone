import React from "react";
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
import "./App.css";
import Form from "./Activity/Form";
import Payment from "./Activity/Payment";
//planning components here
import Mountains from "./Planning/mountains";
import Mountainplaces from "./Planning/Mountainplaces";
import Beachplaces from "./Planning/Beachplaces";
import Historicalplaces from "./Planning/Historicalplaces";
import Religiousplaces from "./Planning/Religiousplaces";
import Historical from "./Planning/historical";
import Religious from "./Planning/religious";
import Beaches from "./Planning/Beaches";
<<<<<<< HEAD
import { ActivityDetails } from "./Activity/ActivityDetails";
=======
import Hotels from "./Planning/Hotels";
>>>>>>> 3c7fc35d2086cd278fc4db36c952f606a8e6470d
// import Payment from "@material-ui/icons";


// import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/TravelBlogs" element={<TravelBlogs />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Activity/:id" element={<Cities />} />
          <Route path="/Activity/:id/:tag" element={<CityDisc />} />
          <Route path="/Booking" element={<Form />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/mountains" element={<Mountains />} />
          <Route path="/Historical" element={<Historical />} />
          <Route path="/Religious" element={<Religious />} />
          <Route path="/Beaches" element={<Beaches />} />
          <Route path="/ActivityDetails" element={<ActivityDetails />} />
          <Route path="/mountains/:id" element={<Mountainplaces />} />
          <Route path="/beaches/:id" element={<Beachplaces />} />
          <Route path="/historical/:id" element={<Historicalplaces />} />
          <Route path="/religious/:id" element={<Religiousplaces />} />

          <Route path="/Hotels" element={<Hotels />} />

          <Route path="/payment" element={<Payment />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
