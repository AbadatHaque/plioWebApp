import { useState, useEffect, lazy, Suspense } from "react";
import { Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactForm = lazy(() => import("./pages/ContactForm"));
const SkillPage = lazy(() => import("./pages/SkillPage"));
const Blog = lazy(() => import("./pages/Blog"));
const Services = lazy(() => import("./service"));

const NAV_ITEMS = [
  { key: "home", label: "Home" },
  { key: "service", label: "Services" },
  { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
  { key: "skill", label: "Skills" },
  { key: "contact", label: "Contact" },
  { key: "blog", label: "Blog" },
];

/* ── tiny loading fallback ────────────────────────────────── */
const PageFallback = () => (
  <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
    {[0, 1, 2].map(i => (
      <span key={i} style={{
        width: 9, height: 9, borderRadius: "50%",
        background: "var(--gold)", opacity: 0.3,
        animation: `pulseDot 1s ${i * 0.2}s infinite alternate`,
      }} />
    ))}
    <style>{`@keyframes pulseDot { to { opacity: 1; transform: scale(1.4); } }`}</style>
  </div>
);

/* ── Sun / Moon icons (inline SVG so no extra dep) ────────── */
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════ */
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  /* Dark-mode state – persist to localStorage */
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("portfolio-theme") === "dark"; }
    catch { return false; }
  });

  /* Apply theme to <html> element */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); }
    catch { }
  }, [dark]);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll to top on page change */
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [currentPage]);

  const navigate = (page) => { setCurrentPage(page); setDrawerOpen(false); };
  const toggleDark = () => setDark(d => !d);

  const renderPage = () => {
    switch (currentPage) {
      case "about": return <About />;
      case "projects": return <ProjectsPage />;
      case "contact": return <ContactForm />;
      case "skill": return <SkillPage />;
      case "service": return <Services />;
      case "blog": return <Blog />;
      default: return <Home />;
    }
  };

  return (
    <div style={{ background: "var(--page-bg)", minHeight: "100vh", display: "flex", flexDirection: "column", transition: "background 0.3s ease" }}>

      {/* ── Navbar ─────────────────────────────────────────── */}
      <motion.nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* Brand */}
        <button className="navbar-brand" onClick={() => navigate("home")}>
          Aba<span>dat</span>
        </button>

        {/* Desktop links + toggle */}
        <div className="navbar-right">
          <ul className="navbar-links">
            {NAV_ITEMS.map(({ key, label }) => (
              <li key={key}>
                <button
                  className={currentPage === key ? "active" : ""}
                  onClick={() => navigate(key)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <motion.button
            className="theme-toggle"
            onClick={toggleDark}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            whileTap={{ scale: 0.88 }}
            aria-label="Toggle dark mode"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </motion.button>

          <button
            className="mobile-menu-btn"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            style={{ fontSize: "1.4rem", marginLeft: "0.5rem" }}
          >
            <MenuOutlined />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ──────────────────────────────────── */}
      <Drawer
        title={
          <span style={{ fontFamily: "var(--font-serif)", color: "var(--nav-brand)", fontSize: "1.2rem" }}>
            Aba<span style={{ color: "var(--gold)" }}>dat</span>
          </span>
        }
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={240}
        closeIcon={<CloseOutlined style={{ color: "var(--text-secondary)" }} />}
        styles={{ body: { padding: "1.2rem 1rem", background: "var(--cream-dark)" }, header: { background: "var(--cream-dark)", borderBottom: "1px solid var(--border)" } }}
      >
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          {NAV_ITEMS.map(({ key, label }) => (
            <li key={key}>
              <button
                onClick={() => navigate(key)}
                style={{
                  width: "100%", textAlign: "left",
                  background: currentPage === key ? "var(--gold)" : "transparent",
                  color: currentPage === key ? "#fff" : "var(--text-primary)",
                  border: "none",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.65rem 1rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "var(--transition)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </Drawer>

      {/* ── Page Content ───────────────────────────────────── */}
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="page-wrapper"
          >
            <Suspense fallback={<PageFallback />}>
              {renderPage()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="site-footer">
        © {new Date().getFullYear()} &nbsp;
        <strong>Abadat Haque</strong>
        &nbsp;· All Rights Reserved
      </footer>
    </div>
  );
};

export default App;
