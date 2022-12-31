import { useState, useEffect } from "react";

import Element from "./Element.jsx";

function ToDoList(props) {
  const inputElement = document.getElementById('inputElement')
  const [list , setList ] = useState([])
  const [item, AddtoList] = useState('');

  function handleInput() {
    setList(list => [...list, item])

  }

  useEffect(() => {
    inputElement.value = ''
  })

  function handleData(index){
    if(list.length === 1)
      setList(list => list = [])
    else
    setList(list.slice(index))
  }

  return (
    <div>
      <div id="head" className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          value={item}
          onChange={(e) => AddtoList(e.target.value)}
          id='inputElement'
          placeholder="Add an item"
        />
        <span onClick={() => handleInput()} className="addBtn">
          Add
        </span>
      </div>
      <ul id="myToDoList">
        <Element item={list} handleRemove={handleData}/>
     
      </ul>
    </div>
  );
}

export default ToDoList;
