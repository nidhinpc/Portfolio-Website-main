import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../../components/common/Particle";
import pantho from "../../../assets/Projects/Pantho.png";
import vitara from "../../../assets/Projects/vitara-app.png";
import rootments from "../../../assets/Projects/rootments-app.png";
import { motion } from "framer-motion";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const projectData = [
    {
      imgPath: pantho,
      title: "ProFix - Home Services Booking",
      description: "A comprehensive on-demand service booking platform designed to connect users with skilled professionals. Effortlessly schedule AC mechanics, residential plumbing, electrical repairs, and other home maintenance tasks globally.",
      ghLink: "https://github.com/nidhinpc"
    },
    {
      imgPath: vitara,
      title: "Vitara Gold :Savings into Gold",
      description: "Vitara Gold is a digital platform that allows users to invest in 24K digital gold directly from their smartphone. The app provides a simple way to buy, hold, and manage gold without the need for physical storage.",
      playstoreLink: "https://play.google.com/store/apps/details?id=platform.corevant.vitara_gold"
    },
    {
      imgPath: rootments,
      title: "ROOTMENTS LEARN",
      description: "ROOTMENTS LEARN is the ultimate app for ROOTMENTS employees to efficiently manage their profiles, update branch details, and submit lead information. This app is designed to streamline your workflow, ensuring you stay connected and productive.",
      playstoreLink: "https://play.google.com/store/apps/details?id=com.rootments.rootments_sales"
    }
  ];

  return (
    <Container fluid className="project-section" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="project-heading">
            My <span className="purple">Portfolio</span> Showroom
          </h1>
          <p style={{ color: "var(--text-dim)", fontSize: "1.1rem" }}>
            Exploring the intersection of <strong className="purple">design</strong> and <strong className="purple">engineering</strong>.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {projectData.map((project, index) => (
              <Col lg={4} md={6} key={index} className="project-card">
                <motion.div variants={itemVariants}>
                  <ProjectCard
                    imgPath={project.imgPath}
                    isBlog={false}
                    title={project.title}
                    description={project.description}
                    ghLink={project.ghLink}
                    demoLink={project.demoLink}
                    playstoreLink={project.playstoreLink}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;


