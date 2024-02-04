console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  console.log(`Height of fifth person: ${data.results[4].height} cm`);

  data.results.forEach((person) => {
    console.log(`${person.name} weighs ${person.mass} kg.`);
  });

  console.log(
    `The eye color of R2-D2 is ${
      data.results.find((person) => person.name === "R2-D2").eye_color
    }.`
  );
}

fetchData();
