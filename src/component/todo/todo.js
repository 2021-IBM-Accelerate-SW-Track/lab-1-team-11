//import React, { useState } from "react";
import { Container, Fab, Icon, withStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

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

  return (
    <div>
      <Container>
        <Fab color="secondary" aria-label="Edit" className={classes.fab}>
          <Icon>edit_icon</Icon>
        </Fab>
        <Fab disabled aria-label="Delete" className={classes.fab}>
          <Delete />
        </Fab>
      </Container>
    </div>
  );
}

export default withStyles(styles)(TodoList);
