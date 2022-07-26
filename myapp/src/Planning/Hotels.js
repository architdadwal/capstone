import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FetchHotels() {
  const [hotels, setHotels] = useState([]);

  const fetchHotels = () => {
    axios
      .get("http://fake-hotel-api.herokuapp.com/api/hotels")
      .then((response) => {
        // console.log(response);
        setHotels(response.data);
      });
  };

  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={fetchHotels}>
          Show the list of hotels
        </button>
      </div>

      <div className="container">
        <div className="row">
          {hotels.map((value, index) => {
            return (
              <div key={index} className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                    <p className="card-text">{value.description}</p>
                    <div classname="container">{value.images}</div>
                    <Link
                      to={"/Booking"}
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        style={{
                          width: "100px",
                          height: "40px",
                          margin: "10px",
                          borderRadius: "5px",
                          backgroundColor: "#007185",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchHotels;
