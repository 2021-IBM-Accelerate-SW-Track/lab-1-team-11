import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import "./items.css";

// Arrow function that creates the styles for our input form
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Inputs() {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();

    // This is testing whether or not the add button actually does something
    //There is no proper functionality for adding an item currently
    console.log("hi");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root} autoComplete="on">
      <Input
        data-testid="new-item-input"
        inputProps={{ "aria-label": "description" }}
      />
      <Button data-testid="new-item-button" variant="contained" color="primary">
        {" "}
        +{" "}
      </Button>
    </form>
  );
}
