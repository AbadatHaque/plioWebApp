import { Button, Form, Input, message } from "antd";
import { motion } from "framer-motion";
import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    emailjs
      .send(
        "service_4te00gg",
        "template_mv7sfwj",
        { name: values.name, email: values.email, message: values.message },
        "18xrpJpKfywJUai4S"
      )
      .then(() => {
        message.success("Message sent successfully!");
        form.resetFields();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        message.error("Failed to send message. Please try again.");
      });
  };

  return (
    <motion.div
      className="contact-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Get In Touch</h2>

      <p style={{ textAlign: "center", color: "var(--mid-grey)", fontSize: "0.95rem", marginBottom: "2rem", lineHeight: 1.7 }}>
        Have a project in mind or want to collaborate? Fill in the form
        below and I'll get back to you as soon as possible.
      </p>

      <div className="contact-card">
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input prefix={<UserOutlined style={{ color: "var(--light-grey)" }} />} placeholder="John Doe" size="large" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
          >
            <Input prefix={<MailOutlined style={{ color: "var(--light-grey)" }} />} placeholder="hello@example.com" size="large" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea
              prefix={<MessageOutlined />}
              rows={5}
              placeholder="Tell me about your project..."
              size="large"
            />
          </Form.Item>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              style={{
                background: "var(--navy)",
                borderColor: "var(--navy)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                letterSpacing: "0.05em",
                height: 48,
              }}
            >
              Send Message
            </Button>
          </motion.div>
        </Form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
