import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.end("Hello, Netti!");
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
