import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h3>Pravin Kumbhar</h3>
        <p>Full Stack Developer</p>
      </div>

      <nav style={styles.nav}>
        {["/", "/about", "/skills", "/projects", "/resume", "/contact"].map(
          (path, index) => {
            const names = [
              "Home",
              "About",
              "Skills",
              "Projects",
              "Resume",
              "Contact",
            ];
            return (
              <NavLink
                key={path}
                to={path}
                style={({ isActive }) => ({
                  ...styles.link,
                  color: isActive ? "#4f46e5" : "#e5e7eb",
                })}
              >
                {names[index]}
              </NavLink>
            );
          }
        )}
      </nav>

      <a
        href="https://github.com/pravinkumbhar45"
        target="_blank"
        rel="noreferrer"
        style={styles.github}
      >
        <FaGithub /> GitHub
      </a>
    </header>
  );
};

const styles = {
  header: {
    height: "64px",
    background: "#111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
  },
  logo: {
    color: "#fff",
    fontSize: "14px",
  },
  nav: {
    display: "flex",
    gap: "24px",
  },
  link: {
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 500,
  },
  github: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    textDecoration: "none",
    color: "#fff",
    border: "1px solid #374151",
    padding: "6px 12px",
    borderRadius: "8px",
  },
};

export default Header;
