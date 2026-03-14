import { useState } from "react";
import { Modal, Button } from "antd";
import { motion } from "framer-motion";
import { FullscreenOutlined } from "@ant-design/icons";
import profileImage from "../../public/static/profile.jpg";

const journeyData = [
  {
    title: "Frontend Developer",
    company: "Sembark Travel Software",
    location: "Jaipur",
    time: "2025 – Present",
    color: "#b89a5e",
    smallDesc:
      "Building a modern SaaS platform using React.js, TypeScript, NX, and Tailwind CSS.",
    fullDesc:
      "As a Frontend Developer at Sembark Travel Software, I work on developing a scalable SaaS platform using React.js, TypeScript, Tailwind CSS, NX for monorepo management, and Vitest for testing. I focus on creating responsive, maintainable UI components while collaborating closely with backend developers and new onboarded team members. I actively participate in sprint planning, API integration, code reviews, and help guide teammates by sharing best practices.",
  },
  {
    title: "Frontend Developer",
    company: "Connectcosmic Networks Pvt Ltd",
    location: "New Delhi",
    time: "2024 – 2025",
    color: "#1a2744",
    smallDesc:
      "Front-end developer at a growing SaaS startup, building with React JS and Ant Design.",
    fullDesc:
      "As a Front-end Developer at Connectcosmic Networks Pvt Ltd, a rapidly growing SaaS startup, I play a critical role in building and enhancing the user interface of our platform. Working closely with the company owner and other key stakeholders, I actively participate in defining the product's features, design decisions, and user experience improvements.",
  },
  {
    title: "UX Developer",
    company: "Mass Software Solutions",
    location: "Kolkata",
    time: "2021 – 2024",
    color: "#2e7d32",
    smallDesc:
      "UX Developer working with React JS, TypeScript, Redux Toolkit, and global teams.",
    fullDesc:
      "During my 2.9 years at Mass Software Solutions, I specialised as a UX Developer, working on the design and development of intuitive, user-centric interfaces. I utilised React JS, TypeScript, and jQuery to build scalable and responsive applications. Projects included collaborating with clients from the USA, Ireland, and the Netherlands.",
  },
  {
    title: "React JS Course",
    company: "EJOB India",
    location: "Kolkata",
    time: "2021",
    color: "#0277bd",
    smallDesc:
      "5-month course on dynamic web application development using React JS.",
    fullDesc:
      "Completed a 5-month course at eJob India, Kolkata, focused on building dynamic web applications using React JS and ES6, gaining hands-on experience in modern front-end development, including understanding React hooks, components, and state management techniques.",
  },
  {
    title: "Master in Computer Application",
    company: "Uttaranchal University",
    location: "Dehradun",
    time: "2023 – 2025",
    color: "#7b1fa2",
    smallDesc:
      "MCA covering advanced programming, algorithms, data structures, and web development.",
    fullDesc:
      "During my time pursuing a Master in Computer Application at Online Uttaranchal University (2023–2025), I gained in-depth expertise in computer science, strengthening both my technical skills and my passion for innovative technological solutions. The program covered a wide range of subjects including advanced programming languages, algorithms, data structures, database management, and software engineering principles.",
  },
];

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const openModal = (item) => { setModalItem(item); setModalOpen(true); };

  return (
    <motion.div
      className="about-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        {/* ── Journey ────────────────────────────── */}
        <div className="journey-section">
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", color: "var(--navy)", marginBottom: "1.2rem" }}>
            My Journey
          </h2>
          {journeyData.map((item, i) => (
            <motion.div
              key={i}
              className="journey-card"
              style={{ borderLeftColor: item.color }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <h3 className="journey-card-title" style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "0.15rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--mid-grey)", marginBottom: "0.15rem" }}>
                {item.company} &ensp;
                <span style={{ fontSize: "0.78rem", color: "var(--light-grey)", fontWeight: 400 }}>
                  {item.location}
                </span>
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--light-grey)", fontWeight: 500, marginBottom: "0.5rem" }}>
                {item.time}
              </p>
              <p style={{ fontSize: "0.87rem", color: "var(--charcoal)", lineHeight: 1.6 }}>
                {item.smallDesc}
              </p>

              <button
                className="expand-btn"
                onClick={() => openModal(item)}
                style={{
                  position: "absolute", top: 12, right: 12,
                  background: "var(--cream-dark)", border: "1px solid var(--border)",
                  borderRadius: "50%", width: 26, height: 26,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", fontSize: "0.7rem", color: "var(--navy)",
                  transition: "var(--transition)",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--navy)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--cream-dark)"; e.currentTarget.style.color = "var(--navy)"; }}
                aria-label="Read more"
              >
                <FullscreenOutlined />
              </button>
            </motion.div>
          ))}
        </div>

        {/* ── Profile ────────────────────────────── */}
        <motion.div
          className="profile-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{ textAlign: "center" }}
        >
          <img
            className="profile-avatar"
            src={profileImage}
            loading="lazy"
            alt="SK Abadat Haque"
            style={{ width: 160, height: 160, borderRadius: "50%", border: "4px solid var(--navy)", objectFit: "cover", objectPosition: "top", margin: "0 auto 1.2rem", display: "block" }}
          />

          <p className="about-bio">
            Hi! I'm <strong>SK ABADAT HAQUE</strong>, a dedicated{" "}
            <strong>Web Developer</strong> based in <strong>India</strong>{" "}
            with <strong>3.5 years of professional experience</strong> building
            responsive, high-performance applications.
          </p>
          <p className="about-bio">
            I've worked across <strong>three companies</strong> and contributed
            to projects in the <strong>USA, Ireland, and Bangladesh</strong>.
            My core expertise lies in{" "}
            <strong>React.js, TypeScript, Next.js, Tailwind CSS</strong>, and
            modern frontend tooling.
          </p>
          <p className="about-bio">
            I'm passionate about user-centric interfaces, clean code, and
            staying current with the latest web technologies. My toolset
            includes <strong>Redux Toolkit, NX, Vitest, WebSockets</strong>,
            and component libraries like Ant Design.
          </p>
          <p className="about-bio">
            Outside of coding I enjoy <strong>AI, open-source contributions</strong>,
            and exploring good <strong>UX design</strong>. Whether it's a
            product idea, a startup vision, or a freelance project — I'm always
            excited to collaborate and build something meaningful.
          </p>
        </motion.div>
      </div>

      {/* ── Detail Modal ─────────────────────────── */}
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="close" type="primary" onClick={() => setModalOpen(false)}
            style={{ background: "var(--navy)", borderColor: "var(--navy)", fontFamily: "var(--font-sans)" }}>
            Close
          </Button>,
        ]}
        title={
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--navy)" }}>
            {modalItem?.title}
          </span>
        }
        width={640}
      >
        {modalItem && (
          <div>
            <p style={{ fontSize: "0.9rem", color: "var(--mid-grey)", marginBottom: "0.5rem" }}>
              <strong>Company:</strong> {modalItem.company} &nbsp;|&nbsp;
              <strong>Location:</strong> {modalItem.location} &nbsp;|&nbsp;
              <strong>Duration:</strong> {modalItem.time}
            </p>
            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0.75rem 0" }} />
            <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--charcoal)" }}>
              {modalItem.fullDesc}
            </p>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

export default About;
