import { Link } from "react-router-dom";

function JobDetails() {
  return (
    <div className="job-details">
      <h1>Software Engineer</h1>

      <p>Company: Google</p>

      <p>Location: Mountain View</p>

      <p>
        We are looking for a passionate Software Engineer to build modern web
        applications.
      </p>

      <Link to="/apply">
        <button>Apply Now</button>
      </Link>
    </div>
  );
}

export default JobDetails;