import { createTodo } from "./createTodo.js";
export const formSubmission = (event) => {
  //prevent form refresh
  event.preventDefault();
  createTodo(event.target.textInput.value);
  event.target.textInput.value = "";
};
