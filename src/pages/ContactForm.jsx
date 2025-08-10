import { Button, Form, Input, message } from "antd";
import { motion } from "framer-motion";
import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import emailjs from "emailjs-com";

export const ContactForm = () => {
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
      {/* <h2 style={{ marginBottom: "20px" }}>Contact Me</h2> */}
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Contact Me
      </h2>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Your Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Your Email" />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <Input.TextArea rows={4} placeholder="Your Message" />
        </Form.Item>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button type="primary" htmlType="submit" block>
            Send Message
          </Button>
        </motion.div>
      </Form>
    </motion.div>
  );
};
export default ContactForm;
