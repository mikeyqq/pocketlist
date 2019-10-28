import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { startRemoveToDoItem } from "../../actions/toDoItems";

const ToDoListItems = ({ id, title, description, createdAt, dispatch }) => {
  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleChange = name => event => {
    setState({ [name]: event.target.checked });
  };
  return (
    <div>
      <Checkbox
        checked={state.checkedA}
        onChange={handleChange("checkedA")}
        value="checkedA"
        inputProps={{
          "aria-label": "primary checkbox"
        }}
      />
      <Link to={`/edit/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <p>Due: {moment(createdAt).format("YYYY-MM-D")}</p>
      <button
        onClick={() => {
          dispatch(startRemoveToDoItem({ id }));
        }}
      >
        Remove Item
      </button>
    </div>
  );
};

export default connect()(ToDoListItems);
