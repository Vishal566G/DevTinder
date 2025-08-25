const express = require("express");
const { userAuth } = require("../middlewares/auth");

const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, (req, res) => {
  const user = req.user;

  // user connection sent
  res.send(user.firstName + " sent the connection");
});

module.exports = requestRouter;
