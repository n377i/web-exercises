console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeBtn = document.querySelector('[data-js="dark-mode-button"]');
const lightModeBtn = document.querySelector('[data-js="light-mode-button"]');
const toggleBtn = document.querySelector('[data-js="toggle-button"]');

darkModeBtn.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightModeBtn.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
