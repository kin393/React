import React, { useState } from "react";

function AddRandomNumber() {
  const [items, setCount] = useState([]);

  const setNumber = () => {
    setCount([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10)
      }
    ]);
  };
  return (
    <div>
      <button onClick={() => setNumber()}>Click Me</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddRandomNumber;
