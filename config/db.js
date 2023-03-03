const mongoose = require("mongoose");
const colors = require("colors");

mongoose.set("strictQuery", false);

exports.connectDB = async () => {
  const DB = process.env.MONGO_URL;
  await mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Database Connection Successully....!`);
    })
    .catch((err) => {
      console.log(`No Connection..! ${err}`);
    });
};

// module.export = connectDB;
