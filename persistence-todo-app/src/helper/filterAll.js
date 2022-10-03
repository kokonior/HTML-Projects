import { getStoredTodo } from "../taskData.js";
import { renderTodo } from "./renderTodo.js";

export const filterAll = () => {
  try {
    const todos = getStoredTodo();

    document.getElementById("todo-list").textContent = "";
    todos.forEach((todo) => {
      renderTodo(todo);
    });
  } catch (error) {
    throw new Error("Error in Getting the stored Todos from the Local storage");
  }
};
