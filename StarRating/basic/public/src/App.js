import React, { useEffect, useState } from "react";
import "./styles.css";

function Star(props) {
  const num = props.num;
  const star = props.star;
  function handleRating(star) {
    props.Rating(star);
  }
  return (
    <span
      className={`stars ${star >= num ? `active` : ``}`}
      onClick={() => handleRating(num)}
    >
      &#9733;
    </span>
  );
}

export default function App() {
  const [star, setStar] = useState(-1);
  function handleStar(count) {
    setStar(() => count);
  }
  return (
    <div className="App">
      {[...Array(5)].map((e, i) => (
        <Star key={i} num={i} star={star} Rating={handleStar} />
      ))}
    </div>
  );
}
