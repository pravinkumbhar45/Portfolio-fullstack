import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h2 style={{ marginBottom: "24px" }}>Projects</h2>

      <ProjectCard
        title="Portfolio Full Stack App"
        description="Full stack portfolio with React, Node.js, MySQL."
        tech={["React", "Node.js", "Express", "MySQL"]}
        github="https://github.com/YOUR_GITHUB_USERNAME/portfolio-fullstack"
      />

      <ProjectCard
        title="Resume Upload System"
        description="Resume upload & fetch system using MySQL backend."
        tech={["Node.js", "Express", "Multer", "MySQL"]}
        github="https://github.com/YOUR_GITHUB_USERNAME/resume-upload"
      />
    </section>
  );
};

export default Projects;
