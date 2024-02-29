const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/social_network");
    console.log("Succesfully conected to database.");
  } catch (error) {
    console.log(error);
    throw new error("The conection is currently unavailable.");
  }
};

module.exports = {
  connection,
};
