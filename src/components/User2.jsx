import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const User2 = ({ setUserData }) => {
  const [inp, setInp] = useState({
    email: "",
    name: "",
    username: "",
    age: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(inp);
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inp.email}
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          value={inp.name}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          value={inp.username}
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          value={inp.age}
          type="number"
          name="age"
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          value={inp.password}
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default User2;
