import React from "react";
import { Route, Routes } from "react-router-dom";
import Canvas from "../Components/canvas";
import GameOver from "../Components/gameOver";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import LeaderBoard from "../Components/LeaderBoard";
import Chat from "../Components/chat";
import Homepage from "../Components/Homepage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Canvas />} />
      <Route path="/gameover" element={<GameOver />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
};

export default AllRoutes;
