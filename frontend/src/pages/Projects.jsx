import { useEffect, useState } from "react";
import { fetchProjects } from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🚀 Projects</h2>

      <div className="row">
        {projects.map(project => (
          <div className="col-md-6 mb-4" key={project.id}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <p>
                  <strong>Tech:</strong> {project.tech_stack}
                </p>

                <a href={project.github_url} target="_blank" className="btn btn-sm btn-dark me-2">
                  GitHub
                </a>

                {project.live_url && (
                  <a href={project.live_url} target="_blank" className="btn btn-sm btn-success">
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
