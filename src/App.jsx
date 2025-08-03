import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Button,
  Card,
  Grid,
  Form,
  Input,
  Avatar,
  Timeline,
  Col,
  Row,
  message,
  Switch,
  Modal,
} from "antd";
import { motion } from "framer-motion";
import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import { SiGithubactions } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import emailjs from "emailjs-com";
import "antd/dist/reset.css";
// import Nav from "./pages/nav";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Typography } from "antd";
import {
  Html5Outlined,
  CodeOutlined,
  DatabaseOutlined,
  ApiOutlined,
  MobileOutlined,
  GithubOutlined,
  GitlabOutlined,
  BranchesOutlined,
  BugOutlined,
  CloudOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  KeyOutlined,
  CloudDownloadOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
const { Title } = Typography;
import avatar from "../public/avatar.png";
import profileImage from "../public/static/profile.jpg";
// import resume from '../public/static/Abadat_Haque_Frontend_Developer_Resume.pdf'
import resume from "../public/static/Abadat_Haque_Frontend_Developer_Resume.pdf";
import Services from "./service";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <motion.div
      className="containar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="lhs"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="headingTex">
          <h5 className="color-custom-grey font-weight-bold mb-0">Hey !</h5>
          <h1 className="color-name-blue text-boldest">{"I'm ABADAT"}</h1>
          <TypeAnimation
            sequence={[
              "I am a Frontend Developer .",
              1000,
              "I am a React JS Developer .",
              1000,
              "I am a Web App Developer .",
              1000,
              "I am a Fullstack Developer .",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.5rem", display: "block" }}
            repeat={Infinity}
          />
        </div>
        <div style={{ margin: "0px 0px 2rem" }}>
          <span className="color-custom-grey h5">
            I specialize in developing pixel-perfect user interfaces
          </span>
          <br />
        </div>
        <motion.div
          className="socialMediaButtons"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            shape="circle"
            icon={<SiGithubactions />}
            onClick={() =>
              window.open("https://github.com/AbadatHaque", "_blank")
            }
          />
          <Button
            shape="circle"
            icon={<TiSocialLinkedinCircular />}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sk-abadat-haque-a1516b179/",
                "_blank"
              )
            }
          />
          <Button
            onClick={() => window.open("https://x.com/Abadat07", "_blank")}
            shape="circle"
            icon={<FaSquareXTwitter />}
          />
        </motion.div>
        <Button
          type="primary"
          onClick={() => window.open(resume, "_blank")}
          id="viewResume"
        >
          View Resume
        </Button>
      </motion.div>
      <motion.div
        className="rhs"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          className="homepageavtar"
          style={{ maxWidth: "100%" }}
          alt="coder"
          src={avatar}
        />
      </motion.div>
    </motion.div>
  );
};

const timelineVariants = {
  hidden: { opacity: 0, y: 0, x: "-100%" },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const { useBreakpoint } = Grid; // Ant Design responsive breakpoints

const About = () => {
  const screens = useBreakpoint(); // Detect screen size
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const showModal = (desc) => {
    setModalContent(desc); // Set the content to be shown in the modal
    setIsModalVisible(true); // Show the modal
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Close the modal
  };
  const journeyData = [
    {
      title: "Frontend Developer",
      company: "Sembark Travel Software",
      smallDesc:
        "Frontend developer at Sembark Travel Software, building a modern SaaS platform using React.js, TypeScript, NX, and Tailwind CSS.",

      fullDesc:
        "As a Frontend Developer at Sembark Travel Software, I work on developing a scalable SaaS platform using React.js, TypeScript, Tailwind CSS, NX for monorepo management, and Vitest for testing. I focus on creating responsive, maintainable UI components while collaborating closely with backend developers and new onboarded team members. I actively participate in sprint planning, API integration, code reviews, and help guide teammates by sharing best practices. My role also involves optimizing performance, ensuring accessibility, and contributing to a clean and modular codebase that supports long-term scalability.",

      time: "2025 – Present",
      color: "default",
      location: "Jaipur",
    },
    {
      title: "Frontend Developer",
      company: "Connectcosmic Networks Pvt Ltd",
      smallDesc:
        "Front-end developer at Connectcosmic Networks Pvt Ltd, building a SaaS platform with React JS and Ant Design.", // Small screen description
      fullDesc:
        "As a Front-end Developer at Connectcosmic Networks Pvt Ltd, a rapidly growing SaaS startup, I play a critical role in building and enhancing the user interface of our platform. Working closely with the company owner and other key stakeholders, I actively participate in defining the product’s features, design decisions, and user experience improvements. The platform is built with React JS, Ant Design, HTML5, and CSS3, and I work on creating responsive, intuitive, and visually appealing interfaces. My contributions extend beyond just coding – I collaborate on brainstorming sessions, offer insights on user-centric design, and ensure the platform remains scalable and easy to maintain. This hands-on involvement in the startup's growth allows me to directly impact the direction and success of the product while staying up-to-date with the latest front-end technologies.", // Full screen description
      time: "2024 - 2025",
      color: "default",
      location: "New Delhi",
    },
    {
      title: "UX Developer",
      company: "Mass Software Solutions",
      smallDesc:
        "UX Developer at Mass Software Solutions, skilled in React JS, TypeScript, jQuery, and Git/Bitbucket. Worked with global teams.", // Small screen description
      fullDesc:
        "During my 2.9 years at Mass Software Solutions, I specialized as a UX Developer, working on the design and development of intuitive, user-centric interfaces. I utilized React JS (both class and functional components), TypeScript, and jQuery to build scalable and responsive applications. For state management, we relied heavily on Redux Toolkit, which streamlined our development process by providing a robust and predictable state management solution. For version control and team collaboration, we used Git and Bitbucket, ensuring smooth code integration, efficient branching, and code reviews across distributed teams. My projects included collaborating with clients from the USA, Ireland, and the Netherlands, while leveraging ES6, Redux Toolkit, and Jira for task management and project tracking. This experience helped me grow technically and as a collaborative team player, working in a dynamic, global environment.", // Full screen description
      time: "2021 - 2024",
      color: "green",
      location: "Kolkata",
    },
    {
      title: "React Js",
      company: "EJOB India",
      smallDesc:
        "Completed a 5-month course at eJob India, Kolkata, focused on building dynamic web applications using React JS.", // Small screen description
      fullDesc:
        "Completed a 5-month course at eJob India, Kolkata, focused on building dynamic web applications using React JS and ES6, gaining hands-on experience in modern front-end development, including understanding React hooks, components, and state management techniques.", // Full screen description
      time: "2021 - 2021",
      color: "default",
      location: "Kolkata",
    },
    {
      title: "Master in Computer Application",
      company: "Online Uttaranchal University",
      smallDesc:
        "Gained in-depth expertise in computer science, honing both technical skills and a passion for innovative solutions.", // Small screen description
      fullDesc:
        "During my time pursuing a Master in Computer Application at Online Uttaranchal University (2023-2025), I gained in-depth expertise in computer science, strengthening both my technical skills and my passion for innovative technological solutions. The program covered a wide range of subjects, including advanced programming languages, algorithms, data structures, database management, and software engineering principles. I also delved into areas like machine learning, web development, and mobile application development, gaining hands-on experience in building and deploying software solutions. This academic journey allowed me to apply theoretical concepts to real-world problems, equipping me with the knowledge and skills to develop scalable, efficient, and user-centric applications. My coursework and projects helped me cultivate problem-solving abilities, teamwork, and critical thinking, which I am eager to apply in future technological challenges.", // Full screen description
      time: "2023 - 2025",
      color: "blue",
      location: "Dehradun",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "30px",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
      }}
    >
      <Row gutter={[32, 32]} justify="center">
        {/* Journey Section (Cards for Mobile, Timeline for Large Screens) */}
        <Col xs={24} md={12}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>My Journey</h2>
          {screens.md ? (
            <>
              <Timeline mode="alternate">
                {journeyData.map((item, index) => (
                  <Timeline.Item key={index} color={item.color}>
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
                      <Card
                        title={item.title} // This will remain as the designation (title)
                        style={{
                          boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                          borderRadius: "10px",
                          padding: "20px", // Padding inside the card for a clean layout
                          position: "relative", // Position relative for button alignment
                          backgroundColor: "#f9f9f9", // Light background for the card
                          textAlign: "left", // Left-align text for better readability
                        }}
                      >
                        <div style={{ marginBottom: "10px" }}>
                          {/* Company Name and Location */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "8px",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                marginRight: "10px",
                                color: "#333",
                              }}
                            >
                              {item.company || "Company Name"}
                            </span>
                            <span style={{ fontSize: "12px", color: "#777" }}>
                              {item.location || "Location not specified"}
                            </span>
                          </div>

                          {/* Valid Year */}
                          <p
                            style={{
                              fontSize: "13px",
                              fontWeight: "bold",
                              color: "#555",
                              marginBottom: "8px",
                            }}
                          >
                            {item.time}
                          </p>

                          {/* Short Description (Small screen description) */}
                          <p
                            style={{
                              fontSize: "15px",
                              lineHeight: "1.6",
                              color: "#333",
                              marginBottom: "12px",
                            }}
                          >
                            {item.smallDesc}
                          </p>
                        </div>

                        {/* Fullscreen Button to show the modal with detailed information */}
                        <motion.button
                          className="fullscreen-button"
                          whileHover={{
                            scale: 1.1,
                            rotate: 180,
                            backgroundColor: "#1890ff",
                            color: "#fff",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => showModal(item)} // Show full details on click
                        >
                          <FullscreenOutlined style={{ fontSize: "18px" }} />
                        </motion.button>
                        {/* Media Query Adjustments for Mobile Devices */}
                        <style>
                          {`
                              @media (max-width: 768px) {
                                .fullscreen-button {
                                  top: 10px;
                                  right: 10px;
                                  width: 2rem;
                                  height: 2rem;
                                }
                              }
                            `}
                        </style>
                      </Card>
                    </motion.div>
                  </Timeline.Item>
                ))}
              </Timeline>

              <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                  <motion.div
                    key="close"
                    initial={{ scale: 1 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                      backgroundColor: "#40a9ff",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      onClick={handleCancel}
                      style={{
                        backgroundColor: "#1890ff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                        padding: "10px 20px",
                        fontSize: "16px",
                      }}
                    >
                      Close
                    </Button>
                  </motion.div>,
                ]}
                width="70%" // Adjust modal width
                style={{
                  borderRadius: "15px", // More rounded modal corners
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Stronger shadow for depth
                  background: "linear-gradient(to bottom, #fff, #f1f1f1)", // Gradient background for the modal
                  padding: "25px", // More padding for the modal body
                  lineHeight: "1.7", // Line height for better readability
                }}
                title={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "26px",
                      color: "#1890ff",
                    }}
                  >
                    {modalContent.title}
                  </motion.div>
                }
              >
                {/* Title of the Modal */}

                {/* Modal Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{
                    marginBottom: "15px",
                    fontSize: "14px",
                    color: "#555",
                    textAlign: "center",
                  }}
                >
                  <strong>Company:</strong> {modalContent.company} <br />
                  <strong>Location:</strong> {modalContent.location} <br />{" "}
                  {/* Added location */}
                  <strong>Duration:</strong> {modalContent.time}
                </motion.div>

                {/* Full Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{
                    fontSize: "16px",
                    color: "#333",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  <p>{modalContent.fullDesc}</p>
                </motion.div>

                {/* Additional Notes */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  style={{ fontSize: "14px", color: "#777", marginTop: "20px" }}
                >
                  <p>
                    <strong>Note:</strong> This is a comprehensive description
                    providing in-depth insights about the role and
                    responsibilities at the respective company.
                  </p>
                </motion.div>
              </Modal>
            </>
          ) : (
            // Show Cards on Mobile Screens
            <Row gutter={[16, 16]}>
              {journeyData.map((item, index) => (
                <Col span={24} key={index}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={timelineVariants}
                    viewport={{ once: true }}
                  >
                    <Card
                      style={{
                        boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                        padding: "20px",
                      }}
                    >
                      <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: "15px" }}>{item.desc}</p>
                      <p style={{ fontSize: "13px", fontWeight: "bold" }}>
                        {item.time}
                      </p>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          )}
        </Col>

        {/* Profile & About Section */}
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Avatar
              size={180}
              src={profileImage}
              style={{ marginBottom: "20px" }}
            />
          </motion.div>

          <motion.div
            className="details"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              About Me
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                textAlign: "justify",
              }}
            >
              Hi! I’m <strong>SK ABADAT HAQUE</strong>, a dedicated and
              enthusiastic <strong>Web Developer</strong> based in{" "}
              <strong>India</strong>, with{" "}
              <strong>3.5 years of professional experience</strong> in building
              responsive, high-performance applications.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                textAlign: "justify",
              }}
            >
              I’ve worked across <strong>three companies</strong> and
              contributed to projects in the{" "}
              <strong>USA, Ireland, and Bangladesh</strong>. My core expertise
              lies in{" "}
              <strong>React.js, TypeScript, Next.js, Tailwind CSS</strong>, and
              modern frontend tooling. I also have solid experience working on{" "}
              <strong>SaaS platforms</strong> with a focus on scalability,
              accessibility, and performance optimization.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                textAlign: "justify",
              }}
            >
              I’m passionate about building user-centric interfaces, solving
              real-world problems with clean code, and staying updated with the
              latest trends in web technologies. My toolset includes{" "}
              <strong>Redux Toolkit, NX, Vitest, WebSockets</strong>, and
              component libraries like Ant Design.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                textAlign: "justify",
              }}
            >
              Outside of coding, I enjoy diving into{" "}
              <strong>AI, open-source contributions</strong>, and exploring good{" "}
              <strong>UX design</strong>. Whether it’s a product idea, a startup
              vision, or a freelance project — I’m always excited to collaborate
              and build something meaningful.
            </p>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, x: 50 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.8 } },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  },
};

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

const ProjectsPage = () => {
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

const ContactForm = () => {
  const [form] = Form.useForm(); // Create a form instance
  const handleSubmit = (values) => {
    emailjs
      .send(
        "service_4te00gg", // Replace with your EmailJS service ID
        "template_mv7sfwj", // Replace with your EmailJS template ID
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        "18xrpJpKfywJUai4S" // Replace with your EmailJS user ID
      )
      .then(() => {
        message.success("Message sent successfully!");
        form.resetFields(); // Cle
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        message.error("Failed to send message. Please try again.");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        padding: "40px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      {/* <h2 style={{ marginBottom: "20px" }}>Contact Me</h2> */}
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Contact Me
      </h2>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Your Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Your Email" />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <Input.TextArea rows={4} placeholder="Your Message" />
        </Form.Item>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button type="primary" htmlType="submit" block>
            Send Message
          </Button>
        </motion.div>
      </Form>
    </motion.div>
  );
};

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

const SkillPage = () => {
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

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "projects":
        return <ProjectsPage />;
      case "contact":
        return <ContactForm />;
      case "skill":
        return <SkillPage />;
      case "service":
      // return <Services/>;
      default:
        return <Home />;
    }
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Layout>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.header
          animate={{
            background: isScrolled
              ? "rgba(0, 21, 41, 0.9)"
              : "rgba(0, 21, 41, 0.5)",
            boxShadow: isScrolled ? "0 4px 10px rgba(0, 0, 0, 0.3)" : "none",
            color: isScrolled
              ? "rgba(255, 255, 255, 0.9)"
              : "rgba(241, 0, 0, 0.5)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 40px",
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            position: "fixed",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            zIndex: 1000,
          }}
        >
          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="desktop-menu"
          >
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[currentPage]}
              style={{
                background: "transparent",
                border: "none",
                display: "flex",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              {["home", "service", "about", "projects", "contact", "skill"].map(
                (item) => (
                  <motion.div
                    key={item}
                    whileHover={{
                      scale: 1.2,
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                      padding: "5px 15px",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: "inline-block", cursor: "pointer" }}
                    onClick={() => setCurrentPage(item)}
                  >
                    <Menu.Item
                      key={item}
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color:
                          currentPage === item
                            ? "rgb(255, 255, 255)"
                            : isScrolled
                            ? "rgba(200, 200, 200, 0.9)"
                            : "rgba(0, 0, 0, 0.99)",
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Menu.Item>
                  </motion.div>
                )
              )}
            </Menu>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <MenuOutlined
              className="mobile-menu-button"
              onClick={toggleDrawer}
              style={{
                fontSize: "24px",
                // color: "white",
                color: isScrolled ? "rgba(250, 250, 255, 0.9)" : "rgb(0, 0, 0)",
                cursor: "pointer",
                display: "none",
              }}
            />
          </motion.div>

          {/* Mobile Drawer Menu */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={toggleDrawer}
            open={isDrawerOpen}
          >
            <Menu theme="light" mode="vertical">
              {["home", "service", "about", "projects", "contact", "skill"].map(
                (item) => (
                  <motion.div
                    key={item}
                    whileHover={{
                      scale: 1.2,
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                      padding: "5px 15px",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    // style={{  cursor: "pointer" }}
                    background={
                      currentPage === item
                        ? "rgba(255, 255, 255, 0.2)"
                        : "transparent"
                    } //
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        currentPage === item
                          ? "rgba(255, 255, 255, 0.2)"
                          : "transparent", // Active item background
                      borderRadius: "8px",
                      padding: "8px 15px",
                      transition: "background 0.3s ease",
                    }}
                    onClick={() => {
                      setCurrentPage(item);
                      toggleDrawer();
                    }}
                  >
                    <Menu.Item
                      key={item}
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        backgroundColor:
                          currentPage === item
                            ? "rgba(255, 255, 255, 0.2)"
                            : "transparent",
                        color:
                          currentPage === item
                            ? "rgba(100, 105, 125, 0.88)"
                            : "",
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Menu.Item>
                  </motion.div>
                  //     ))}
                  //   </Menu>
                  // </motion.div>
                )
              )}
            </Menu>
            {/* // <Menu.Item key={item} onClick={toggleDrawer}>
            //   {item.charAt(0).toUpperCase() + item.slice(1)}
            // </Menu.Item> */}
          </Drawer>
        </motion.header>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={{ paddingTop: "80px" }}
      >
        <Content
          style={{
            padding: "50px",
            textAlign: "center",
            background: "#f0f2f5",
          }}
        >
          {renderPage()}
        </Content>
      </motion.div>

      <Footer
        style={{
          textAlign: "center",
          background: "#001529",
          color: "white",
          padding: "20px",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <motion.div whileHover={{ textShadow: "0px 0px 8px white" }}>
          © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
        </motion.div>
      </Footer>
    </Layout>
  );
};

export default App;
