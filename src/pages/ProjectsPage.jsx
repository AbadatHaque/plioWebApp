import { useState } from "react";
import { Card, Col, Row, Modal } from "antd";
import { motion } from "framer-motion";
import "antd/dist/reset.css";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
const projects = [
  {
    name: "React Portfolio",
    image: "/images/portfolio.png",
    url: "https://neon-lebkuchen-9e77bf.netlify.app/",
    technologies: "React, Ant Design, Framer Motion",
    challenges: "Ensuring smooth animations and optimizing performance.",
  },
  {
    name: "Simon Gamee",
    image: "game.png",
    url: "https://neon-lebkuchen-9e77bf.netlify.app/",
    technologies: "ES6, CSS3, HTML5",
    challenges: "Ensuring smooth animations and optimizing performance.",
  },
  {
    name: "Calculator App",
    image: "/images/cal.png",
    url: "https://chipper-caramel-66d098.netlify.app/",
    technologies: "Javascript, CSS3, HTML5",
    challenges:
      "Handling user input validation, managing state without frameworks, parsing complex mathematical expressions, and ensuring the UI remained responsive on both desktop and mobile devices were key challenges. Solutions included manual state management, DOM manipulation, and using vanilla JavaScript to implement an efficient calculation logic.",
  },
  {
    name: "Folder Structure System",
    image: "/images/folder.png",
    url: "https://fileexplorerapp.netlify.app/",
    technologies: "React.js, Ant Design, Css3, Html5",
    challenges:
      "Managing complex nested folder structures, ensuring mobile-friendly form submissions, and optimizing app performance were key challenges. We overcame these issues by utilizing React hooks effectively, implementing responsive design, and optimizing state updates for large datasets.",
  },
  {
    name: "Ecommerce",
    image: "/images/ecommerce.png",
    url: "https://ecomme-shop.netlify.app/",
    technologies: "React.js, TypeScript, Context API, Tailwind CSS",
    challenges:
      "Launching a seamless e‑commerce platform came with unique challenges: managing a dynamic product catalog, ensuring smooth cart and checkout flows, and supporting responsive image-heavy pages. We addressed these with Context API for global state, lazy-loading and optimized media, and mobile-first form handling. Secure payment integration and fast load times were achieved using efficient routing, memoized state updates, and pre–compressed assets.",
  },
  // {
  //   name: "E-commerce Platform",
  //   image: "/static/images/ecommerce-platform.jpg",
  //   url: "https://neon-lebkuchen-9e77bf.netlify.app/",
  //   technologies: "Next.js, Tailwind CSS, Stripe API",
  //   challenges: "Handling secure payments and optimizing load speed."
  // },
  // {
  //   name: "AI Chatbot",
  //   image: "/static/images/ai-chatbot.jpg",
  //   url: "https://neon-lebkuchen-9e77bf.netlify.app/",
  //   technologies: "React, OpenAI API, WebSockets",
  //   challenges: "Implementing real-time responses and improving NLP accuracy."
  // }
];
const cardVariants = {
  hidden: { opacity: 0, y: 50, x: 50 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.8 } },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  },
};
export const ProjectsPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const showModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        padding: "50px",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        My Projects
      </h2>
      <Row gutter={[16, 16]} justify="start">
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              style={{
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Card
                  title={project.name}
                  style={{
                    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    textAlign: "center",
                    transition: "background 0.3s ease-in-out",
                  }}
                  // cover={<img src={project.image} alt={project.name} style={{ padding: "20px" }} />}
                  cover={
                    <img
                      src={project.image}
                      alt={project.name}
                      style={{
                        width: "100%", // Make the image fill the width of the Card
                        height: "200px", // Set a fixed height for the image
                        objectFit: "cover", // Ensure the image covers the area without distorting
                        padding: "20px", // Optional, you can adjust this if needed
                      }}
                    />
                  }
                >
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    This project showcases advanced features and high usability.
                  </p>
                </Card>
              </a>
              <motion.button
                whileHover={{
                  scale: 1.5,
                  rotate: 180,
                  color: "#1890ff",
                  boxShadow: "none",
                  backgroundColor: "rgb(255, 254, 254)",
                }}
                whileTap={{ scale: 3 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: "#fff",
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: 10,
                  background: "#1890ff",
                  border: "none",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  border: "none",
                }}
                onClick={() => showModal(project)}
              >
                <FullscreenOutlined style={{ fontSize: "18px" }} />
              </motion.button>
            </motion.div>
          </Col>
        ))}
      </Row>
      <Modal
        title={
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>
            {selectedProject?.name}
          </span>
        }
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={800}
        style={{
          top: "50px",
          borderRadius: "16px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
        }}
        closeIcon={
          <motion.div
            whileHover={{ scale: 0.9, rotate: -180 }}
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <FullscreenExitOutlined
              style={{ fontSize: "24px", color: "#1677ff" }}
            />
          </motion.div>
        }
      >
        {selectedProject && (
          <div style={{ padding: "20px" }}>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Technologies Used:
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
              {selectedProject.technologies}
            </p>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Challenges Faced:
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
              {selectedProject.challenges}
            </p>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};
export default ProjectsPage;
