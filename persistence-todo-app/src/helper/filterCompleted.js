import { getStoredTodo } from "../taskData.js";
import { renderTodo } from "./renderTodo.js";

export const filterCompleted = () => {
  try {
    const todos = getStoredTodo();
    const completedTodos = todos.filter((todo) => {
      return todo.completed == true;
    });
    document.getElementById("todo-list").textContent = "";
    completedTodos.forEach((todo) => {
      renderTodo(todo);
    });
  } catch (error) {
    throw new Error("Error in Getting the stored Todos from the Local storage");
  }
};
