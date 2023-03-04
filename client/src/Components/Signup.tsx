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
      const res = await fetch("http://localhost:3001/user/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      });
      const main = await res.json();
      console.log(main);
      if(main.msg==="signup successfull"){
        navigate("/game")
      }
    } catch (error) {
      console.log(error)
    }

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

         {/* <label htmlFor="email">Enter Email</label> */}
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter Email"
          onChange={handleInputChange}
        />

        {/* <label htmlFor="pass">Enter Password</label> */}
        <input
          type="password"
          id="pass"
          name="pass"
          required
          placeholder="Enter Password"
          onChange={handleInputChange}
        />

       

<center>
<button 
        className="btn-1"
        type="submit">SIGN UP</button>
</center>
        

      </form>
      
        <button
            onClick={() =>navigate("/login")}
            className="btn-1"
          >LOGIN</button>
    </div>
  );
};
export default Signup;
