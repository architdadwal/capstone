import React, { useEffect, useState } from "react";
export const ActivityDetails = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/87697579-7135-41e8-9334-8fd51ccf0fff").then(
      (res) => res.json().then((res) => setUser(res))
    );
  }, []);

  return (
    <>
      {user.map((x) => (
        <div>
          <div > <img src ="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/05/acj-2205-paragliding-in-bhimtal-7.jpg" ></img>{x.id}</div>
          <div>{x.activity}</div>
          <div>{x.amount}</div>
          <div> {x.amount} </div>
          <div> {x.description} </div>
          <div> {x.city} </div>
        </div>
      ))}
    </>
  );
};
