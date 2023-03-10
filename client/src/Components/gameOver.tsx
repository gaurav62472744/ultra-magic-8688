import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../all.css";
import music from "../assets/home-music.mp3";

const GameOver = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/room");
  };

  // Send Score data to backend 
  let score=localStorage.getItem("score")
  const sendScore= async ()=>{
    let ID=localStorage.getItem("ID")
   
    try {
      const res = await fetch(`https://glorious-gray-haddock.cyclic.app/user/update/${ID}`, {
        method: "PATCH",
        body: JSON.stringify(score),
        headers: {
          "Content-type": "application/json",
        },
      });
      const main = await res.json();
      console.log(main);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    sendScore();
  },[])


  const audio = new Audio(music);
    audio.play();

  return (
    <div className="gameover">
      <img src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677927180/gameover_v3xp7j.png" alt="gameover"/>
      <h2>Your Score: {score}</h2>
      <button 
       className="btn-1"
        onClick={handleClick}>Play Again</button>
    </div>
  );
};

export default GameOver;
