// Form Validation for front button
// Dom content loading
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", validateForm);
});

// Dom manipulation
const validateForm = (e) => {
  let inputName = document.getElementById("input-name").value;
  let balance = document.getElementById("input-amount").value;
  const btn = document.getElementById("btn");

  if (inputName == "") {
    alert("Name must be filled out");
  } else if (balance == "") {
    alert("Balance must be filled out");
  } else {
    localStorage.setItem("Username", inputName);
    localStorage.setItem("Amount", balance);

    window.location.href = "main.html";
  }
};

// Expense tracker working
let username = localStorage.getItem("Username");
let amount = localStorage.getItem("Amount");

console.log(username, amount);

// Saving data to localStorage
let uname = document.getElementById("uname");
let balance = document.getElementById("balance");

uname.innerHTML = username;
balance.innerHTML = "₹" + amount;

// Add income
const addIncome = (ev) => {
  ev.preventDefault();
  let amount = document.getElementById("transaction-amount").value;
  let text = document.getElementById("transaction-text").value;
  let table = document.getElementById("table");
  let x = parseInt(balance.innerHTML.slice(1));

  if (amount === "" || text === "") {
    alert("Field must not be empty");
  } else if (amount > 10000000) {
    alert("Amount should be within 1 crore");
  } else {
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerText = text;
    cell2.innerText = amount;
    cell3.innerHTML = `credit`;

    x = x + parseInt(amount);
    balance.innerHTML = "₹" + x;
  }
};

// Calculate the expense
const reduceExpense = (ev) => {
  ev.preventDefault();

  // taking balance
  let expenseMoney = parseInt(
    document.getElementById("expense").innerHTML.slice(1)
  );
  let amount = document.getElementById("transaction-amount").value;
  let text = document.getElementById("transaction-text").value;
  let x = parseInt(balance.innerHTML.slice(1));

  if (amount == "" || text == "") {
    alert("Field must not be empty");
  } else if (amount > x) {
    alert("Insufficient Balance");
    document.getElementById("transaction-amount").style.color = "red";
    setInterval(() => {
      document.getElementById("transaction-amount").style.color = "black";
    }, 3000);
  } else if (x >= amount) {
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerText = text;
    cell2.innerText = amount;
    cell3.innerHTML = `debit`;

    expenseMoney = expenseMoney + parseInt(amount);
    x = x - parseInt(amount);

    document.getElementById("expense").innerHTML = "₹" + expenseMoney;
    balance.innerHTML = "₹" + x;
  }
  console.log(expenseMoney);
};

const credit = document.getElementById("credit");
const debit = document.getElementById("debit");

document.addEventListener("DOMContentLoaded", () => {
  credit.addEventListener("click", addIncome);
});

document.addEventListener("DOMContentLoaded", () => {
  debit.addEventListener("click", reduceExpense);
});
