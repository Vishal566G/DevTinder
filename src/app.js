const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  console.log(req.query)
  res.send({ firstName: "Vishal", lastName: "Gaud" });
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
