import React, { useState } from "react";
import { fetchData } from "../../services/fetch";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Login clicked");
    fetchData("http://localhost:3000/api/user/login", "POST", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        alert("Login successful");
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/home");
      } else {
        alert("Invalid username or password");
      }
    });
  }

  return (
    <div className="login-form-container">
      <h1>Login</h1>
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
