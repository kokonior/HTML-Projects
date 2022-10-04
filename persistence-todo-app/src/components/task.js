export const Task = (taskObj) => {
  try {
    const div = document.createElement("div");
    div.classList.add("todo");
    div.id = taskObj.taskID;
    if (taskObj.completed) {
      div.classList.add("completed");
    }
    const p = document.createElement("p");
    p.classList.add("todo-item");
    p.textContent = taskObj.description;

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerHTML = "<i class='fa fa-check'></i>";

    const delBtn = document.createElement("button");
    delBtn.classList.add("trash-btn");
    delBtn.innerHTML = "<i class='fa fa-trash'></i>";

    div.appendChild(p);
    div.appendChild(completeBtn);
    div.appendChild(delBtn);

    return div;
  } catch (error) {
    console.log("Error with Task Object");
    throw new Error("Unable to create Todo task markup");
  }
};
