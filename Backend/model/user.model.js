const { mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  num: { type: Number, required: true, unique: true },
  pass: String,
  name: String,
  email: { type: String, required: true, unique: true },
  score: Number,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
