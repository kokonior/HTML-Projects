import { filterCompleted } from "./filterCompleted.js";
import { filterUncompleted } from "./filterUncompleted.js";
import { filterAll } from "./filterAll.js";

export const filterTodo = (event) => {
  const selectedFilter = document.getElementById("todo-filter").value;
  if (selectedFilter == "all") {
    filterAll();
  } else if (selectedFilter == "completed") {
    filterCompleted();
  } else if (selectedFilter == "uncompleted") {
    filterUncompleted();
  } else {
    return;
  }
};
