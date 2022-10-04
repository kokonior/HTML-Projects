export const taskConstructor = function (description) {
  this.taskID = Math.floor(Math.random() * 10000);
  this.description = description;
  this.completed = false;
};
