import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    login(username, password).then((success) => {
      if (success) {
        navigate("/home");
      } else {
        setError("Invalid username or password");
      }
    });
  }

  return (
    <div className="login-form-container">
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="/register" className="register">
          Register
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
