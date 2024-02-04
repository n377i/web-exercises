console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const numberA = parseFloat(document.querySelector("#number-a").value);
  const numberB = parseFloat(document.querySelector("#number-b").value);
  const operator = document.querySelector('input[name="operator"]:checked')
    .value;

  switch (operator) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      console.log(operator);
      break;
    case "division":
      result = divide(numberA, numberB);
      break;
    default:
      result = "Invalid operator";
  }
  // --^-- write your code here --^--
console.log(operator);
  resultOutput.textContent = result;
});
