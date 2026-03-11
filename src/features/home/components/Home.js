import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../../assets/home-main.png";
import Particle from "../../../components/common/Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

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
                <motion.h1 
                  style={{ paddingBottom: 15 }} 
                  className="heading"
                  whileHover={{ scale: 1.02 }}
                >
                  Hi There!{" "}
                  <motion.span 
                    className="wave" 
                    role="img" 
                    aria-labelledby="wave"
                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                  >
                    👋🏻
                  </motion.span>
                </motion.h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> NIDHIN PC</strong>
                </h1>

                <motion.div 
                  className="type-wrapper"
                  style={{ padding: 50, textAlign: "left" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <Type />
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
              <motion.div
                style={{ y: y1 }}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "550px", filter: "drop-shadow(0 0 30px var(--primary-glow))" }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;


