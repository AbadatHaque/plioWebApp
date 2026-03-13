import { motion } from "framer-motion";
import {
  GlobalOutlined,
  DesktopOutlined,
  ShopOutlined,
  ProfileOutlined,
  RetweetOutlined,
} from "@ant-design/icons";

const services = [
  {
    icon: <GlobalOutlined />,
    title: "Landing Page Development",
    price: "From $200",
    description:
      "Design and develop high-converting landing pages with responsive design, fast performance, and on-page SEO.",
    detail: "Tech: HTML, CSS, Tailwind, React, Next.js · Optimised with image compression & minified code.",
  },
  {
    icon: <DesktopOutlined />,
    title: "Full Website Development",
    price: "From $500",
    description:
      "End-to-end website builds using scalable architecture, API integrations, and engaging, modern UIs.",
    detail: "Tech: React, Next.js, Firebase, Tailwind, Node.js · Lazy loading & CDN delivery.",
  },
  {
    icon: <ShopOutlined />,
    title: "E-commerce Solutions",
    price: "From $700",
    description:
      "Custom online stores with cart, payment integration, product management, and secure transactions.",
    detail: "Tech: Shopify, Stripe, Firebase, React · API efficiency & security best practices.",
  },
  {
    icon: <ProfileOutlined />,
    title: "Portfolio Website",
    price: "From $300",
    description:
      "Stylish portfolio sites to showcase your work and build a strong personal brand identity.",
    detail: "Tech: React, Tailwind, Next.js · Optimised for SEO, speed, and mobile devices.",
  },
  {
    icon: <RetweetOutlined />,
    title: "Website Redesign & Optimisation",
    price: "Custom Pricing",
    description:
      "Give your existing website a fresh look, faster performance, and better accessibility standards.",
    detail: "Tech: Tailwind, React, SEO tools · Code refactor, A11y, Lighthouse audits.",
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Freelance Services</h2>

      <p style={{ textAlign: "center", color: "var(--mid-grey)", fontSize: "0.95rem", marginBottom: "2.5rem", maxWidth: 580, margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
        I offer a range of frontend and full-stack development services tailored
        to your needs. Every project is built with performance, accessibility, and
        clean code at its core.
      </p>

      <div className="services-grid">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="service-icon">{svc.icon}</div>
            <h3>{svc.title}</h3>
            <p style={{ marginBottom: "0.4rem" }}>{svc.description}</p>
            <span className="tag-pill" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
              {svc.price}
            </span>
            <p className="service-detail">{svc.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        style={{ textAlign: "center", marginTop: "3rem" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p style={{ fontSize: "1rem", color: "var(--mid-grey)", marginBottom: "1rem" }}>
          Want a custom solution or have something else in mind?
        </p>
        <a
          href="mailto:abadathaque@gmail.com"
          className="btn-classic"
        >
          Let's Talk
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Services;
