import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <h1>Login</h1>
      <form className="login-form">
        <input placeholder="Username" type="text" id="username" name="username" />
        <input placeholder="Password" type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register" className="register">Register</a></p>
    </div>
  );
};

export default LoginForm;
