import "./styles.css";
import React, { useState } from "react";


import InputStars from "./Input.jsx"
import Stars from "./Stars.jsx"


export default function App() {

  const [finalRating, setRating] = useState(false);

  function getData(val){
    setRating(val)
}

  return <div className="App">
    <InputStars sendData={getData}/>
    {finalRating}
    <Stars rating={finalRating || 0} />
  </div>;
}
