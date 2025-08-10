import { useState } from "react";
import { Card, Col, Row, Modal } from "antd";
import { motion } from "framer-motion";
import { Typography } from "antd";
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
const { Title } = Typography;

const skills = [
  {
    name: "HTML & CSS",
    icon: <Html5Outlined />,
    color: "#e44d26",
    description:
      "Experienced in building responsive layouts with HTML5 and CSS3.",
  },
  {
    name: "JavaScript",
    icon: <CodeOutlined />,
    color: "#f7df1e",
    description: "Proficient in ES6+ features and asynchronous programming.",
  },
  {
    name: "React.js",
    icon: <CodeOutlined />,
    color: "#61dafb",
    description: "Skilled in building SPA with React and state management.",
  },
  {
    name: "Redux Toolkit",
    icon: <DatabaseOutlined />,
    color: "#764abc",
    description: "Experience managing state efficiently using Redux Toolkit.",
  },
  {
    name: "Next.js",
    icon: <ApiOutlined />,
    color: "#000",
    description: "Expertise in SSR, SSG, and API routes with Next.js.",
  },
  {
    name: "TypeScript",
    icon: <CodeOutlined />,
    color: "#3178c6",
    description:
      "Strong knowledge of static typing and improving development with TypeScript.",
  },
  {
    name: "SSO",
    icon: <KeyOutlined />,
    color: "#5c6bc0",
    description:
      "Experience in integrating Single Sign-On (SSO) for seamless authentication.",
  },
  {
    name: "PWA",
    icon: <CloudDownloadOutlined />,
    color: "#ff4081",
    description:
      "Skilled in building Progressive Web Apps for offline-first, fast-loading experiences.",
  },
  {
    name: "REST API",
    icon: <AppstoreAddOutlined />,
    color: "#2196f3",
    description: "Experienced in building and consuming RESTful APIs.",
  },
  {
    name: "Git",
    icon: <BranchesOutlined />,
    color: "#f34f29",
    description: "Version control and collaboration using Git.",
  },
  {
    name: "GitHub",
    icon: <GithubOutlined />,
    color: "#333",
    description: "Managing repositories, pull requests, and CI/CD workflows.",
  },
  {
    name: "Bitbucket",
    icon: <GitlabOutlined />,
    color: "#205081",
    description: "Experience in working with Bitbucket repositories.",
  },
  {
    name: "Jira",
    icon: <BugOutlined />,
    color: "#0052cc",
    description: "Project management and issue tracking with Jira.",
  },
  {
    name: "jQuery",
    icon: <CloudOutlined />,
    color: "#0769ad",
    description: "Experience in using jQuery for DOM manipulation.",
  },
  {
    name: "Ant Design",
    icon: <CodeOutlined />,
    color: "#1890ff",
    description: "UI framework expertise for building sleek interfaces.",
  },
  {
    name: "NX",
    icon: <CodeOutlined />,
    color: "#143055",
    description:
      "Experienced in managing monorepos with NX for scalable project architecture.",
  },
  {
    name: "Vitest",
    icon: <CodeOutlined />,
    color: "#6e9fef",
    description:
      "Familiar with fast and efficient unit testing using Vitest in modern frontend projects.",
  },
];

export const SkillPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const showModal = (skill) => {
    setSelectedSkill(skill);
    setModalVisible(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ padding: "50px", textAlign: "center", background: "#f0f2f5" }}
      >
        {/* <Title level={2}>My Skills</Title> */}
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          My Skills
        </h2>
        <Row gutter={[16, 16]} justify="center">
          {skills.map((skill, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9, rotate: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  style={{
                    borderLeft: `5px solid ${skill.color}`,
                    cursor: "pointer",
                    position: "relative",
                  }}
                  hoverable
                  onClick={() => showModal(skill)}
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: "24px", color: skill.color }}
                  >
                    {skill.icon}
                  </motion.div>
                  <Title level={4} style={{ marginTop: "10px" }}>
                    {skill.name}
                  </Title>
                  <motion.div
                    className="description-box"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(0, 0, 0, 0.7)",
                      color: "#fff",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      width: "90%",
                      textAlign: "center",
                      opacity: 0,
                    }}
                  >
                    {skill.description}
                  </motion.div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
        <Modal
          title={selectedSkill?.name}
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
        >
          <p>{selectedSkill?.description}</p>
        </Modal>
      </motion.div>
    </>
  );
};
export default SkillPage;
