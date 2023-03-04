import React, { useEffect } from 'react'
import "../App.css";
import music from "../assets/home-music.mp3";

const Homepage = () => {
    const audio = new Audio(music);
    useEffect(() => {
        //audio.play();
    },[])
  return (
    
    <div className="home">
        <div className='home-container'>
            <div className='instructions'>
                <h1>HOW TO PLAY</h1>
                {/* <h2>1. PRESS UP, DOWN, LEFT, RIGHT ARROW KEYS TO CONTROL THE SPACESHIP</h2>
                <h2>2. PRESS SPACE TO FIRE</h2> */}
                <div>
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/keyboard_key_left.png" alt="img"/>
                    <p>PRESS LEFT ARROW KEY TO MOVE THE SPACESHIP TO THE LEFT</p>
                </div>
                <div>
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/keyboard_key_left.png" alt="img"/>
                    <p>PRESS LEFT ARROW KEY TO MOVE THE SPACESHIP TO THE LEFT</p>
                </div>
                <div> alt="img"
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
                <button>ENTER</button>
            </div>
            <div>
                3rd div
            </div>
        </div>
    </div>
  )
}

export default Homepage