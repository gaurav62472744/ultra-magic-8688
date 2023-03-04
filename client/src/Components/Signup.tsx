import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

interface SignupFormData {
  name: string;
  num: Number;
  pass: string;
  email: string;
}
const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    num: 0,
    pass: "",
    email: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // Here you can handle the submission of the form data
    try {
      const res = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      });
      const main = await res.json();
      console.log(main);
    } catch (error) {}

    console.log(formData);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(https://res.cloudinary.com/djo88dwrg/image/upload/v1677874018/1624_zyobuq.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
      }}
      >

      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:"20px", width:"20%"}}>
        {/* <label htmlFor="name">Enter Name</label> */}
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter Name"
          onChange={handleInputChange}
        />

        {/* <label htmlFor="num" 
        >Enter Number</label> */}
        <input
          type="tel"
          id="num"
          name="num"
          required
          placeholder="Enter Number"
          onChange={handleInputChange}
        />

        {/* <label htmlFor="pass">Enter Password</label> */}
        <input
          type="pass"
          id="pass"
          name="pass"
          required
          placeholder="Enter Password"
          onChange={handleInputChange}
        />

        {/* <label htmlFor="email">Enter Email</label> */}
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter Email"
          onChange={handleInputChange}
        />
      </form>
      <button 
        style={{
          marginTop:"20px",
          width:"10%",
          height:"60px",
          borderRadius:"100px",
          border:"3px solid white",
          fontSize: "24px",
          fontWeight: "bolder",
          color: "white",
          cursor:"pointer",
          backgroundImage:"url(https://c-cl.cdn.smule.com/smule-gg-s-sf-bck1/arr/50/71/234c0eba-8b58-4b1e-b581-b378135f7b44.jpg)"
        }}
        type="submit">SIGN UP</button>
        <button
            onClick={() =>navigate("/login")}
            style={{
              marginTop:"40px",
              width:"20%",
              height:"60px",
              borderRadius:"10px",
              border:"3px solid white",
              fontSize:"18px",
              color:"white",
              cursor:"pointer",
              position:"absolute",
              top:"0",
              right:"10",
              backgroundImage:"url(https://images.unsplash.com/photo-1595831242832-1c2ba43956cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlZCUyMGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80)"
            }}
          >Click to login for existing users</button>
    </div>
  );
};
export default Signup;
