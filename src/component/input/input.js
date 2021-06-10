import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Inputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input
        defaultValue="Enter Item Here"
        inputProps={{ "aria-label": "description" }}
      />
      <Button variant="contained" color="primary">
        {" "}
        +{" "}
      </Button>
    </form>
  );
}
