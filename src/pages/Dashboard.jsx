// Import Link so user can move back to login
import { Link } from "react-router-dom";
import { useState } from "react";
function Dashboard() {
  const logOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    window.location.href = "/login";
  }

  const [applications, setApplications] = useState([]);

  // Show logged in user's data by userid
  const userID = localStorage.getItem("userId");

  const fetchApplications = async () => {
    const response = await fetch(`http://localhost:5093/api/Applications/GetApplications?Userid=${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      alert(data?.message || "Invalid email or password");
      return;
    }

    
    setApplications(data);
  }
  fetchApplications();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard.</p>
      <button onClick={logOut}>Log Out</button>
      <div>
        <table>
          <thead>
            <th>Position</th>
            <th>Company</th>
            <th>Status</th>
            <th>Application Date</th>
            <th>Notes</th>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.position}</td>
                <td>{app.companyName}</td>
                <td>{app.status}</td>
                <td>{app.applicationDate}</td>
                <td>{app.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;