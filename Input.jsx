import { useState } from "react";

function InputStars(props) {
  const [star, setStar] = useState(0);

  let inputClass = "primary";

  function SetRating() {
    let rating = star;
    inputClass = rating > 5 ? "red" : "primary";
    props.sendData(rating);
  }

  return (
    <div>
      <input
        value={star}
        className={inputClass}
        onChange={(e) => setStar(e.target.value)}
      />
      <button onClick={() => SetRating()}>Give Rating</button>
    </div>
  );
}

export default InputStars;
