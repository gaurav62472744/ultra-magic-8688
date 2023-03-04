import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Room = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/game")
        window.location.reload();
    }
  return (
    <div style={
        {
            backgroundImage:"url(https://media.tenor.com/eaCVrwyJZK8AAAAd/galaxy-space.gif)", 
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"cover",
            height:"100vh", 
            width:"100wh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
            }}>

        <div className="container" 
        style={
            {
                // border:"1px solid yellow",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                width:"90%",
                margin:"auto",
                color:"white"

            }
        }>
            <h1>Choose levels</h1>
            <button onClick={handleClick} className='btn-1'>Low</button>
            <button onClick={handleClick} className='btn-1'>Medium</button>
            <button onClick={handleClick} className='btn-1'>High</button>
        </div>
    </div>
  )
}

export default Room
