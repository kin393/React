import React, { useState } from "react";

function useStateCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Click count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click Me
      </button>

      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Click Me
      </button>
    </div>
  );
}

export default useStateCounter;
