/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

button.addEventListener("click", () => {
  const buffer = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = buffer;
});
