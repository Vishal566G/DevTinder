const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from dashboard! Hola");
});

app.get("/hello", (req, res) => {
  res.send("Hello hello hello!");
});

app.get("/home", (req, res) => {
  res.send("Hello from server home!");
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
