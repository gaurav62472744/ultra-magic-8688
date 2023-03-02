const express = require("express");
require("dotenv").config();
const connection = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connection Established");
  } catch (error) {
    console.log(error);
  }
  console.log(`Your server is started at http://localhost:${process.env.port}`);
});
