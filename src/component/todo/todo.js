import { Container, Fab, Icon, withStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const styles = (theme) => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
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
