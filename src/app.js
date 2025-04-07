const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Vishal", lastName: "Gaud" });
});
app.post("/user", (req, res) => {
  // Data saved to db
  res.send("Data saved to db");
});

app.put("/user", (req, res) => {
  res.send("Data Updated to db, PUT call");
});

app.patch("/user", (req, res) => {
  res.send("Data updated to db, PATCH call");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted from db");
});

app.use("/test", (req, res) => {
  res.send("Hello from dashboard! Test");
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
