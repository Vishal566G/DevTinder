const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    // finding token
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Invalid Token");
    }

    // verifying token & finding user
    const decodedData = await jwt.verify(token, "DEV@TINDER$2025");
    const { _id } = decodedData;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

module.exports = {
  userAuth,
};
