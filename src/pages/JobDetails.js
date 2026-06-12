import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/jobs")
      .then((res) => res.json())
      .then((data) => {
        const selectedJob = data.find((item) => item._id === id);
        setJob(selectedJob);
      });
  }, [id]);

  if (!job) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{job.title}</h1>

      <h2>{job.company}</h2>

      <h3>{job.location}</h3>

      <p>{job.description}</p>

      <Link to={`/apply?jobId=${job._id}`}>
        <button>Apply Now</button>
      </Link>
    </div>
  );
}

export default JobDetails;
