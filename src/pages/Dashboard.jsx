// Import Link so user can move back to login
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard.</p>

      <p>
        <Link to="/login">Back to Login</Link>
      </p>
    </div>
  );
}

export default Dashboard;