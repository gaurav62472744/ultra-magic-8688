import { useNavigate } from "react-router-dom";
import "../all.css";

const GameOver = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="gameover">
      <img src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677927180/gameover_v3xp7j.png" alt="gameover"/>
      <button 
      className="restart-btn"
          onClick={handleClick}>Play Again</button>
    </div>
  );
};

export default GameOver;
