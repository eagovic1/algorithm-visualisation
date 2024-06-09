import React from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <div className="login-form-container">
      <h1>Register</h1>
      <form className="login-form">
        <input placeholder="Email" type="text" id="email" name="email" />
        <input
          placeholder="Username"
          type="text"
          id="username"
          name="username"
        />
        <input
          placeholder="Password"
          type="password"
          id="password"
          name="password"
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/login" className="login">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterForm;
