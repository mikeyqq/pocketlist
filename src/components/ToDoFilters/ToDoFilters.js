import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByLevel, setStartDate, setEndDate } from "../../actions/filters";
import { DateRangePicker } from "react-dates";
import "./ToDoFilters.scss";

import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class ToDoListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div className="filters-container">
        <TextField
          className="filters-textfield"
          type="text"
          label="Search"
          autoFocus
          margin="normal"
          variant="outlined"
          value={this.props.filters.text}
          onChange={e => this.props.dispatch(setTextFilter(e.target.value))}
        />

        <Select
          className="filters-select"
          margin="normal"
          variant="outlined"
          inputProps={"test"}
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "level") {
              this.props.dispatch(sortByLevel());
            }
          }}
        >
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="level">Level</MenuItem>
        </Select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ToDoListFilters);
