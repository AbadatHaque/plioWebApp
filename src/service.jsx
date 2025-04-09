import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";

const services = [
  {
    title: "Landing Page Development",
    description: "Design and develop high-converting landing pages for your business. Includes responsive design, SEO optimization, and fast-loading performance.",
    details: "Technologies: HTML, CSS, Tailwind, React, Next.js. Benefits: Increased conversions, better user engagement. Pricing: Starts from $200. Optimization: Lightweight code, image compression, and minified CSS/JS for faster performance.",
    image: "/images/landing-page.jpg",
  },
  {
    title: "Full Website Development",
    description: "Build complete websites with modern frontend technologies like React and Tailwind CSS. Features include interactive UI, API integration, and scalable architecture.",
    details: "Technologies: React, Next.js, Tailwind CSS, Firebase, Node.js. Benefits: Scalable, fast, and modern UI. Pricing: Starts from $500. Optimization: Lazy loading, caching strategies, and CDN integration for speed.",
    image: "/images/full-website.jpg",
  },
  {
    title: "E-commerce Solutions",
    description: "Create customized and scalable e-commerce websites with seamless user experiences. Includes payment gateway integration, cart functionality, and product management.",
    details: "Technologies: Shopify, WooCommerce, React, Stripe, Firebase. Benefits: Secure transactions, user-friendly experience. Pricing: Starts from $700. Optimization: Database indexing, efficient API calls, and enhanced security features.",
    image: "/images/ecommerce.jpg",
  },
  {
    title: "Portfolio Website Development",
    description: "Develop personal and professional portfolio websites to showcase work and skills. Optimized for performance, mobile responsiveness, and eye-catching design.",
    details: "Technologies: React, Tailwind CSS, Next.js. Benefits: Professional branding, SEO-friendly. Pricing: Starts from $300. Optimization: Image optimization, SEO best practices, and fast-loading pages.",
    image: "/images/portfolio.jpg",
  },
  {
    title: "Website Redesign & Optimization",
    description: "Revamp existing websites with improved UI/UX, better performance, and accessibility enhancements. Includes code refactoring and SEO improvements.",
    details: "Technologies: React, Tailwind, SEO tools. Benefits: Faster load times, improved user experience. Pricing: Custom quotes. Optimization: Code refactoring, lazy loading, accessibility enhancements, and performance audits.",
    image: "/images/website-redesign.jpg",
  },
];

const Services = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-r from-blue-100 to-pink-200 p-10 text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg "
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="p-6 shadow-2xl rounded-3xl hover:shadow-3xl transition bg-white text-gray-900">
              <motion.img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-xl mb-4"
                whileHover={{ scale: 1.05 }}
              />
              <h2 className="text-2xl font-bold text-center">{service.title}</h2>
              <p className="text-gray-700 mt-3 text-center">{service.description}</p>
              <p className="text-gray-600 mt-2 text-sm text-center">{service.details}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
