import React, { useEffect, useState } from 'react'
import "../App.css";
// import music from "../assets/home-music.mp3";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const [block, setBlock] = useState(false);
    // const [div, setDiv] = useState(false);
    const [next, setNext] = useState(false);
    const navigate=useNavigate();
    // const [block, setBlock] = useState(false);

    // const audio = new Audio(music);
    // audio.play()
    

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
                    <img src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677946720/leftarrow_zoyr5m.png" alt="img"/>
                    <p>Press left arrow key to move the spaceship to the left</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677946762/rightarrow_tracfb.png" alt="img"/>
                    <p>Press right arrow key to move the spaceship to the right</p>
                </div>
                <div> 
                    <img src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677946736/uparrow_aqa3xn.png" alt="img"/>
                    <p>Press up arrow key to move the spaceship upward</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677946752/downarrow_yv7ort.png" alt="img"/>
                    <p>Press down arrow key to move the spaceship downward</p>
                </div>
                <div>
                    <div style={{display:"flex"}}>
                    <img src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677947418/space_i2iv5v.png" height="50px" width="50%"/>
                    <p>Press spacebar to fire</p>
                    </div>
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