const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

// Sign up API
app.post("/signup", async (req, res) => {
  // Creating a new instance of User model
  const user = new User(req.body);

  try {
    const REQUIRED_FIELDS = ["firstName", "lastName", "emailId", "password"];
    const isSignUpTrue = REQUIRED_FIELDS.every((field) =>
      Object.keys(req.body).includes(field)
    );

    if (!isSignUpTrue) {
      throw new Error("Required field is missing");
    }
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving user: " + err.message);
  }
});

// Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(400).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// Feed API - Get all users
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.status(400).send("Something went wrong");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// Delete API -Delete a user from database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully!!");
  } catch (err) {
    res.status(400).send("User not deleted");
  }
});

// Update API - Update a user
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  console.log(data);

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];

    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }

    if (data?.skills.length > 10) {
      throw new Error("Skills cannot be more than 10");
    }
    const user = await User.findOneAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Update failed:" + err.message);
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
