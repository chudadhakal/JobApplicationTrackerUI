import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewApplication() {
    const [position, setPosition] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [applicationDate, setApplicationDate] = useState("");
    const [status, setStatus] = useState("");
    const [notes, setNotes] = useState("");

const userId = localStorage.getItem("userId");

    const submitHandlerNewApplication = async (e) => {
        e.preventDefault();

        if (!position || !companyName || !applicationDate || !status) {
            alert("Please fill in all required fields");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5093/api/Applications/UpdateApplication?id=${applicationId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    JobTitle: position,
                    CompanyName: companyName,
                    ApplicationDate: applicationDate,
                    Status: status,
                    Notes: notes,
                    UserId: userId
                })
            });

            if (!response.ok) {
                throw new Error("Failed to update application");
            }

            const data = await response.json();
            console.log(data);
            alert("Application updated successfully!");

        } catch (error) {
            console.error("Error updating application:", error);
            alert("Something went wrong while updating the application.");
        }
    };

    const loadInitialData = async () => {
        try {
            const response = await fetch(`http://localhost:5093/api/Applications/GetApplicationById?Id=${applicationId}`, {  
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setPosition(data.position);
            setCompanyName(data.companyName);
            const formattedDate = new Date(data.applicationDate).toISOString().split('T')[0];
            setApplicationDate(formattedDate);
            setStatus(data.status);
            setNotes(data.notes);
        } catch (error) {
            console.error("Error loading application data:", error);
            alert("Something went wrong while loading the application data.");
        }
    };

    const applicationId = window.location.pathname.split("/").pop();

    useEffect(() => {
        loadInitialData();
    }, []);
    // loadInitialData();

    return (
        <div className="container" style={{ maxWidth: "600px", marginTop: "32px" }}>
            <div className="card shadow-sm border rounded-4">
                <div className="card-body p-4">

                    <h1 className="text-center mb-4">View Application</h1>

                    <form onSubmit={submitHandlerNewApplication}>

                        <input
                            className="form-control mb-3"
                            type="text"
                            placeholder="Position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                        />

                        <input
                            className="form-control mb-3"
                            type="text"
                            placeholder="Company Name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />

                        <input
                            className="form-control mb-3"
                            type="date"
                            value={applicationDate}
                            onChange={(e) => setApplicationDate(e.target.value)}
                        />

                        <select
                            className="form-control mb-3"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="">Select Status</option>
                            <option value="Applied">Applied</option>
                            <option value="Interviewing">Interviewing</option>
                            <option value="Offered">Offered</option>
                            <option value="Rejected">Rejected</option>
                        </select>

                        <textarea
                            placeholder="Notes"
                            className="form-control mb-3"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />

                        <button type="submit" className="btn btn-primary w-100" >
                            Update
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default ViewApplication;