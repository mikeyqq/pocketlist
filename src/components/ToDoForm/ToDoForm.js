import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = moment();

console.log(now.format("MMM Do, YYYY"));

export default class ToDoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.toDo ? props.toDo.title : "",
      description: props.toDo ? props.toDo.description : "",
      level: props.toDo ? (props.toDo.level / 1).toString() : "",
      createdAt: props.toDo ? moment(props.toDo.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onLevelChange = e => {
    const level = e.target.value;
    if (!level || level.match(/^[1-9]\d*$/)) {
      this.setState(() => ({ level }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
    console.log("ToDoForm finding out what createdAt is on onDateChange", { createdAt });
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  //passes submitted info from this.state to parent component through props.onsubmit
  formOnSubmitHandler = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.description || !this.state.level) {
      this.setState(() => ({ error: "Please provide title and description" }));
      console.log("ERROR", this.state.error);
    } else {
      this.setState(() => ({ error: "" }));
      console.log("submitted");
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        level: parseInt(this.state.level, 10) * 1,
        createdAt: this.state.createdAt.valueOf()
      });
    }

    console.log("ToDoForm finding out what createdAt is on submit handler", this.state.createdAt);
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.formOnSubmitHandler}>
          <input type="text" placeholder="Title" autoFocus value={this.state.title} onChange={this.onTitleChange} />
          <textarea
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          ></textarea>
          <input type="text" placeholder="Level" value={this.state.level} onChange={this.onLevelChange} />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            //isOutsideRange={() => false} -> if we want to access to the dates in the past
          />
          <button>Submit Item</button>
        </form>
      </div>
    );
  }
}
