import React, { useState } from "react";
import { Link } from "react-router-dom";
import Booking from "./Booking";
import "./Booking.css";
const Form = () => {
  const [username, setUsername] = useState("");
  console.log(username);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.formEntries(data.entries));
  };
  return (
    <div className="form">
      <div className="input">
        <form onSubmit={handleSubmit}>
          <Booking
            name="First Name"
            placeholder="First Name"
            setUsername={setUsername}
          />
          <Booking name="Last Name" placeholder="Last Name" />
          <Booking name="Email" placeholder="Email" />
          <Booking name="Date of Birth" placeholder="Date of Birth" />
          <Booking name="Age" placeholder="Age" />
          <Booking name="Mobile No" placeholder="Mobile No" />
          <Booking name="Gender" placeholder="Gender" />
          <Booking name="Booking Date" placeholder="Booking Date" />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to={"/Payment"}>
              <button
                style={{
                  width: "100px",
                  height: "40px",
                  margin: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#007185",
                }}
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
