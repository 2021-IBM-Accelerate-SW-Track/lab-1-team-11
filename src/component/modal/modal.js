import React, { useState } from "react";
import "./modal.css";


const Modal = (props) => {
  const [close, setClose] = useState(false);
  const handleClose = () => setClose(true);


  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
        <input className="modal-title" type="text" name="name"/>
        </div>
        <div className="modal-body">This is a modal.</div>
        <div className="modal-footer">
          <button className="button1" onClick={handleClose}>
            Close
            <Modal close={close} />
          </button>
          <button className="button2" onClick={handleClose}>Save Changes
          <Modal close={close} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
