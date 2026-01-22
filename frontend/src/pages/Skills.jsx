import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
];

const Skills = () => {
  return (
    <section style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "24px" }}>Skills</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "20px",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                color: skill.color,
                marginBottom: "8px",
              }}
            >
              {skill.icon}
            </div>

            <p style={{ fontSize: "14px", fontWeight: "500" }}>
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
