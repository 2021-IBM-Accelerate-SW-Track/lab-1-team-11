import React, { useState } from "react";
import { Container, Fab, Icon, withStyles } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import { Delete } from "@material-ui/icons";
import Modal from "../modal";
import "./todo.css";


//We want to eventually import useState in order to
// track the state of each item for editing purposes
// Maybe using the code below

// const [showModal, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);



const styles = (theme) => ({
  fab: {
    margin: theme.spacing.unit,
  },
});


export function TodoList(props) {
  const { classes } = props;
  const [show, setShow] = useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container>
      <Checkbox
        id="chkBox"
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        <Fab id ="editBtn" color="secondary" aria-label="Edit" className={classes.fab}>
          <Icon onClick={handleShow}>edit_icon</Icon>
          <Modal show={show} />
        </Fab>
        <Fab id ="deleteBtn" disabled aria-label="Delete" className={classes.fab}>
          <Delete />
        </Fab>
      </Container>
    </div>
  );
}

export default withStyles(styles)(TodoList);
