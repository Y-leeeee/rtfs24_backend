const express = require("express");

const app = express(),
  port = process.env.PORT || 3000;

app.get("/", (_request, response) => {
  response.send({ hello: "World" });
});

app.get("/hej", (_request, response) => {
  response.send("Olivia Louis cutest");
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
