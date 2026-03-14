import { useState } from "react";
import { Modal } from "antd";
import { motion } from "framer-motion";
import { FullscreenOutlined, LinkOutlined } from "@ant-design/icons";

const projects = [
  {
    name: "Money Trackify",
    image: "https://money-trackify.netlify.app/icon.png",
    url: "https://money-trackify.netlify.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "PWA", "Node.js", "Mongoose"],
    challenges:
      "Implementing responsive financial charts, ensuring seamless PWA offline-first experience, and managing real-time data for savings goals and expense tracking.",
  },
  {
    name: "React Portfolio",
    image: "/images/portfolio.png",
    url: "https://neon-lebkuchen-9e77bf.netlify.app/",
    technologies: ["React", "Ant Design", "Framer Motion"],
    challenges:
      "Ensuring smooth animations and optimising performance while maintaining accessibility across all devices.",
  },
  {
    name: "Simon Game",
    image: "/game.png",
    url: "https://neon-lebkuchen-9e77bf.netlify.app/",
    technologies: ["ES6", "CSS3", "HTML5"],
    challenges:
      "Implementing game logic with strict timing requirements and audio feedback using vanilla JavaScript.",
  },
  {
    name: "Calculator App",
    image: "/images/cal.png",
    url: "https://chipper-caramel-66d098.netlify.app/",
    technologies: ["JavaScript", "CSS3", "HTML5"],
    challenges:
      "Handling input validation, parsing complex mathematical expressions, and responsive UI without any framework.",
  },
  {
    name: "Folder Structure System",
    image: "/images/folder.png",
    url: "https://fileexplorerapp.netlify.app/",
    technologies: ["React.js", "Ant Design", "CSS3"],
    challenges:
      "Managing complex nested folder structures and optimising state updates for large datasets with React hooks.",
  },
  {
    name: "Ecommerce Shop",
    image: "/images/ecommerce.png",
    url: "https://ecomme-shop.netlify.app/",
    technologies: ["React.js", "TypeScript", "Context API", "Tailwind CSS"],
    challenges:
      "Seamless cart & checkout flows, lazy-loaded image-heavy pages, and secure payment integration with fast load times.",
  },

];

const ProjectsPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            {/* Expand button */}
            <button
              className="project-expand-btn"
              onClick={() => setSelected(project)}
              aria-label={`View details for ${project.name}`}
            >
              <FullscreenOutlined />
            </button>

            {/* Project image */}
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
            </a>

            <div className="project-card-body">
              <h3>{project.name}</h3>
              <p>Click the expand icon for full details.</p>
              <div>
                {project.technologies.map((t, j) => (
                  <span key={j} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Detail Modal ─────────────────────────── */}
      <Modal
        open={!!selected}
        onCancel={() => setSelected(null)}
        footer={null}
        width={680}
        title={
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--navy)" }}>
            {selected?.name}
          </span>
        }
      >
        {selected && (
          <div>
            <img
              src={selected.image}
              alt={selected.name}
              style={{ width: "100%", borderRadius: "var(--radius-md)", marginBottom: "1.2rem", maxHeight: 260, objectFit: "cover" }}
            />

            <p style={{ marginBottom: "0.75rem" }}>
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--gold)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}
              >
                <LinkOutlined /> Visit Live Project
              </a>
            </p>

            <h4 style={{ fontFamily: "var(--font-serif)", color: "var(--navy)", marginBottom: "0.4rem" }}>Technologies Used</h4>
            <div style={{ marginBottom: "1rem" }}>
              {selected.technologies.map((t, j) => (
                <span key={j} className="tag-pill">{t}</span>
              ))}
            </div>

            <h4 style={{ fontFamily: "var(--font-serif)", color: "var(--navy)", marginBottom: "0.4rem" }}>Challenges Faced</h4>
            <p style={{ fontSize: "0.92rem", color: "var(--charcoal)", lineHeight: 1.7 }}>
              {selected.challenges}
            </p>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

export default ProjectsPage;
