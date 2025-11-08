const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://NamasteDev:CNhwgQRzx50L3qb6@namastenodejs.u6arjo9.mongodb.net/devTinder"
  );
};

module.exports = connectDB;

const password = "DevTinder";
