import React from "react";
import { Link, useLocation } from "react-router-dom";
function CityDisc() {
  const location = useLocation();
  const discription = location.state;
  const Amount = location.state;
  return (
    <div
      className="citydis"
      style={{
        height: "500px",
        width: "500px",
        alighnItem: "center",
        justifyContent: "center",
        marginLeft: "35%",
        borderColor: "black",
        margin:"absolute",
      }}
    >
      <img
        src={discription.Image}
        alt={discription.city}
        style={{
          alignItems: "center",
          height: "500px",
          width: "500px",
          marginTop: "10px",
        }}
      />
      <h1>{discription.city}</h1>
      <p>Description: {discription.Discription}</p>
      <h2>Amount: {Amount.Amount}</h2>
      <h2>Contact us: xxx.yyy@gmail.com</h2>
      <Link to={"/Booking"}  style={{alignItems:"center",
                  display:"flex",
                  justifyContent:"center"}} >
        
        <button    style={{
                  width: "100px",
                  height: "40px",
                  margin: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#007185",
                  alignItems:"center",
                  display:"flex",
                  justifyContent:"center"
                }}>Book Now</button>
      </Link>
      <div style={{height:"100px"}}/>
    </div>
  );
}
export default CityDisc;
