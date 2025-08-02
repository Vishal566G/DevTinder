const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://NamasteDev:Zrygrfg7fNkNNrPQ@namastenodejs.u6arjo9.mongodb.net/devTinder"
  );
};

module.exports = connectDB;



const password = "Zrygrfg7fNkNNrPQ";
