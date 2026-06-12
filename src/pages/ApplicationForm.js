import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function ApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");

  const submitApplication = async (e) => {
    e.preventDefault();

    if (!jobId) {
      alert("No job selected.");
      return;
    }

    const response = await fetch("http://localhost:5001/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobId,
      }),
    });

    const data = await response.json();

    alert(data.message);

    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Application</h1>

      <form onSubmit={submitApplication}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;
