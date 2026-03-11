// variable declared

const todayDate = new Date();

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const todosDay = document.getElementById("todaysDay");
const todaysDate = document.getElementById("todaysDate");
todosDay.textContent = days[todayDate.getDay()];
todaysDate.textContent = `${
	months[todayDate.getMonth()]
} ${todayDate.getDate()}, ${todayDate.getFullYear()}`;

// todaysDay.textContent=d
const formE1 = document.getElementById("form");
const todoInputE1 = document.getElementById("todoInput");
const todoListConatiner = document.querySelector(".todo__list");

// function Section
const displayTodoDOM = (todo) => {
	const liE1 = document.createElement("li");
	liE1.classList.add("bounceIn");
	liE1.innerHTML = `<span class="text">${todo}</span>
						<div class="options">
							<span id="check" title="check"><i class="fa fa-check"></i></span>
							<span id="edit" title="edit"><i class="fa fa-edit"></i></span>
							<span id="delete" title="delete"><i class="fa fa-trash"></i></span>
						</div>`;
	todoListConatiner.appendChild(liE1);
};

const itemToDelete = (item) => {
	if (item.classList.contains("fa-trash") || item.id === "trash") {
		const todoLiE1 = item.closest("li");
		todoLiE1.classList.remove("bounceIn");
		todoLiE1.classList.add("bounceOutDown");
		setTimeout(() => {
			todoLiE1.remove();
		}, 1000);
		deleteDataFromLocalStorage(item);
	}
};

const itemToEdit = (item) => {
	if (item.classList.contains("fa-edit") || item.id === "edit") {
		const todoLiE1 = item.closest("li");
		todoInputE1.value = todoLiE1.textContent.trim();
		todoLiE1.remove();
		editItemFromLocalStorage(item);
	}
};

const itemToDone = (item) => {
	if (item.classList.contains("fa-check") || item.id === "check") {
		const crossItem = item.closest("li");
		crossItem.firstElementChild.classList.toggle("completed");
	}
};

// local Storage

const storeToLocalStorage = (todo) => {
	let todoArr;
	if (localStorage.getItem("todos") === null) {
		todoArr = [];
	} else {
		todoArr = JSON.parse(localStorage.getItem("todos"));
	}
	todoArr.push(todo);
	localStorage.setItem("todos", JSON.stringify(todoArr));
};

// to display data from Local Storage
const displayDataFromLocalStorage = () => {
	const todoArr = JSON.parse(localStorage.getItem("todos"));
	for (const todo of todoArr) {
		displayTodoDOM(todo);
	}
};

const deleteDataFromLocalStorage = (item) => {
	const todoArr = JSON.parse(localStorage.getItem("todos"));
	const todoLiE1 = item.closest("li");

	const todoItemLeft = todoArr.filter(
		(todo) => todoLiE1.textContent.trim() !== todo
	);
	localStorage.setItem("todos", JSON.stringify(todoItemLeft));
};

const editItemFromLocalStorage = (item) => {
	deleteDataFromLocalStorage(item);
};
// event created here

document.addEventListener("DOMContentLoaded", displayDataFromLocalStorage);

todoListConatiner.addEventListener("click", (e) => {
	itemToDelete(e.target);
	itemToEdit(e.target);
	itemToDone(e.target);
});

formE1.addEventListener("submit", (e) => {
	//on click of add
	e.preventDefault();
	const inputTodo = todoInputE1.value; //value from input text will store here
	// console.log(inputTodo);
	if (!inputTodo) {
		//if its empty then it will give alert
		alert("please Enter a todo item");
	} else {
		displayTodoDOM(inputTodo);
		storeToLocalStorage(inputTodo);
	}
	formE1.reset();
});
