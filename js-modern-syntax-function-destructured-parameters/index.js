console.clear();

// Exercise 1
const myCountry = {
  id: 1,
  name: "Italy",
  population: "60.000.000",
  weather: "sunny",
};

function logCountry1(country) {
  console.log(`My country is called ${country.name}`);
  console.log(`It has ${country.population} people`);
  console.log(`The weather is usually ${country.weather}`);
}

function logCountry2(country) {
  const { name, population, weather } = country;
  console.log(`My country is called ${name}`);
  console.log(`It has ${population} people`);
  console.log(`The weather is usually ${weather}`);
}

function logCountry3({ name, population, weather }) {
  console.log(`My country is called ${name}`);
  console.log(`It has ${population} people`);
  console.log(`The weather is usually ${weather}`);
}

logCountry1(myCountry);
logCountry2(myCountry);
logCountry3(myCountry);

// Exercise 2
const myAlbum = {
  id: 1,
  artist: "Jimi Hendrix",
  title: "Are You Experienced",
  year: 1967,
};

function logAlbum1(album) {
  console.log(
    `${album.title} by ${album.artist} was recorded in ${album.year}`
  );
}

function logAlbum2(album) {
  const { title, artist, year } = album;
  console.log(`${title} by ${artist} was recorded in ${year}`);
}

function logAlbum3({ title, artist, year }) {
  console.log(`${title} by ${artist} was recorded in ${year}`);
}

logAlbum1(myAlbum);
logAlbum2(myAlbum);
logAlbum3(myAlbum);
