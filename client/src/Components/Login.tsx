import React, { useState } from "react";
import io, { Socket } from "socket.io-client";


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
    <form onSubmit={handleSubmit}>
      <label htmlFor="num">num</label>
      <input
        type="tel"
        id="num"
        name="num"
        required
        onChange={handleInputChange}
      />

      <label htmlFor="pass">pass</label>
      <input
        type="pass"
        id="pass"
        name="pass"
        required
        onChange={handleInputChange}
      />

      <button type="submit">Login Up</button>
    </form>
  );
};
export default Login;
