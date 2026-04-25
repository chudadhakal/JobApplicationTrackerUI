// Import routing tools
import { Routes, Route, Navigate } from "react-router-dom";

// Import each page component
import Login from "../pages/Login";

import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <Routes>
      {/* If user goes to "/", send them automatically to "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Show Login page when URL is /login */}
      <Route path="/login" element={<Login />} />

      {/* Show Register page when URL is /register */}
      <Route path="/register" element={<Register />} />

      {/* Show Dashboard page when URL is /dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;