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



// import { data } from "./data";
// export default data
// [
//   {
//     "id" : 1 ,
//     "activity" : "Paragliding",
//     "amount" : 4000 ,
//     "description" : "Description: Paragliding is the recreational and competitive adventure sport of flying paragliders: lightweight, free-flying, foot-launched glider aircraft with no rigid primary structure. The pilot sits in a harness or lies supine in a cocoon-like 'pod' suspended below a fabric wing.",
//     "city" : "goa"
//   },
//   {
//     "id" : 2 ,
//     "activity" : "Under Water Walk",
//     "amount" : 35000 ,
//     "description" : "Description: The Under water Walk is a walking trail located on Victoria's south-west coast in Australia, traversing several areas of historical and cultural significance.",
//     "city" : "kerla"
//   },
//   {
//     "id" : 3 ,
//     "activity" : "Rafting",
//     "amount" : 5000 ,
//     "description" : "Description: Rafting and whitewater rafting are recreational outdoor activities which use an inflatable raft to navigate a river or other body of water.",
//     "city" : "Himachal pradesh"
//   },
//   {
//     "id" : 4 ,
//     "activity" : "bungee jumping",
//     "amount" : 5500 ,
//     "description" : "Description: Bungee jumping, also spelled bungy jumping, is an activity that involves a person jumping from a great height while connected to a large elastic cord.",
//     "city" : "U.K"
//   },
//   {
//     "id" : 5 ,
//     "activity" : "Skiing",
//     "amount" : 4500 ,
//     "description" : "Description: Skiing is the use of skis to glide on snow. Variations of purpose include basic transport, a recreational activity, or a competitive winter sport.",
//     "city" : "J&K"
//   },
//   {
//     "id" : 6 ,
//     "activity" : "Scuba Diving",
//     "amount" : 55000 ,
//     "description" : "Description: Scuba diving is a mode of underwater diving whereby divers use breathing equipment that is completely independent of a surface air supply",
//     "city" : "goa"
//   },
//   {
//     "id" : 7 ,
//     "activity" : "Kayking",
//     "amount" : 4000 ,
//     "description" : "Description: Kayaking is the use of a kayak for moving over water. It is distinguished from canoeing by the sitting position of the paddler and the number of blades on the paddle.",
//     "city" : "Aasham"
//   },
//   {
//     "id" : 8 ,
//     "activity" : "Surfing",
//     "amount" : 2500 ,
//     "description" : "Description: Surfing is a surface water sport in which an individual, a surfer (or two in tandem surfing), uses a board to ride on the forward section, or face, of a moving wave of water, which usually carries the surfer towards the shore.",
//     "city" : "goa"
//   },
//   {
//     "id" : 9 ,
//     "activity" : "Hot Air Balloon",
//     "amount" : 5000 ,
//     "description" : "Description: A hot air balloon is a lighter-than-air aircraft consisting of a bag, called an envelope, which contains heated air.",
//     "city" : "Manali"
//   },
//   {
//     "id" : 10 ,
//     "activity" : "Jet Skiing",
//     "amount" : 4000 ,
//     "description" : "Description: Jet Ski is the brand name of a personal watercraft (PWC) manufactured by Kawasaki,a Japanese company.",
//     "city" : "Andman"
//   }  
    

// ]


