import React, { useState, useRef } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  User, 
  MessageSquare, 
  Tag, 
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
  Phone
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Particle from "../../../components/common/Particle";
import Magnetic from "../../../components/common/Magnetic";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // Correct details from CV
  const contactDetails = {
    email: "nidhinpc66666@gmail.com",
    phone: "+91 9846871894",
    whatsapp: "https://wa.me/919846871894",
    linkedin: "https://www.linkedin.com/in/nidhinpc316",
    github: "https://github.com/nidhinpc",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_y232zg4";
    const TEMPLATE_ID = "template_5gye54a";
    const PUBLIC_KEY = "Z-BRyx-TzikumV2mu";

    if (SERVICE_ID === "YOUR_SERVICE_ID") {
      toast.info("Please configure EmailJS IDs", { theme: "dark" });
      setLoading(false);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          toast.success("Message sent!", { theme: "dark" });
          e.target.reset();
          setLoading(false);
      }, () => {
          toast.error("Failed to send.", { theme: "dark" });
          setLoading(false);
      });
  };

  const socialLinks = [
    { icon: <Github size={22} />, link: contactDetails.github, label: "Github" },
    { icon: <Linkedin size={22} />, link: contactDetails.linkedin, label: "LinkedIn" },
    { icon: <Phone size={22} />, link: contactDetails.whatsapp, label: "WhatsApp" },
    { icon: <Mail size={22} />, link: `mailto:${contactDetails.email}`, label: "Email" },
  ];

  return (
    <Container fluid className="contact-v3-section">
      <Particle />
      <ToastContainer />
      
      {/* Decorative background elements */}
      <div className="v3-blob v3-blob-1"></div>
      <div className="v3-blob v3-blob-2"></div>
      
      <Container className="contact-v3-container">
        <Row className="mb-5">
          <Col lg={12}>
            <div className="contact-v3-header">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="v3-tag"
              >
                Let's Build Something Together
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="v3-title"
              >
                Available for <br />
                <span className="purple-gradient-text">Creative Projects</span>
              </motion.h1>
            </div>
          </Col>
        </Row>

        <Row className="g-5">
          {/* Left Column: Info & Socials */}
          <Col lg={4}>
            <div className="v3-info-stack">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="v3-info-item"
              >
                <h6>Got a question?</h6>
                <a href={`mailto:${contactDetails.email}`} className="v3-email-link">
                  {contactDetails.email}
                  <ArrowRight size={20} className="ms-2" />
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="v3-social-section"
              >
                <h6>Follow My Journey</h6>
                <div className="v3-social-list">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      whileHover={{ scale: 1.1, color: "var(--primary)" }}
                      className="v3-social-link"
                    >
                      {social.icon}
                      <span>{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </Col>

          {/* Right Column: Form */}
          <Col lg={8}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="v3-form-card"
            >
              <Form ref={form} onSubmit={sendEmail} className="v3-contact-form">
                <Row>
                  <Col md={12}>
                    <div className="v3-input-wrapper">
                      <label>Your Name</label>
                      <Form.Control 
                        type="text" 
                        name="user_name" 
                        placeholder="What's your name?" 
                        required 
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="v3-input-wrapper">
                      <label>Your Email</label>
                      <Form.Control 
                        type="email" 
                        name="user_email" 
                        placeholder="Where can I reach you?" 
                        required 
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="v3-input-wrapper">
                      <label>Subject</label>
                      <Form.Control 
                        type="text" 
                        name="subject" 
                        placeholder="How can I help?" 
                        required 
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="v3-input-wrapper">
                      <label>Message</label>
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        name="message" 
                        placeholder="Tell me about your project..." 
                        required 
                      />
                    </div>
                  </Col>
                </Row>

                <div className="v3-form-footer mt-4">
                  <Magnetic>
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="v3-submit-btn"
                    >
                      {loading ? "Sending..." : (
                        <>
                          <span>Send Message</span>
                          <div className="btn-circle">
                            <Send size={16} />
                          </div>
                        </>
                      )}
                    </button>
                  </Magnetic>
                </div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
