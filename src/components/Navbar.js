import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#222",
      }}
    >
      <h2 style={{ color: "white" }}>
        Job Match
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/jobs" style={{ color: "white" }}>
          Jobs
        </Link>

        <Link to="/addjob" style={{ color: "white" }}>
          Add Job
        </Link>

        <Link to="/admin" style={{ color: "white" }}>
          Admin
        </Link>

        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>

        <Link to="/register" style={{ color: "white" }}>
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
