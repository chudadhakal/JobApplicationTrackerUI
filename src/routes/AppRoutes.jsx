// Import routing tools
import { Routes, Route, Navigate } from "react-router-dom";

// Import each page component
import Login from "../pages/Login";

import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import NewApplication from "../pages/NewApplication";
import ViewApplication from "../pages/ViewApplication";


function AppRoutes() {
  const isAuthenticated = !!localStorage.getItem("userId");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />}
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />}
      />
    <Route path="/dashboard/add-application" element={isAuthenticated ? <NewApplication /> : <Navigate to="/login" replace />} />

    <Route path="/dashboard/view-application/:id" element={isAuthenticated ? <ViewApplication /> : <Navigate to="/login" replace />} />
    </Routes>

  );
}

export default AppRoutes;