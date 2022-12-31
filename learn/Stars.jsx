import { useEffect, useState } from "react";

const starStyle = {
  border: "1px solid grey",
  display: "inline-block",
  borderRadius: "50%",
  height: "10px",
  width: "10px",
  margin: "5px"
};


function Stars(props) {
  let star = document.querySelectorAll(".dot");


  const [rating, SetStars] = useState(0);

  
  useEffect(() => {
    SetStars(props.rating);
    for(let i = 0; i < star.length; i++){
      star[i].classList.remove('gold')
    }
    for(let i = 0; i < rating; i++){
      star[i].classList.add('gold')
    }
  },);

  return (
    <div>

      <h1>Rating</h1>
      <div className="dot 1" style={starStyle}></div>
      <div className="dot 2" style={starStyle}></div>
      <div className="dot 3" style={starStyle}></div>
      <div className="dot 4" style={starStyle}></div>
      <div className="dot 5" style={starStyle}></div>
    </div>
  );
}

export default Stars;
