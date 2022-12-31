import React from "react";

function Element(props) {
  let items = props.item;
  function handleDelete(del) {
    props.handleRemove(del);
  }
  function handleDone(li) {
    li.target.className += " checked";
  }
  return (
    <React.Fragment>
      {items.map((item, index) => (
        <li key={index} onClick={(e) => handleDone(e)}>
          {item}
          <span onClick={() => handleDelete(index)} className="close">
            ×
          </span>
        </li>
      ))}
    </React.Fragment>
  );
}

export default Element;
