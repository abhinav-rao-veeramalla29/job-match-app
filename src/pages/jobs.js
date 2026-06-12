import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Jobs</h1>

      <br />

      <input
        type="text"
        placeholder="Search Jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      {jobs
        .filter((job) =>
          job.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((job) => (
          <div className="card" key={job._id}>
            <h2>{job.title}</h2>

            <h3>{job.company}</h3>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>{job.description}</p>

            <Link to={`/job/${job._id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Jobs;
