import { createServer } from "http";
import Chance from "chance";

export const server = createServer((request, response) => {
  const chance = new Chance();
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();
  const responseString = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  if (request.url === "/") {
    response.end(responseString);
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
