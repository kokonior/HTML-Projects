export let todoItems = "todoItems";

//store in local storage
export const storeTodo = (itemsList) => {
  localStorage.setItem(todoItems, JSON.stringify(itemsList));
};

export const getStoredTodo = () => {
  return JSON.parse(localStorage.getItem(todoItems));
};
