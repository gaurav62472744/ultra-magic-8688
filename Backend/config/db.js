const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.mongodbURL);

module.exports = connection;
