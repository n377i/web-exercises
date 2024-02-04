/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

2. On button click: The value of the first input field is copied in uppercase into the second input field

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

button.addEventListener("click", () => {
  secondInput.value = firstInput.value.toUpperCase();
});
