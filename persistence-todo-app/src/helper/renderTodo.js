import { Task } from "../components/task.js";

export const renderTodo = (todoObj) => {
  const todoListDiv = document.getElementById("todo-list");
  const taskMarkup = Task(todoObj);
  todoListDiv.appendChild(taskMarkup);
};
