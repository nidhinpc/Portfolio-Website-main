import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../../components/common/Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../../assets/about.png";
import Toolstack from "./Toolstack";

import { motion } from "framer-motion";

function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Row style={{ justifyContent: "center", alignItems: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "50px", paddingBottom: "50px" }}
              className="about-img text-center"
            >
              <div className="about-image-wrapper">
                <div className="about-image-glow"></div>
                <motion.img
                  src={laptopImg}
                  alt="about"
                  className="img-fluid"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ borderRadius: "20px", maxWidth: "450px" }}
                />
              </div>
            </Col>
          </Row>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Github />
        </motion.div>
      </Container>
    </Container>
  );
}

export default About;
