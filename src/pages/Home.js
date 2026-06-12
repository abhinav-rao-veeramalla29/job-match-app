import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px",
      }}
    >
      <h1>Welcome to Job Match</h1>

      <h2>Find Your Dream Job Today 🚀</h2>

      <p>
        Search thousands of jobs and apply with one click.
      </p>

      <br />

      <Link to="/jobs">
        <button
          style={{
            padding: "12px 25px",
            fontSize: "18px",
          }}
        >
          Browse Jobs
        </button>
      </Link>
    </div>
  );
}

export default Home;
