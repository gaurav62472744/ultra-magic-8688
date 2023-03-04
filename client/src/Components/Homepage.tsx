import React, { useEffect, useState } from 'react'
import "../App.css";
import music from "../assets/home-music.mp3";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const [block, setBlock] = useState(false);
    // const [div, setDiv] = useState(false);
    const [next, setNext] = useState(false);
    const navigate=useNavigate();
    // const [block, setBlock] = useState(false);
    const audio = new Audio(music);
    audio.play();
 

const handleEnter=()=>{
    setBlock(true);
    setNext(true)
}
const handleNext=()=>{
    navigate("/login")
}
    
  return (
    
    <div className="home">
        <div className='home-container'>
            <div className="instructions" style={{display: (block? "block" : "none" )}}>
                <h1>HOW TO PLAY</h1>
                {/* <h2>1. PRESS UP, DOWN, LEFT, RIGHT ARROW KEYS TO CONTROL THE SPACESHIP</h2>
                <h2>2. PRESS SPACE TO FIRE</h2> */}
                <div>
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/keyboard_key_left.png" alt="img"/>
                    <p>Press eft arrow key to move the spaceship to the left</p>
                </div>
                <div>
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/keyboard_key_left.png" alt="img"/>
                    <p>PRESS LEFT ARROW KEY TO MOVE THE SPACESHIP TO THE LEFT</p>
                </div>
                <div> 
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/keyboard_key_left.png" alt="img"/>
                    <p>PRESS LEFT ARROW KEY TO MOVE THE SPACESHIP TO THE LEFT</p>
                </div>
                <div>
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/keyboard_key_left.png" alt="img"/>
                    <p>PRESS LEFT ARROW KEY TO MOVE THE SPACESHIP TO THE LEFT</p>
                </div>
                <div>
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/keyboard_key_left.png"/>
                    <p>PRESS LEFT ARROW KEY TO MOVE THE SPACESHIP TO THE LEFT</p>
                </div>
                
            </div>
            <div className='logo'>
                <img src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677915063/Screenshot_2023-03-04_at_12.58.01_PM-removebg-preview_jnptsr.png" alt="img"/>
                <center>
                {
                    next ? <button className='btn-1' onClick={handleNext}>ENTER</button> : <button className='btn-1' onClick={handleEnter}>NEXT</button>   
                }
                </center>
            </div>
        </div>
    </div>
  )
}

export default Homepage