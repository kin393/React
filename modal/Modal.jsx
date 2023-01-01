function Modal(props) {
  return (
    <div id="myModal" style={{ display: props.open }} className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.close}>
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default Modal;
