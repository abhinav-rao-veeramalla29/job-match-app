import { useEffect, useState } from "react";

function Admin() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    loadJobs();
    loadApplications();
  }, []);

  const loadJobs = async () => {
    try {
      const res = await fetch("http://localhost:5001/jobs");
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadApplications = async () => {
    try {
      const res = await fetch("http://localhost:5001/applications");
      const data = await res.json();
      setApplications(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteJob = async (id) => {
    if (!window.confirm("Delete this job?")) return;

    await fetch(`http://localhost:5001/jobs/${id}`, {
      method: "DELETE",
    });

    loadJobs();
  };

  const deleteApplication = async (id) => {
    if (!window.confirm("Delete this application?")) return;

    await fetch(`http://localhost:5001/applications/${id}`, {
      method: "DELETE",
    });

    loadApplications();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Admin Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div className="card">
          <h2>{jobs.length}</h2>
          <p>Total Jobs</p>
        </div>

        <div className="card">
          <h2>{applications.length}</h2>
          <p>Total Applications</p>
        </div>
      </div>

      <hr />

      <h2>Jobs</h2>

      {jobs.map((job) => (
        <div className="card" key={job._id}>
          <h3>{job.title}</h3>

          <p><strong>Company:</strong> {job.company}</p>

          <p><strong>Location:</strong> {job.location}</p>

          <p>{job.description}</p>

          <button onClick={() => deleteJob(job._id)}>
            🗑 Delete Job
          </button>
        </div>
      ))}

      <hr />

      <h2>Applications</h2>

      {applications.map((app) => (
        <div className="card" key={app._id}>
          <h3>{app.name}</h3>

          <p><strong>Email:</strong> {app.email}</p>

          <p><strong>Job ID:</strong> {app.jobId}</p>

          <button onClick={() => deleteApplication(app._id)}>
            🗑 Delete Application
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
