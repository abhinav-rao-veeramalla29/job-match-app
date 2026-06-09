function FeaturedJobs() {
    return (
      <section className="featured">
        <h2>Featured Jobs</h2>
  
        <div className="job-card">
          <h3>Software Engineer</h3>
          <p>Google - Mountain View</p>
          <button>Apply</button>
        </div>
  
        <div className="job-card">
          <h3>Frontend Developer</h3>
          <p>Microsoft - Seattle</p>
          <button>Apply</button>
        </div>
  
        <div className="job-card">
          <h3>Backend Developer</h3>
          <p>Amazon - New York</p>
          <button>Apply</button>
        </div>
      </section>
    );
  }
  
  export default FeaturedJobs;