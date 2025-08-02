const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Creating a new instance of User model
  const user = new User({
    firstName: "Sunny",
    lastName: "shadow",
    emailId: "vishal@gmail.com",
    password: "vishal",
  });

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving user: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("DB connection established!!");
    app.listen("3000", () => {
      console.log("App is listening on port 3000");
    });
  })
  .catch((err) => {
    console.error("DB not connected!!", err);
  });
