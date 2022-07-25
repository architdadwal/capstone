import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function CityDisc() {
    const location = useLocation();
    const discription = location.state;
const Amount =location.state;
  return (
    <>
    <img src={discription.Image} alt={discription.city}/>
    <h1>{discription.city}</h1>
    <p>Description: {discription.Discription}</p>
    <h2>Amount: {Amount.Amount}</h2>
    <h2>Contact us: xxx.yyy@gmail.com</h2>
    <Link to={"/Booking"}>
    <button>Book Now</button>
    </Link>
    </>
  )
}

export default CityDisc