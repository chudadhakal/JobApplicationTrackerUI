// Import React so JSX can work correctly
import React from "react";

// Import the ReactDOM package so React can render into the browser
import ReactDOM from "react-dom/client";

// Import BrowserRouter so the app can use route-based navigation
import { BrowserRouter } from "react-router-dom";

// Import the main App component
import App from "./App";

// Import global CSS styles
import "./index.css";

// Find the <div id="root"></div> in index.html
// and render the React app inside it
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode helps catch common problems during development
  <React.StrictMode>
    {/* BrowserRouter makes routing work in the whole app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);