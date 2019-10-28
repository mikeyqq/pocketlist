import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { startRemoveToDoItem } from "../../actions/toDoItems";
import "./ToDoListItems.scss";

const ToDoListItems = ({ id, title, description, createdAt, dispatch }) => {
  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleChange = name => event => {
    setState({ [name]: event.target.checked });
  };
  return (
    <div className="to-do-list-item-container">
      <Checkbox
        checked={state.checkedA}
        onChange={handleChange("checkedA")}
        value="checkedA"
        inputProps={{
          "aria-label": "primary checkbox"
        }}
      />
      <div className="to-do-list-item-box">
        <Link to={`/edit/${id}`}>
          <h3 className="to-do-list-item-title">{title}</h3>
        </Link>
        <div className="to-do-list-item-description">{description}</div>
        <p>Due: {moment(createdAt).format("YYYY-MM-D")}</p>
      </div>
      <div className="to-do-list-item-button">
        <button
          onClick={() => {
            dispatch(startRemoveToDoItem({ id }));
          }}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default connect()(ToDoListItems);
