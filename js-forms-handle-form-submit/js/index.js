console.clear();

const form = document.querySelector('[data-js="form"]');
const firstName = document.querySelector("#first-name");
const age = document.querySelector("#age");
const badness = document.querySelector("#badness");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();
  event.target.firstName.focus();

  const ageBadnesSum = Number(data.age) + Number(data.badness);
  console.log(`The age-badness-sum of ${data.firstName} is ${ageBadnesSum}`);
});
