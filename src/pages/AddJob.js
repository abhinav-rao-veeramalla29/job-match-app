import { useState } from "react";

function AddJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const submitJob = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5001/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        company,
        location,
        description,
      }),
    });

    const data = await response.json();

    alert(data.message);

    setTitle("");
    setCompany("");
    setLocation("");
    setDescription("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Job</h1>

      <form onSubmit={submitJob}>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Add Job
        </button>
      </form>
    </div>
  );
}

export default AddJob;
