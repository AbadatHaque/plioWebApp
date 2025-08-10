import { useState } from "react";
import { Button, Card, Grid, Avatar, Timeline, Col, Row, Modal } from "antd";
import { motion } from "framer-motion";
import { FullscreenOutlined } from "@ant-design/icons";
import profileImage from "../../public/static/profile.jpg";

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
const cardVariants = {
  hidden: { opacity: 0, y: 50, x: 50 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.8 } },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  },
};
const { useBreakpoint } = Grid; // Ant Design responsive breakpoints

export const About = () => {
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
export default About;
