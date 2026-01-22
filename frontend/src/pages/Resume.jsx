import { useEffect, useState } from "react";
import { fetchResume } from "../services/api";

const Resume = () => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetchResume()
      .then(res => setResume(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!resume) {
    return <p className="text-center">Resume not uploaded yet.</p>;
  }

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="mb-3">📄 Resume</h2>
        <p>Latest resume uploaded and ready for review.</p>

        <div className="d-flex gap-3 mt-3">
          <a
            href={`http://localhost:5000${resume.resume_url}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View Resume
          </a>

          <a
            href={`http://localhost:5000${resume.resume_url}`}
            download
            className="btn btn-outline-secondary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
