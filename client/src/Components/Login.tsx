import React, { useState } from "react";
import "../App.css"

interface SignupFormData {
  num: Number;
  pass: string;
}
const Login: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    num: 0,
    pass: "",
  });

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
      const res = await fetch("http://localhost:8080/user/login", {
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
          type="submit">LOGIN</button>
          
    </div>
  );
};
export default Login;
