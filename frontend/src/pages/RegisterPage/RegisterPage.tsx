import React, { useState } from "react";
import { fetchData } from "../../services/fetch";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Register clicked");
    fetchData("http://localhost:3000/api/user/register", "POST", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
      navigate("/login");
    });
  }

  return (
    <div className="login-form-container">
      <h1>Register</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
}

export default RegisterPage