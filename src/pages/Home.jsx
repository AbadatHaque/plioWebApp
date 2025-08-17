import { Button } from "antd";
import { motion } from "framer-motion";

import { SiGithubactions } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import avatar from "../assets/avatar.webp";
import { TypeAnimation } from "react-type-animation";
const resumeUrl = "/Abadat_Haque_Frontend_Developer_Resume.pdf";

const Home = () => {
  return (
    <motion.div
      className="containar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // Use landmark role for main content
      role="main"
      aria-label="Home section"
    >
      <motion.div
        className="lhs"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="headingTex">
          <h5 className="color-custom-grey font-weight-bold mb-0">Hey!</h5>
          <h1 className="color-name-blue text-boldest">{"I'm ABADAT"}</h1>

          {/* Type animation for roles with aria-live to announce changes */}
          <TypeAnimation
            sequence={[
              "I am a Frontend Developer.",
              1000,
              "I am a React JS Developer.",
              1000,
              "I am a Web App Developer.",
              1000,
              "I am a Fullstack Developer.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.5rem", display: "block" }}
            repeat={Infinity}
            aria-live="polite"
            aria-atomic="true"
            aria-relevant="text"
          />
        </header>

        <p style={{ margin: "0 0 2rem" }} className="color-custom-grey h5">
          I specialize in developing pixel-perfect user interfaces
        </p>

        <motion.div
          className="socialMediaButtons"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          role="navigation"
          aria-label="Social media links"
        >
          {/* Buttons with aria-label for screen readers */}
          <Button
            shape="circle"
            icon={<SiGithubactions />}
            onClick={() =>
              window.open(
                "https://github.com/AbadatHaque",
                "_blank",
                "noopener noreferrer"
              )
            }
            aria-label="GitHub Profile"
          />
          <Button
            shape="circle"
            icon={<TiSocialLinkedinCircular />}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sk-abadat-haque-a1516b179/",
                "_blank",
                "noopener noreferrer"
              )
            }
            aria-label="LinkedIn Profile"
          />
          <Button
            shape="circle"
            icon={<FaSquareXTwitter />}
            onClick={() =>
              window.open(
                "https://x.com/Abadat07",
                "_blank",
                "noopener noreferrer"
              )
            }
            aria-label="Twitter Profile"
          />
        </motion.div>
        <a href="/Abadat_Haque_Frontend_Developer_Resume.pdf" download>
          <Button
            type="primary"
            // onClick={() =>
            //   window.open(resumeUrl, "_blank", "noopener noreferrer")
            // }
            id="viewResume"
            aria-label="View Resume PDF"
          >
            View Resume
          </Button>
        </a>
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
          alt="Abadat Haque coding at computer"
          src={avatar}
          role="img"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
