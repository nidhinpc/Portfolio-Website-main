import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../assets/avatar.png";
import Tilt from "react-parallax-tilt";
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
              <h1 style={{ fontSize: "2.8em", fontWeight: "800" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                Need a <span className="purple">stunning, high-performance</span> mobile app? I’ve got you
                covered. 💼📱
                <br />
                <br />
                I'm a professional
                <i>
                  <b className="purple"> Flutter Developer </b>
                </i>
                who builds pixel-perfect, cross-platform mobile apps for both
                Android and iOS.
                <br />
                <br />I specialize in crafting responsive UIs and scalable apps
                using&nbsp;
                <i>
                  <b className="purple">Flutter & Dart</b>
                </i>
                , and integrate backend features with
                <b className="purple"> Firebase</b> for real-time performance.
                <br />
                <br />
                Whether you’re a startup or a business, I can bring your ideas to
                life with <span className="purple">clean code</span> and <span className="purple">beautiful UI/UX</span> — on time and budget.
                <br />
                <br />
                Let’s collaborate and build something impactful. 🚀
              </p>
            </motion.div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.1}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring", damping: 12 }}
                viewport={{ once: true }}
              >
                <img 
                  src={myImg} 
                  className="img-fluid" 
                  alt="avatar" 
                  style={{ 
                    borderRadius: "50%", 
                    border: "4px solid var(--primary-glow)", 
                    padding: "10px",
                    boxShadow: "0 0 40px var(--primary-glow)"
                  }}
                />
              </motion.div>
            </Tilt>
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

