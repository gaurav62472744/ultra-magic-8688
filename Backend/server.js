// const express = require("express");
// const app = express();
// const cors = require("cors");
// const { connection } = require("./config/db");
// const { userRouter } = require("./routes/user.routes");
// const http = require("http");
// const { Server } = require("socket.io");
// require("dotenv").config(); app.use(express.json());
//
// app.use(cors());

// // app.use(authenticate);
// app.use("/user", userRouter);

// // SOCKET IO
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//   });

//   socket.on("send_message", (data) => {
//     console.log(data);
//     socket.to(data.room).emit("receive_message", data);
//   });
// });

// app.listen(process.env.PORT, async () => {
//   try {
//     await connection;
//     console.log("Connected to db");
//   } catch (error) {
//     console.log({ msg: error.message });
//   }
// });

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(3001, async () => {
  try {
    console.log("SERVER IS RUNNING");
    await connection;
  } catch (error) {}
});
