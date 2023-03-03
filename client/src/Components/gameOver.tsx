import React from "react";
import { useNavigate } from "react-router-dom";
const GameOver = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Game Over</h1>
      <button onClick={handleClick}>Play Again</button>
    </div>
  );
};

export default GameOver;
