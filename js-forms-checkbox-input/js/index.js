console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccessMessage() {
  success.setAttribute("hidden", "");
}

function showSuccessMessage() {
  success.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    showTosError();
    hideSuccessMessage();
    return;
  }

  hideTosError();
  showSuccessMessage();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  // alert("Form submitted");
});

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
    hideSuccessMessage();
  } else {
    showTosError();
    hideSuccessMessage();
  }
});

hideTosError();
hideSuccessMessage();
