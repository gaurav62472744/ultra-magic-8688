import React from "react";
import { Route, Routes } from "react-router-dom";
import Canvas from "../Components/canvas";
import GameOver from "../Components/gameOver";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Canvas />} />
      <Route path="/gameover" element={<GameOver />} />
    </Routes>
  );
};

export default AllRoutes;
