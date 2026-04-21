import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">
        <h2>Create Account 🚀</h2>
        <p>Join Edu Info Portal</p>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>

        <p className="switch-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

    </div>
  );
}

export default Register;