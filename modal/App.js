import "./styles.css";
import Modal from "./Modal";
import { useState } from "react";

export default function App() {
  const [open, modalOpen] = useState("none");
  function openModal(e) {
    e.stopPropagation();
    modalOpen((open) => "block");
  }
  let modal = document.getElementById("myModal");
  function handleClose(){
    modalOpen((open) => "none");
  }
  window.onclick = function (event) {
    if (event.target == modal) 
    handleClose()
  };
  return (
    <div className="App">
      <h2>Modal</h2>

      <button onClick={(e) => openModal(e)}>Open Modal</button>

      <Modal open={open} close={handleClose}/>
    </div>
  );
}
