import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandlerRegister = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5093/api/User/CreateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        })
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : null;

      if (!response.ok) {
        alert(data?.message || "Registration failed");
        return;
      }

      alert("Account created successfully");
      navigate("/login");
    } catch (error) {
      console.error("Register error:", error);
      alert("Something went wrong while registering.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="mx-auto w-50 border p-3">
      <h1>Register Page</h1>

      <form onSubmit={submitHandlerRegister}>
        <input
        className="form-control"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          className="form-control"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />

        <input
          className="form-control"  
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button className="btn btn-primary" type="submit">Register</button>
      </form>

      <p style={{ marginTop: "16px" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p></div>
    </div>
  );
}

export default Register;