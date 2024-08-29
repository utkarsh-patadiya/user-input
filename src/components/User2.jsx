import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const User2 = ({ setUserData }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    age: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!formData.email) errors.email = "Please enter your email.";
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.username) errors.username = "Username is necessary.";
    if (!formData.age || formData.age <= 0) errors.age = "Please enter a valid age.";
    if (!formData.password) errors.password = "Don't forget to set a password.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setUserData(formData);
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear the error when user starts typing
  };

  return (
    <div >
      <h1>Fill Out Your Details</h1>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="email" >Email:</label>
          <input
            id="email"
            value={formData.email}
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Your email address"
            
          />
          {errors.email && <p >{errors.email}</p>}
        </div>
        <div >
          <label htmlFor="name" >Name:</label>
          <input
            id="name"
            value={formData.name}
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Your full name"
            
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="username" >Username:</label>
          <input
            id="username"
            value={formData.username}
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Choose a username"
           
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            value={formData.age}
            type="number"
            name="age"
            onChange={handleChange}
            placeholder="Your age"
            
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div >
          <label htmlFor="password" >Password:</label>
          <input
            id="password"
            value={formData.password}
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Create a password"
           
          />
          {errors.password && <p >{errors.password}</p>}
        </div>
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default User2;