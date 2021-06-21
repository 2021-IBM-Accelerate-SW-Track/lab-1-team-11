import React, { useState } from "react";
import { Container, Icon } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Delete } from "@material-ui/icons";
import Modal from "../modal";
import "./todo.css";

export default function TodoList() {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Icon id="editBtn" onClick={handleShow}>
          edit_icon
        </Icon>
        <Modal show={show} />
        <Delete id="deleteBtn" />
      </Container>
    </div>
  );
}
