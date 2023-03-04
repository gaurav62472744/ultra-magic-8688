const { UserModel } = require("../model/user.model");
const express = require("express");

const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Get all regustered users
userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find()
    res.send(users)
  } catch (err) {
    res.send({ "msg": "Something went wrong" })
  }
});

// registering the user //

userRouter.post("/register", async (req, res) => {
  const { num, pass, name, email } = req.body;

  const pre = await UserModel.find({ num: num });
  if (pre.length > 0) {
    return res.send({ Msg: "user already present" });
  }
  try {
    bcrypt.hash(pass, 10, async (err, hash) => {
      if (err) {
        console.log(err);
      }
      const user = new UserModel({ num, name, pass: hash, email, score: 0 });
      await user.save();
      // res.send("user registered successfully")

      const getUser = await UserModel.find({ num: num });

      if (getUser.length === 0) {
        return res.send({ msg: "user not found" });
      }

      bcrypt.compare(pass, getUser[0].pass, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: getUser[0]._id }, "masai");

          res.send({
            msg: "signup successfull",
            token: token,
            ID: getUser[0]._id,
          });
        } else {
          res.send({ err: "login failed" });
        }
      });
    });
  } catch (err) {
    res.send("otp sent successfully");
  }
});
// log in route //

userRouter.post("/login", async (req, res) => {
  const { num, pass } = req.body;

  try {
    let user = await UserModel.find({ num: num });

    if (user.length === 0) {
      return res.send({ msg: "user not found" });
    }

    bcrypt.compare(pass, user[0].pass, (err, result) => {
      if (result) {
        const token = jwt.sign({ userID: user[0]._id }, "masai");
        res.send({
          msg: "login successfull",
          token: token,
          ID: user[0]._id,
        });
      } else {
        res.send({ err: "login failed" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// for get all users whoese sort by score
userRouter.get("/alluser", async (req, res) => {
  try {
    const data = UserModel.find().sort({ score: -1 });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
// for updateing score
userRouter.patch("/update/:id", async (req, res) => {
  try {
    const data = await UserModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("score updated successfully");
  } catch (error) {
    console.log(error);
  }
});
module.exports = { userRouter };
