const mongoose = require("mongoose");
const main = async () => {
  await mongoose.connect("mongodb://localhost/wtm");
  console.log("connected");
};
main();