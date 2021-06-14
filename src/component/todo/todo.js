import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
export default function TodoList() {
  return (
    <div>
      <IconButton variant="outlined" size="small" color="secondary">
        <Delete />
      </IconButton>
    </div>
  );
}
