import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Job Match</h2>

        <div>
          <a href="/">Home</a>
          <a href="/">Jobs</a>
          <a href="/">Login</a>
          <a href="/">Register</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Find Your Dream Job</h1>

        <p>
          Search thousands of jobs and match your skills with top companies.
        </p>

        <button>Get Started</button>
      </section>
    </div>
  );
}

export default App;