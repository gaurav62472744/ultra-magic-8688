import React, { useState } from "react";

interface SignupFormData {
  name: string;
  num: Number;
  pass: string;
  email: string;
}
const Signup: React.FC = () => {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        onChange={handleInputChange}
      />

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

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        onChange={handleInputChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default Signup;
