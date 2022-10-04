import { storeTodo, getStoredTodo } from "../taskData.js";

export const deleteTodoStorage = (id) => {
  const todos = getStoredTodo();
  const todoIndex = todos.findIndex((todo) => {
    return todo.taskID == id;
  });

  todos.splice(todoIndex, 1);

  storeTodo(todos);
};
