import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//navigation to move user to dashboard after login

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandlerLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:5093/api/User/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : null;

      if (!response.ok) {
        alert(data?.message || "Invalid email or password");
        return;
      }

      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("email", data.user.email);

      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong while logging in.");
    }
  };

  return (
    <div className="container">
      <h1>Login Page</h1>

      <form onSubmit={submitHandlerLogin} width="300px" style={{ maxWidth: "400px", margin: "0 auto" }} >
        <input
          type="email"
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <br />

        <input
          type="password"
          value={password}
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <br />

        <button 
        className = "btn btn-primary"
         type="submit">Login</button>
      </form>

      <p style={{ marginTop: "16px" }}>
        Do not have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;