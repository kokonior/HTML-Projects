import { taskConstructor } from "./taskConstructor.js";
import { storeTodo, getStoredTodo } from "../taskData.js";
import { inputValidation } from "./inputValidation.js";
import { renderTodo } from "./renderTodo.js";

export const createTodo = (text) => {
  //validation
  if (inputValidation(text)) {
    //create task
    const todoObj = new taskConstructor(text);
    renderTodo(todoObj);
    //store the task
    try {
      const StoredTodos = getStoredTodo();
      StoredTodos.push(todoObj);
      storeTodo(StoredTodos);
    } catch (error) {
      console.log("Check Your Local Storage");
      throw new Error("Issue with Browser Local storage");
    }
  }
};
