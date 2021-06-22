import React, { useState } from "react";
import { Container, Icon } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Delete, PinDropSharp } from "@material-ui/icons";
//import Modal from "../modal";
import "./todo.css";
function Modal({children, shown, close, editT, id, props}) {
  const [newName, setNewName] = useState('');
  function handleChange(e) {
    setNewName(e.target.value);
  }
  function handleSubmit(e) {
    editT(id, newName);
    setNewName("");
  }
  
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
        <input id={id} type="text" name="Newname" value={newName}
        onChange={handleChange} />
        <button onClick={close}>Close</button>
        <button onClick={function(event){ close(); handleSubmit()}}>Save Changes</button>
        {children}

      </div>
    </div>
  ) : null;
}
export default function TodoList(props) {
  const [show, setShow] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const [modalShown, toggleModal] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="c-cb">
        <input id="{props.id}" type="checkbox" defaultChecked={props.completed} />
        <label className="todo-label">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
      <Icon id="editBtn" onClick={() => {
          toggleModal(!modalShown);
        }}>
          edit_icon
        </Icon>
        <Delete id="deleteBtn" onClick={() => props.deleteT(props.id)} />
        <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        } } 
        editT={props.editT}
        id={props.id}
        name={props.name}
        completed={props.completed}
        key={props.id}
      >
      </Modal>
      </div>
    </div>
  );
}
