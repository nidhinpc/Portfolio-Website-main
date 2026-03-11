import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../../assets/home-main.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

function Home2() {
  const socialVariants = {
    hover: { y: -8, scale: 1.15, transition: { type: "spring", stiffness: 400, damping: 10 } }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 style={{ fontSize: "2.8em", fontWeight: "800", marginBottom: "30px" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              
              <div className="home-about-body" style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "var(--text-dim)" }}>
                <p>
                  I am a professional <b className="purple">Mobile Application Developer</b> specializing in creating pixel-perfect, cross-platform mobile experiences for iOS and Android. With a strong foundation in <b className="purple">Flutter & Dart</b>, I engineer applications that are as performant as they are visually engaging.
                </p>
                <p className="mt-4">
                  My architecture focuses on clean code, scalable MVVM/Clean Architecture patterns, and seamless integrations with cloud services like <b className="purple">Firebase</b>. Whether it’s real-time chat, e-commerce, or complex fintech platforms, I build solutions tailored for the modern digital ecosystem.
                </p>
                
                {/* Quick Facts Section */}
                <Row className="quick-facts mt-5 mb-4 g-4">
                  <Col sm={4}>
                    <div className="fact-glass-card p-3 text-center">
                      <h3 className="purple fw-bold mb-1">1+</h3>
                      <p className="mb-0 text-sm">Years Experience</p>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="fact-glass-card p-3 text-center">
                      <h3 className="purple fw-bold mb-1">10+</h3>
                      <p className="mb-0 text-sm">Projects Delivered</p>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="fact-glass-card p-3 text-center">
                      <h3 className="purple fw-bold mb-1">100%</h3>
                      <p className="mb-0 text-sm">Store Approval Rate</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </motion.div>
          </Col>
          <Col md={4} className="myAvtar">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="home-image-wrapper">
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid home-hero-img"
                />
                <div className="home-image-glow"></div>
              </div>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 style={{ marginTop: "50px" }}>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                {[
                  { icon: <AiFillGithub />, link: "https://github.com/nidhinpc" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/nidhinpc316/" },
                  { icon: <AiFillInstagram />, link: "https://www.instagram.com/_nidhin_p_c_/" },
                  { icon: <AiOutlineMail />, link: "mailto:nidhinpc66666@gmail.com" },
                ].map((social, index) => (
                  <motion.li 
                    key={index} 
                    className="social-icons"
                    variants={socialVariants}
                    whileHover="hover"
                  >
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons glass-card"
                      style={{ fontSize: "1.6em", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      {social.icon}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

