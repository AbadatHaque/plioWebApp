import { useState } from "react";
import { Modal } from "antd";
import { motion } from "framer-motion";
import {
  Html5Outlined,
  CodeOutlined,
  DatabaseOutlined,
  ApiOutlined,
  GithubOutlined,
  GitlabOutlined,
  BranchesOutlined,
  BugOutlined,
  CloudOutlined,
  KeyOutlined,
  CloudDownloadOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const skills = [
  { name: "HTML & CSS", icon: <Html5Outlined />, color: "#e44d26", description: "Experienced in building responsive layouts with HTML5 and advanced CSS3 techniques." },
  { name: "JavaScript", icon: <CodeOutlined />, color: "#f0c030", description: "Proficient in ES6+ features, async programming, closures, and DOM manipulation." },
  { name: "React.js", icon: <CodeOutlined />, color: "#61dafb", description: "Skilled in building SPAs with React hooks, context, and performance optimisation." },
  { name: "Redux Toolkit", icon: <DatabaseOutlined />, color: "#764abc", description: "Experience managing complex global state efficiently using Redux Toolkit and RTK Query." },
  { name: "Next.js", icon: <ApiOutlined />, color: "#000", description: "Expertise in SSR, SSG, ISR, and API routes with Next.js 13/14 App Router." },
  { name: "TypeScript", icon: <CodeOutlined />, color: "#3178c6", description: "Strong knowledge of static typing, generics, and improving DX with TypeScript." },
  { name: "SSO", icon: <KeyOutlined />, color: "#5c6bc0", description: "Experience integrating Single Sign-On (SSO) for seamless, secure authentication." },
  { name: "PWA", icon: <CloudDownloadOutlined />, color: "#ff4081", description: "Skilled in building Progressive Web Apps for offline-first, fast-loading experiences." },
  { name: "REST API", icon: <AppstoreAddOutlined />, color: "#2196f3", description: "Experienced in building and consuming RESTful APIs and OpenAPI integrations." },
  { name: "Git", icon: <BranchesOutlined />, color: "#f34f29", description: "Version control and collaboration using Git – branching, merging, rebasing." },
  { name: "GitHub", icon: <GithubOutlined />, color: "#333", description: "Managing repositories, pull requests, code reviews, and CI/CD workflows." },
  { name: "Bitbucket", icon: <GitlabOutlined />, color: "#205081", description: "Experience in working with Bitbucket repositories and pipelines." },
  { name: "Jira", icon: <BugOutlined />, color: "#0052cc", description: "Project management and issue tracking with Jira in agile sprint environments." },
  { name: "jQuery", icon: <CloudOutlined />, color: "#0769ad", description: "Experience in using jQuery for DOM manipulation and legacy codebase maintenance." },
  { name: "Ant Design", icon: <CodeOutlined />, color: "#1890ff", description: "UI framework expertise for building sleek, accessible enterprise interfaces." },
  { name: "NX", icon: <CodeOutlined />, color: "#143055", description: "Experienced in managing monorepos with NX for scalable project architecture." },
  { name: "Vitest", icon: <CodeOutlined />, color: "#6e9fef", description: "Familiar with fast and efficient unit testing using Vitest in modern frontend projects." },
];

const SkillPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            style={{ borderTop: `3px solid ${skill.color}` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            onClick={() => setSelected(skill)}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
            <div className="skill-tooltip">{skill.description}</div>
          </motion.div>
        ))}
      </div>

      <Modal
        open={!!selected}
        onCancel={() => setSelected(null)}
        footer={null}
        title={
          <span style={{ fontFamily: "var(--font-serif)", color: "var(--navy)", fontSize: "1.2rem" }}>
            {selected?.name}
          </span>
        }
        width={460}
      >
        {selected && (
          <div>
            <div style={{ fontSize: "3rem", color: selected.color, marginBottom: "1rem", textAlign: "center" }}>
              {selected.icon}
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--charcoal)", lineHeight: 1.75, textAlign: "center" }}>
              {selected.description}
            </p>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

export default SkillPage;
