import React, { useState } from "react";
import "../App.css"
import { useNavigate } from "react-router-dom";

interface SignupFormData {
  num: Number;
  pass: string;
}
const Login: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    num: 0,
    pass: "",
  });

  const navigate=useNavigate();

  const handleSignup=()=>{
    navigate("/signup") 
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can handle the submission of the form data
    try {
      const res = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      });
      const main = await res.json();
      localStorage.setItem("token", main.token)
      localStorage.setItem("ID", main.ID)

      
      if(main.msg==="login successfull"){
        navigate("/room")
      }
      console.log(main);
    } catch (error) {
      console.log(error)
    }

    // console.log(formData);
  };

  return (
    <div
    className="login-div"
    >
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:"20px", width:"20%"}}>
        <input
          type="tel"
          id="num"
          name="num"
          placeholder="Enter Number"
          required
          onChange={handleInputChange}
        />
        <input
          type="pass"
          id="pass"
          name="pass"
          placeholder="Enter Password"
          required
          onChange={handleInputChange}
        />
        <center>
        <button
          className="btn-1"
          type="submit">LOGIN</button>
        </center>
        
      </form>
        
        <button onClick={handleSignup}
          className="btn-1"
          >SIGN UP</button>
          
    </div>
  );
};
export default Login;
