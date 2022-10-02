// let randomColor = Math.random();
// randomColor = Math.random().toString(16);
// randomColor = Math.random().toString(16).substring(2, 8);
// console.log(randomColor);

const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");
const copy = document.querySelector(".copy");

const generateColor = function () {
  const randomColor = Math.random().toString(16).substring(2, 8);
  hex.value = "#" + randomColor;
  document.body.style.background = hex.value;
};

const copyColor = function () {
  hex.select();
  hex.setSelectionRange(0, 1000);
  document.execCommand("copy");
  alert("Color has been copied to the clipboard");
};

btn.addEventListener("click", generateColor);
copy.addEventListener("click", copyColor);
