import moment from "moment";

export default (toDoItems, { text, sortBy, startDate, endDate }) => {
  return toDoItems
    .filter(toDoItem => {
      const createdAtMoment = moment(toDoItem.createdAt); //using moment to turn createdAt and assigning to variable
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
      const textMatch = toDoItem.title.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt > b.createdAt ? 1 : -1;
      } else if (sortBy === "level") {
        return a.level < b.level ? 1 : -1;
      } else {
        return 0;
      }
    });
};
