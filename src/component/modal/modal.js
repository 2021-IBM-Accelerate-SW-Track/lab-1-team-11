import React, {useState} from "react";
import { Button } from "@material-ui/core";

export default function Modal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Item Goes Here</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// const Modal = (props) => {
//   if (!props.show) {
//     return null;
//   }

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h4 className="modal-title">Edit Item</h4>
//         </div>
//         <div className="modal-body">This is a modal.</div>
//         <div className="modal-footer">
//           <button className="button">Close</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
