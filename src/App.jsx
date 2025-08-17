import { useState, useEffect, lazy, Suspense } from "react";
import { Layout, Menu } from "antd";
import { motion } from "framer-motion";
import "antd/dist/reset.css";
import "antd/dist/reset.css";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import Home from "./pages/Home";
// import { About } from "./pages/About";
// import { ProjectsPage } from "./pages/ProjectsPage";
// import { ContactForm } from "./pages/ContactForm";
// import { SkillPage } from "./pages/SkillPage";

// Lazy load pages
// const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactForm = lazy(() => import("./pages/ContactForm"));
const SkillPage = lazy(() => import("./pages/SkillPage"));
//          <Suspense fallback={<div>Loading...</div>}>{renderPage()}</Suspense>

const { Content, Footer } = Layout;

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
        style={{ paddingTop: "80px", height: "100vh" }}
      >
        <Content
          style={{
            padding: "50px",
            textAlign: "center",
            background: "#f0f2f5",
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>{renderPage()}</Suspense>
        </Content>
      </motion.div>

      <Footer
        style={{
          textAlign: "center",
          background: "#001529",
          color: "white",
          padding: "20px",
          transition: "all 0.3s ease-in-out",
          position: "fixed",
          bottom: "0",
          width: "100%",
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
