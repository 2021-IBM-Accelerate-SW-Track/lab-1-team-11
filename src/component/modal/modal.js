import React, { useState } from "react";
import "./modal.css";
import { Button } from "@material-ui/core";


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
          <Button variant="contained" color="secondary" className="button1" onClick={handleClose}>
            Close
            <Modal close={close} />
          </Button>
          <Button variant="contained" color="primary" className="button2" onClick={handleClose}>Save Changes
          <Modal close={close} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
