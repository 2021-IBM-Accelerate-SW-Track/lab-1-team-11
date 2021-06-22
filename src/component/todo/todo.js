import React from "react";

import { Container, Icon } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Delete } from "@material-ui/icons";
// import Modal from "../modal";
import "./todo.css";

function Modal({ children, shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >

      <div
        className="modal-content"
        onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <input type="text" name="name" />
        <button onClick={close}>Close</button>
        <button onClick={close}>Save Changes</button>
        {children}
      </div>
    </div>
  ) : null;
}

export default function TodoList() {
  const [checked, setChecked] = React.useState(false);
  const [modalShown, toggleModal] = React.useState(false);


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <Container>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Icon id="editBtn" onClick={() => {
          toggleModal(!modalShown);
        }}>
          edit_icon
        </Icon>
        <Delete id="deleteBtn" />
      <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
      </Modal>
      </Container>
    </div>
  );
}
