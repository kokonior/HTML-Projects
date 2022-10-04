import { getStoredTodo } from "../taskData.js";
import { renderTodo } from "./renderTodo.js";

export const filterUncompleted = () => {
  try {
    const todos = getStoredTodo();
    const uncompletedTodos = todos.filter((todo) => {
      return todo.completed == false;
    });
    document.getElementById("todo-list").textContent = "";
    uncompletedTodos.forEach((todo) => {
      renderTodo(todo);
    });
  } catch (error) {
    throw new Error("Error in Getting the stored Todos from the Local storage");
  }
};
