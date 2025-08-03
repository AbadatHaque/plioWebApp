import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import {
  DesktopOutlined,
  ShopOutlined,
  GlobalOutlined,
  ProfileOutlined,
  RetweetOutlined,
} from "@ant-design/icons";

const services = [
  {
    title: "Landing Page Development",
    description:
      "Design and develop high-converting landing pages with responsive design, fast performance, and SEO.",
    details:
      "Tech: HTML, CSS, Tailwind, React, Next.js. Pricing: from $200. Optimized with image compression & minified code.",
    image: "/images/landing-page.jpg",
    icon: <GlobalOutlined className="text-blue-500 dark:text-blue-400" />,
  },
  {
    title: "Full Website Development",
    description:
      "End-to-end website builds using scalable architecture, API integrations, and engaging UIs.",
    details:
      "Tech: React, Next.js, Firebase, Tailwind, Node.js. Pricing: from $500. Optimized with lazy loading & CDN.",
    image: "/images/full-website.jpg",
    icon: <DesktopOutlined className="text-purple-500 dark:text-purple-400" />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Custom online stores with cart, payment integration, product management, and secure transactions.",
    details:
      "Tech: Shopify, Stripe, Firebase, React. Pricing: from $700. Optimization: API efficiency & security best practices.",
    image: "/images/ecommerce.jpg",
    icon: <ShopOutlined className="text-pink-500 dark:text-pink-400" />,
  },
  {
    title: "Portfolio Website Development",
    description:
      "Stylish portfolio sites to showcase your work and build personal brand identity.",
    details:
      "Tech: React, Tailwind, Next.js. Pricing: from $300. Optimized for SEO, speed, and mobile devices.",
    image: "/images/portfolio.jpg",
    icon: <ProfileOutlined className="text-green-500 dark:text-green-400" />,
  },
  {
    title: "Website Redesign & Optimization",
    description:
      "Give your website a fresh look, faster performance, and better accessibility.",
    details:
      "Tech: Tailwind, React, SEO tools. Pricing: custom. Enhancements: Code refactor, A11y, Lighthouse audits.",
    image: "/images/website-redesign.jpg",
    icon: <RetweetOutlined className="text-yellow-500 dark:text-yellow-400" />,
  },
];

const Services = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 dark:from-[#0e0e0e] dark:to-[#1e1e1e] px-6 py-16 text-black dark:text-white transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-wide dark:text-white"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        💼 My Freelance Services
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className="bg-white dark:bg-[#141414] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-300 overflow-hidden border dark:border-gray-700"
              bodyStyle={{ padding: "20px" }}
            >
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
                whileHover={{ scale: 1.02 }}
              />

              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl mr-2">{service.icon}</span>
                <h2 className="text-xl font-semibold text-center dark:text-white">
                  {service.title}
                </h2>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                {service.description}
              </p>

              <p className="text-gray-600 dark:text-gray-400 mt-3 text-xs text-center leading-relaxed">
                {service.details}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
          Want a custom solution or collaboration?
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 font-semibold shadow-md transition"
        >
          Let’s Talk
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Services;
