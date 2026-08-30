import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/jobs");

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const data = await response.json();

      setJobs(data.jobs);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="student-container">

      {/* Header */}
      <header className="header">
        <div>
          <h1>XCPSS</h1>
          <p>Placement Opportunities</p>
        </div>
      </header>


      {/* Main Content */}
      <main className="main">

        <div className="page-heading">
          <h2>Latest Opportunities</h2>
          <p>
            Explore placement opportunities available for you.
          </p>
        </div>


        {/* Loading */}
        {loading && (
          <div className="status">
            Loading opportunities...
          </div>
        )}


        {/* Error */}
        {error && (
          <div className="error">
            {error}
          </div>
        )}


        {/* No Jobs */}
        {!loading && !error && jobs.length === 0 && (
          <div className="empty">
            <h3>No opportunities available</h3>
            <p>
              New placement opportunities will appear here.
            </p>
          </div>
        )}


        {/* Jobs */}
        <div className="jobs-grid">

          {jobs.map((job) => (
            <div className="job-card" key={job._id}>

              <div className="job-header">

                <div>
                  <h3>{job.jobRole}</h3>
                  <p className="company">
                    {job.companyName}
                  </p>
                </div>

                <span className="job-type">
                  {job.jobType}
                </span>

              </div>


              <div className="job-info">

                <div>
                  <span>Package</span>
                  <strong>
                    {job.package || "Not specified"}
                  </strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>
                    {job.location || "Not specified"}
                  </strong>
                </div>

              </div>


              <div className="eligibility">

                <h4>Eligibility</h4>

                <p>
                  {job.eligibility}
                </p>

              </div>


              <div className="deadline">

                <span>Application Deadline</span>

                <strong>
                  {new Date(job.deadline).toLocaleDateString()}
                </strong>

              </div>


              <div className="job-description">

                <h4>Description</h4>

                <p>
                  {job.description}
                </p>

              </div>


              <button
                className="apply-button"
                onClick={() => {
                  if (job.applicationLink) {
                    window.open(
                      job.applicationLink,
                      "_blank"
                    );
                  } else {
                    alert(
                      "Application system will be available soon."
                    );
                  }
                }}
              >
                Apply Now
              </button>

            </div>
          ))}

        </div>

      </main>

    </div>
  );
}

export default App;