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

  const [stars, SetStars] = useState(0);

  useEffect(() => {
    SetStars(props.rating);
  });

  return (
    <div>
      <h1>Rating</h1>
      <div className="dot" style={starStyle}></div>
      <div className="dot" style={starStyle}></div>
      <div className="dot" style={starStyle}></div>
      <div className="dot" style={starStyle}></div>
      <div className="dot" style={starStyle}></div>
    </div>
  );
}

export default Stars;
