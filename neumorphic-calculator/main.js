var input = document.querySelector("input");
var operators = document.querySelectorAll(".op__key");
var numbers = document.querySelectorAll(".num__key");
var equal = document.querySelector(".eq__key");
var clear = document.querySelector(".clear__key");
var negate = document.querySelector(".negate__key");
var percent = document.querySelector(".percent__key");

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", () => {
        input.value += numbers[i].innerText;
    });
}
clear.addEventListener("click", () => {
    input.value = 0;
});
negate.addEventListener("click", () => {
    input.value *= -1;
});
percent.addEventListener("click", () => {
  input.value += '%';
});
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", () => {
        input.value += operators[i].innerText;
    })    
}
equal.addEventListener("click", () => {
    input.value = eval(input.value);
})