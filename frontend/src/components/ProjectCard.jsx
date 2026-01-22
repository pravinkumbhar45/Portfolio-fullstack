const ProjectCard = ({ title, tech, description }) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <span className="badge bg-secondary">{tech}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
