const express = require("express");

//rest object
const app = express();
// const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//middleware
app.use(express.json());
app.use(morgan("dev"));
// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server running in - ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
  );
});
