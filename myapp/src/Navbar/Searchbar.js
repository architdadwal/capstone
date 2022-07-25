// import React from 'react'

// function Searchbar() {
//   return (
// //     <div  classname="searchbar">
// //         <input  type="text" placeholder='Where to go .....'style={{marginLeft:"50px", width:"300px", height:"30px", }} />
    
// //     </div>
// //   )
// // }
import React from 'react';

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Searchbar = () => (
  <div style={{marginLeft:"50px", width:"300px", height:"30px", }}>
    <GooglePlacesAutocomplete 
      apiKey="****"
      
    />
    
  </div>
  
);

// export default Component;


 export default Searchbar