const adminAuth = (req, res, next) => {
  console.log("Admin auth called");
  const token = "xyz";
  const isToken = token === "xyz";
  if (isToken) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = {
  adminAuth,
};
