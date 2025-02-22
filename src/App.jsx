
import React, { useState, useEffect  } from "react";
import { Layout, Menu, Button, Card,Grid , Form, Input, Avatar,Timeline, Col, Row,message,Switch,Modal   } from "antd";
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
import { Drawer,Typography } from "antd";
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
  FullscreenOutlined 
} from "@ant-design/icons";
const { Title } = Typography;
import avatar from '../public/avatar.png'



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
            onClick={() => window.open("https://github.com/AbadatHaque", "_blank")}
          />
          <Button 
            shape="circle" 
            icon={<TiSocialLinkedinCircular />} 
            onClick={() => window.open("https://www.linkedin.com/in/sk-abadat-haque-a1516b179/", "_blank")}
          />
          <Button shape="circle" icon={<FaSquareXTwitter />} />
        </motion.div>
        <Button 
          type="primary" 
          onClick={() => window.open("/static/abadat_resume.pdf", "_blank")} 
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
  hidden: { opacity: 0, y: 0,x:'-100%' },
  visible: { opacity: 1, y: 0,x:0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x:'100%' },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const { useBreakpoint } = Grid; // Ant Design responsive breakpoints

const About = () => {
  const screens = useBreakpoint(); // Detect screen size

  const journeyData = [
    { title: "Frontend Developer", desc: "Gained foundational knowledge and developed a passion for technology.", time: "2024 - Present", color: "default" },
    { title: "UX Developer", desc: "Specialized in software development and UI/UX Development.", time: "2021 - 2024", color: "green" },
    { title: "React Js", desc: "Started working on dynamic web applications using React and Ant Design.", time: "2021 - 2021", color: "default" },
    { title: "Master in Computer Application", desc: "Gained foundational knowledge and developed a passion for technology.", time: "2023 - 2025", color: "blue" },
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
            // Show Timeline on Medium & Large Screens
            <Timeline mode="alternate">
              {journeyData.map((item, index) => (
                <Timeline.Item key={index} color={item.color}>
                  <motion.div initial="hidden" whileInView="visible" variants={timelineVariants} viewport={{ once: true }}>
                    <Card style={{ boxShadow: "0 6px 12px rgba(0,0,0,0.2)", padding: "20px" }}>
                      <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>{item.title}</h3>
                      <p style={{ fontSize: "15px" }}>{item.desc}</p>
                      <p style={{ fontSize: "13px", fontWeight: "bold" }}>{item.time}</p>
                    </Card>
                  </motion.div>
                </Timeline.Item>
              ))}
            </Timeline>
          ) : (
            // Show Cards on Mobile Screens
            <Row gutter={[16, 16]}>
              {journeyData.map((item, index) => (
                <Col span={24} key={index}>
                  <motion.div initial="hidden" whileInView="visible" variants={timelineVariants} viewport={{ once: true }}>
                    <Card style={{ boxShadow: "0 6px 12px rgba(0,0,0,0.2)", padding: "20px" }}>
                      <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>{item.title}</h3>
                      <p style={{ fontSize: "15px" }}>{item.desc}</p>
                      <p style={{ fontSize: "13px", fontWeight: "bold" }}>{item.time}</p>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          )}
        </Col>

        {/* Profile & About Section */}
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <motion.div initial="hidden" animate="visible" variants={imageVariants}>
            <Avatar size={180} src="/public/static/profile.jpeg" style={{ marginBottom: "20px" }} />
          </motion.div>

          <motion.div className="details" initial="hidden" animate="visible" variants={textVariants}>
            <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "15px" }}>About Me</h1>
            <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
              Hi! I’m <strong>SK ABADAT HAQUE</strong>, a passionate WEB DEVELOPER based in INDIA.
              I specialize in Frontend development, Web App Development, and UX development,
              where I strive to blend creativity with functionality.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
              With 2.8 years of experience as a React JS Developer, I’ve worked on diverse projects
              across the USA, Ireland, and Bangladesh. My goal is to bring ideas to life through
              innovative design and thoughtful storytelling.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
              My interests include web development, AI, open-source contributions, and UI/UX design.
              I believe great design can make a real impact, and when I’m not working, you’ll find me
              exploring new art styles, hiking, or diving into a good book.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
              Feel free to explore my portfolio, and let’s create something amazing together!
            </p>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};


const cardVariants = {
  hidden: { opacity: 0, y: 50, x:50 },
  visible: { opacity: 1, y: 0,x:0, transition: { duration: 0.8 } },
  hover: { 
    scale: 1.05, 
    transition: { duration: 0.3 },
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)"
  },
};


const projects = [
  {
    name: "React Portfolio",
    image: "/public/game.png",
    url: "https://neon-lebkuchen-9e77bf.netlify.app/",
    technologies: "React, Ant Design, Framer Motion",
    challenges: "Ensuring smooth animations and optimizing performance."
  },
  {
    name: "Dynamic Dashboard",
    image: "/static/images/dynamic-dashboard.jpg",
    url: "https://neon-lebkuchen-9e77bf.netlify.app/",
    technologies: "React, Redux, Chart.js",
    challenges: "Managing state efficiently and rendering large data sets."
  },
  {
    name: "E-commerce Platform",
    image: "/static/images/ecommerce-platform.jpg",
    url: "https://neon-lebkuchen-9e77bf.netlify.app/",
    technologies: "Next.js, Tailwind CSS, Stripe API",
    challenges: "Handling secure payments and optimizing load speed."
  },
  {
    name: "AI Chatbot",
    image: "/static/images/ai-chatbot.jpg",
    url: "https://neon-lebkuchen-9e77bf.netlify.app/",
    technologies: "React, OpenAI API, WebSockets",
    challenges: "Implementing real-time responses and improving NLP accuracy."
  }
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
      <h2 style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}>
        My Projects
      </h2>
      <Row gutter={[16, 16]} justify="center">
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              style={{ position: "relative", borderRadius: "10px", overflow: "hidden" }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Card
                  title={project.name}
                  style={{
                    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    textAlign: "center",
                    transition: "background 0.3s ease-in-out",
                  }}
                  cover={<img src={project.image} alt={project.name} style={{ padding: "20px" }} />}
                >
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    This project showcases advanced features and high usability.
                  </p>
                </Card>
              </a>
              <Button
                type="primary"
                icon={<FullscreenOutlined />}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: 10,
                }}
                onClick={() => showModal(project)}
              />
            </motion.div>
          </Col>
        ))}
      </Row>
      <Modal
        title={<span style={{ fontSize: "24px", fontWeight: "bold" }}>{selectedProject?.name}</span>}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={800}
        style={{
          top: "50px",
          borderRadius: "16px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
        }}
      >
        {selectedProject && (
          <div style={{ padding: "20px" }}>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.name} 
              style={{ width: "100%", borderRadius: "10px", marginBottom: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
            />
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Technologies Used:</h3>
            <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{selectedProject.technologies}</p>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Challenges Faced:</h3>
            <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{selectedProject.challenges}</p>
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
      <h2 style={{ marginBottom: "20px" }}>Contact Me</h2>
      <Form layout="vertical" form={form}  onFinish={handleSubmit}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}> 
          <Input prefix={<UserOutlined />} placeholder="Your Name" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}> 
          <Input prefix={<MailOutlined />} placeholder="Your Email" />
        </Form.Item>
        <Form.Item label="Message" name="message" rules={[{ required: true, message: "Please enter your message" }]}> 
          <Input.TextArea rows={4} placeholder="Your Message" />
        </Form.Item>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button type="primary" htmlType="submit" block>Send Message</Button>
        </motion.div>
      </Form>
    </motion.div>
  );
};

const skills = [
  { name: "HTML & CSS", icon: <Html5Outlined />, color: "#e44d26", description: "Experienced in building responsive layouts with HTML5 and CSS3." },
  { name: "JavaScript", icon: <CodeOutlined />, color: "#f7df1e", description: "Proficient in ES6+ features and asynchronous programming." },
  { name: "React.js", icon: <CodeOutlined />, color: "#61dafb", description: "Skilled in building SPA with React and state management." },
  { name: "Redux Toolkit", icon: <DatabaseOutlined />, color: "#764abc", description: "Experience managing state efficiently using Redux Toolkit." },
  { name: "Next.js", icon: <ApiOutlined />, color: "#000", description: "Expertise in SSR, SSG, and API routes with Next.js." },
  { name: "React Native", icon: <MobileOutlined />, color: "#00d8ff", description: "Experience in developing cross-platform mobile applications." },
  { name: "Git", icon: <BranchesOutlined />, color: "#f34f29", description: "Version control and collaboration using Git." },
  { name: "GitHub", icon: <GithubOutlined />, color: "#333", description: "Managing repositories, pull requests, and CI/CD workflows." },
  { name: "Bitbucket", icon: <GitlabOutlined />, color: "#205081", description: "Experience in working with Bitbucket repositories." },
  { name: "Jira", icon: <BugOutlined />, color: "#0052cc", description: "Project management and issue tracking with Jira." },
  { name: "jQuery", icon: <CloudOutlined />, color: "#0769ad", description: "Experience in using jQuery for DOM manipulation." },
  { name: "Ant Design", icon: <CodeOutlined />, color: "#1890ff", description: "UI framework expertise for building sleek interfaces." },
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
      <Title level={2}>My Skills</Title>
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
                style={{ borderLeft: `5px solid ${skill.color}`, cursor: "pointer", position: "relative" }}
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
                <Title level={4} style={{ marginTop: "10px" }}>{skill.name}</Title>
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
        return <About/>;
      case "projects":
        return <ProjectsPage />;
      case "contact":
        return <ContactForm />;
        case "skill":
          return <SkillPage />;
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
          boxShadow: isScrolled
            ? "0 4px 10px rgba(0, 0, 0, 0.3)"
            : "none",
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
              justifyContent:'center',
              gap: "30px",
            }}
          >
            {["home", "about", "projects", "contact", "skill"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.2, background: "rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: "5px 15px" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{ display: "inline-block", cursor: "pointer" }}
                onClick={() => setCurrentPage(item)}
              >
                <Menu.Item key={item} style={{ fontSize: "18px", fontWeight: "bold", color: currentPage === item ? "rgb(255, 255, 255)" : "black" }}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Menu.Item>
              </motion.div>
            ))}
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
              color: "white",
              cursor: "pointer",
              display: "none",
            }}
          />
        </motion.div>

        {/* Mobile Drawer Menu */}
        <Drawer title="Menu" placement="right" onClose={toggleDrawer} open={isDrawerOpen}>
          <Menu theme="light" mode="vertical">
            {["home", "about", "projects", "contact", "skill"].map((item) => (
              
              <motion.div
              key={item}
              whileHover={{ scale: 1.2, background: "rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: "5px 15px" }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              // style={{  cursor: "pointer" }}
              background={ currentPage === item ? "rgba(255, 255, 255, 0.2)" : "transparent"} //
              style={{
                cursor: "pointer",
                backgroundColor: currentPage === item ? "rgba(255, 255, 255, 0.2)" : "transparent", // Active item background
                borderRadius: "8px",
                padding: "8px 15px",
                transition: "background 0.3s ease",
              }}
              onClick={() =>{ setCurrentPage(item); toggleDrawer()}}
            >
              <Menu.Item key={item} style={{ fontSize: "18px", fontWeight: "bold", backgroundColor: currentPage === item ? "rgba(255, 255, 255, 0.2)" : "transparent", color: currentPage === item ? "rgba(100, 105, 125, 0.88)" : "black"}}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Menu.Item>
            </motion.div>
      //     ))}
      //   </Menu>
      // </motion.div>

            ))}
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
          style={{ padding: "50px", textAlign: "center", background: "#f0f2f5" }}
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





