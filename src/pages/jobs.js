import { useState } from "react";
import { Link } from "react-router-dom";
import jobs from "../data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-page">
      <h1>Available Jobs</h1>

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredJobs.map((job) => (
        <div className="job-card" key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>

          <Link to={`/job/${job.id}`}>
  <button>Apply Now</button>
</Link>
        </div>
      ))}
    </div>
  );
}

export default Jobs;