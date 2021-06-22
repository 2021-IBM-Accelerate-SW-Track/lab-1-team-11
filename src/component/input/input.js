import React, { useState } from "react";
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
function Inputs(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <Input type= "text" inputProps={{ "aria-label": "description" }} value={name}
      onChange={handleChange} />
      <Button type= "submit" className="new-item-input" variant="contained" color="primary">
        {" "}
        +{" "}
      </Button>
    </form>
  );
}
export default Inputs;
