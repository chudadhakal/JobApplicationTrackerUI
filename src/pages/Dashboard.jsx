// Import Link so user can move back to login
import { Link } from "react-router-dom";
import { useState } from "react";
// navigation to move user to dashboard after login
import { useNavigate } from "react-router-dom";
function Dashboard() {
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
      <div className="container bg-info p-2 mb-3">
        <h1>Dashboard</h1>
      </div>

      <div className="container">
        <div className="d-flex justify-content-end align-items-center mb-4">
          <Link to="/dashboard/add-application" className="btn btn-primary">Add New Application</Link>
        </div>

        <table className="table table-hover">
          <thead>
            <tr>
            <th>Position</th>
            <th>Company</th>
            <th>Status</th>
            <th>Application Date</th>
            <th>Notes</th>
            </tr>
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