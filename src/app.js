const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res) => {
    console.log("Hello1");
    // res.send("hello1");
  },
  (req, res) => {
    res.send("Hello2");
  }
);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
