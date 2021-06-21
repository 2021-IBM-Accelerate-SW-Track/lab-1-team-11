import React, { useState } from "react";

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
          <h4 className="modal-title">Edit Item</h4>
        </div>
        <div className="modal-body">This is a modal.</div>
        <div className="modal-footer">
          <button className="button" onClick={handleClose}>
            Close
            <Modal close={close} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
