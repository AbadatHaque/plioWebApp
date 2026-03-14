import { motion } from "framer-motion";

export default function Blog() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: "center", padding: "4rem 1rem" }}
    >
      <h1 className="section-title">My Blog</h1>
      <p style={{ color: "var(--mid-grey)", fontSize: "1.1rem" }}>
        Sharing thoughts on React, Design, and the Future of Web Development.
      </p>
      <div style={{ marginTop: "2rem", padding: "2rem", border: "1px dashed var(--border)", borderRadius: "var(--radius-md)" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--navy)" }}>
          Coming Soon... 🚀
        </p>
      </div>
    </motion.div>
  );
}
