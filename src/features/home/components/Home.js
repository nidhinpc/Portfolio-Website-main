import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../assets/avatar.png";
import Tilt from "react-parallax-tilt";
import Particle from "../../../components/common/Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{ overflow: "hidden" }}>
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <motion.div
                initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Premium Introduction */}
                <motion.h1 
                  className="heading-name"
                  style={{ 
                    fontSize: "3.5rem", 
                    fontWeight: "800", 
                    letterSpacing: "-1px", 
                    marginBottom: "20px" 
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span style={{ color: "white", opacity: 0.9 }}>I am </span>
                  <strong className="purple" style={{ textShadow: "0 0 20px rgba(192, 132, 252, 0.4)" }}>
                    Nidhin PC
                  </strong>
                </motion.h1>

                <motion.div 
                  className="type-wrapper"
                  style={{ padding: "20px 0 20px 50px", textAlign: "left" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <Type />
                </motion.div>

                <motion.p
                  style={{ 
                    paddingLeft: "50px", 
                    color: "rgba(255, 255, 255, 0.7)", 
                    fontSize: "1.2rem", 
                    lineHeight: "1.6",
                    maxWidth: "600px",
                    marginBottom: "30px"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Passionate Junior Mobile Application Developer specializing in 
                  <span className="purple"> pixel-perfect</span> and 
                  <span className="purple"> high-performance</span> cross-platform mobile solutions.
                </motion.p>

                {/* Hero Stats/Badges */}
                <motion.div
                  style={{ paddingLeft: "50px", display: "flex", gap: "25px", marginBottom: "40px", flexWrap: "wrap" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className="hero-stat">
                    <span className="purple fw-bold" style={{ fontSize: "1.4rem" }}>2024</span>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>Starting Year</p>
                  </div>
                  <div style={{ width: "1px", background: "rgba(192, 132, 252, 0.3)", height: "40px" }} className="d-none d-sm-block"></div>
                  <div className="hero-stat">
                    <span className="purple fw-bold" style={{ fontSize: "1.4rem" }}>Dubai, UAE</span>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>Location</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8, type: "spring", damping: 15 }}
                  style={{ paddingLeft: "50px", display: "flex", gap: "20px", marginTop: "30px" }}
                >
                  <Link to="/project" className="glass-card" style={{ 
                    padding: "15px 35px", 
                    textDecoration: "none", 
                    color: "white",
                    fontWeight: "600",
                    fontSize: "1.2em",
                    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                    boxShadow: "0 10px 20px rgba(192, 132, 252, 0.3)"
                  }}>
                    Explore Projects
                  </Link>
                  <Link to="/about" className="glass-card" style={{ 
                    padding: "15px 35px", 
                    textDecoration: "none", 
                    color: "white",
                    fontWeight: "600",
                    fontSize: "1.2em",
                    border: "2px solid var(--primary)",
                    background: "transparent"
                  }}>
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.1}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, type: "spring", damping: 12 }}
                >
                  <img 
                    src={myImg} 
                    className="img-fluid" 
                    alt="avatar" 
                    style={{ 
                      borderRadius: "50%", 
                      border: "4px solid var(--primary-glow)", 
                      padding: "10px",
                      boxShadow: "0 0 40px var(--primary-glow)",
                      maxWidth: "500px",
                      width: "100%"
                    }}
                  />
                </motion.div>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;


