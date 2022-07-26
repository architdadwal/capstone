import React from "react";
import "./Booking.css";
function Booking(props) {
  return (
    <div className="formInput">
      {/* <label>{props.name} :</label> */}
      <input name={props.name}
        placeholder={props.placeholder}
        onChange={(e) => props.setUsername(e.target.value)}
      />
    </div>
  );
}

export default Booking;
