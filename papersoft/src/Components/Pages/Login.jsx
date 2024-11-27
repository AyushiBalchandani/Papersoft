import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/LoginStyles.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onFormSubmit = async (ev) => {
    ev.preventDefault();

    if (formData.name && formData.email && formData.password) {
      try {
        const response = await fetch("http://localhost:4002/api/login", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);

        setFormData({
          name: "",
          email: "",
          password: "",
        });

        // Redirect back to Login page after successful registration
        navigate("/Login", { replace: true });
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onFormSubmit} className="login-form">
        <div>
          <h1>Login</h1>
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <input type="submit" value="Login" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default Login;
