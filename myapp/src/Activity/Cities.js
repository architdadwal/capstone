import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { data } from './data';
import "./City.css";

const Cities = () => {
    const params = useParams();
  const City = data.find((item) => item.id == params.id);

  return (
    <div>
        <h1 style={{textAlign:"center"}}>{City.Activity}</h1>
    <div className='cityComponent'>
        {
            City.Cities.map((data, index) => (
                <div style={{margin:"30px"}}>
                  <Link to={`/Activity/${City.id}/${data.city}`} state={data}>
                <img src={data.Image} alt="" key={index} style={{ height: "300px", width: "300px", borderRadius: "10%" }}/>
                <h1    style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "black",
                  }}>
                {data.city}
                </h1>
                </Link>
                </div>
            ))
        }
    </div>
    </div>

  )
}

export default Cities