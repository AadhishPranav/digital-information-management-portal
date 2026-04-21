import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("No user found. Please register first.");
    return;
  }

  if (
    user.email === email.trim().toLowerCase() &&
    user.password === password.trim()
  ) {
    localStorage.setItem("isLoggedIn", "true");

    // ✅ FIXED
    window.location.href = "/";

  } else {
    alert("Invalid credentials");
  }
};

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <p>Login to continue</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p className="switch-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;