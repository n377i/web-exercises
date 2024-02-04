import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  // Task 1
  //   const foundCountry = countries.find((country) =>
  //     country.name.startsWith(searchString)
  //   );

  //   if (foundCountry) {
  //     const countryElement = Country(foundCountry);
  //     container.append(countryElement);
  //   }

  //Task 2
  const foundCountries = countries.filter((country) =>
    country.name.startsWith(searchString)
  );

  foundCountries.forEach((foundCountry) => {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  });
});
