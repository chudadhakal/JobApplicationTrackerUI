
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../api/authApi";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        alert("Registering user: " + name + ", " + email + ", " + password);
    };


  return (
    <div  className="registerForm">

        <h1>Register Page</h1>
        <p>This is the register page.</p>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/> <br/>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required/> <br/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/> <br/>
        <button type="submit" onClick={submitHandler}>Register</button>
    </div>
  );
}

export default Register;