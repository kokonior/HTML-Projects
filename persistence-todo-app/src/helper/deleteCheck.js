import { deleteTodoStorage } from "./deleteTodoStorage.js";
import { storeTodo, getStoredTodo } from "../taskData.js";

export const deleteCheck = (event) => {
  const item = event.target;

  //delete todo from storage and remove from dom
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    const id = todo.id;
    //fall animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
    deleteTodoStorage(id);
  }

  //mark check and update the todo in the storage
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;

    todo.classList.toggle("completed");
    const todos = getStoredTodo();
    const id = todo.id;
    const todoObj = todos.find((todo) => {
      return todo.taskID == id;
    });

    todoObj.completed = !todoObj.completed;
    storeTodo(todos);
  }
};
