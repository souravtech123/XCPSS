import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    companyName: "",
    jobRole: "",
    package: "",
    eligibility: "",
    description: "",
    location: "",
    jobType: "On-Campus",
    applicationLink: "",
    deadline: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://xcpss-1.onrender.com/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create job");
      }

      setMessage("Job published successfully ✅");

      setFormData({
        companyName: "",
        jobRole: "",
        package: "",
        eligibility: "",
        description: "",
        location: "",
        jobType: "On-Campus",
        applicationLink: "",
        deadline: "",
      });
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <div className="card">

        <h1 className="heading">
          Post a Placement
        </h1>

        <p className="subtitle">
          Create a new job opportunity for students.
        </p>

        {message && (
          <div className="message">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. TCS"
            required
          />

          <label>Job Role</label>
          <input
            type="text"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            placeholder="e.g. Software Engineer"
            required
          />

          <label>Package</label>
          <input
            type="text"
            name="package"
            value={formData.package}
            onChange={handleChange}
            placeholder="e.g. ₹7 LPA"
          />

          <label>Eligibility</label>
          <input
            type="text"
            name="eligibility"
            value={formData.eligibility}
            onChange={handleChange}
            placeholder="e.g. BCA / B.Sc CS, CGPA 6+"
            required
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Ranchi"
          />

          <label>Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="On-Campus">On-Campus</option>
            <option value="Off-Campus">Off-Campus</option>
          </select>

          {formData.jobType === "Off-Campus" && (
            <>
              <label>Application Link</label>

              <input
                type="url"
                name="applicationLink"
                value={formData.applicationLink}
                onChange={handleChange}
                placeholder="https://..."
              />
            </>
          )}

          <label>Application Deadline</label>

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
          />

          <label>Job Description</label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter job description, responsibilities, requirements..."
            rows="6"
            required
          />

          <button type="submit">
            Publish Job
          </button>

        </form>
      </div>
    </div>
  );
}

export default App;