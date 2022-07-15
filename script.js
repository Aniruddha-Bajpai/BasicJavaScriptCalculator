// variables
var addition = document.getElementById("Addition");
var substraction = document.getElementById("Substraction");
var calculate = document.getElementById("Calculation");

// adding event listener
// addition.addEventListener("click", operation);
substraction.addEventListener("click", () => {
  var n1 = parseInt(prompt("Enter your first number ?"));
  var n2 = parseInt(prompt("Enter your second number"));
  displayoperation(n1 - n2);
});
addition.addEventListener("click", () => {
  var n1 = parseInt(prompt("Enter your first number ?"));
  var n2 = parseInt(prompt("Enter your second number"));
  displayoperation(n1 + n2);
});

function displayoperation(result) {
  calculate.innerText = result;
  alert("the result " + result);
  console.log(result);
}
