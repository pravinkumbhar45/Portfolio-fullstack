import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, tech, github }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      style={styles.card}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      <div style={styles.tags}>
        {tech.map((t, i) => (
          <span key={i} style={styles.tag}>
            {t}
          </span>
        ))}
      </div>

      <a href={github} target="_blank" rel="noreferrer" style={styles.btn}>
        <FaGithub /> GitHub Repo
      </a>
    </motion.div>
  );
};

const styles = {
  card: {
    background: "#fff",
    padding: "24px",
    borderRadius: "14px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    marginBottom: "24px",
  },
  tags: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    margin: "12px 0",
  },
  tag: {
    background: "#eef2ff",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    marginTop: "10px",
    textDecoration: "none",
    color: "#4f46e5",
    fontWeight: 500,
  },
};

export default ProjectCard;
