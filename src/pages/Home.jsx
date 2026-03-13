import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { SiGithubactions } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import avatar from "../assets/avatar.webp";

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      role="main"
      aria-label="Home section"
    >
      {/* ── Left Side ────────────────────────────────────── */}
      <motion.div
        className="home-lhs"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Gold greeting line */}
        <p className="home-greeting">Welcome to my portfolio</p>

        {/* Big serif name */}
        <h1 className="home-name">I'm ABADAT</h1>

        {/* Italic typed role */}
        <div className="home-type">
          <TypeAnimation
            sequence={[
              "Frontend Developer.", 1200,
              "React JS Specialist.", 1200,
              "Web App Developer.", 1200,
              "Fullstack Developer.", 1200,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            aria-live="polite"
          />
        </div>

        {/* Gold rule */}
        <div className="home-divider" />

        {/* Bio */}
        <p className="home-bio">
          I specialise in crafting pixel-perfect, high-performance user
          interfaces with React.js, TypeScript, and modern frontend tooling —
          3.5+ years of professional experience across SaaS products and
          global clients in USA, Ireland &amp; Bangladesh.
        </p>

        {/* Social icons */}
        <nav className="home-social" aria-label="Social media links">
          <motion.a
            href="https://github.com/AbadatHaque"
            target="_blank" rel="noopener noreferrer"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >
            <SiGithubactions />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sk-abadat-haque-a1516b179/"
            target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >
            <TiSocialLinkedinCircular />
          </motion.a>
          <motion.a
            href="https://x.com/Abadat07"
            target="_blank" rel="noopener noreferrer"
            aria-label="X / Twitter Profile"
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >
            <FaSquareXTwitter />
          </motion.a>
        </nav>

        {/* CTA buttons */}
        <motion.div
          className="home-cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/Abadat_Haque_Frontend_Developer_Resume.pdf"
            target="_blank" rel="noopener noreferrer"
            download
            className="btn-classic"
          >
            Download CV
          </a>
          <a
            href="/Abadat_Haque_Frontend_Developer_Resume.pdf"
            target="_blank" rel="noopener noreferrer"
            className="btn-classic-outline"
          >
            View Resume
          </a>
        </motion.div>
      </motion.div>

      {/* ── Right Side – Avatar ───────────────────────────── */}
      <motion.div
        className="home-rhs"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="home-avatar-wrapper">
          <div className="home-avatar-ring">
            <img src={avatar} alt="Abadat Haque – Frontend Developer" />
          </div>
          <motion.span
            className="home-gold-dot"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
