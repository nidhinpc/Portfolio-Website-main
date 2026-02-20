import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../../components/common/Particle";
import emotion from "../../../assets/Projects/emotion.png";
import movie from "../../../assets/Projects/movie-app.png";
import budgetmanagement from "../../../assets/Projects/bankingapp-1.png";
import islamicapp from "../../../assets/Projects/islamicapp.png";
import pantho from "../../../assets/Projects/Pantho.png";
import ecommerce from "../../../assets/Projects/ecommerce.png";
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
      imgPath: islamicapp,
      title: "Quran Mp3 & Qibla Finder",
      description: "A comprehensive Islamic utility app featuring high-quality audio recitations, accurate prayer timings, and a precise Qibla compass. Built with production-grade Flutter patterns.",
      ghLink: "https://github.com/codexahmar/Islamic-App",
      demoLink: "https://play.google.com/store/apps/details?id=com.islamicazan.shzoneabbe"
    },
    {
      imgPath: budgetmanagement,
      title: "True Wallet",
      description: "Next-gen fintech application with real-time expense tracking, automated budgeting, and secure Firebase integration. Focused on clean architecture and data visualization.",
      ghLink: "https://github.com/codexahmar/InternIntelligence_BankingApp"
    },
    {
      imgPath: pantho,
      title: "Pantho – Blood Donation",
      description: "A community-driven platform connecting donors and recipients. Features real-time requests, donor tracking, and a highly responsive Flutter UI with GetX state management.",
      ghLink: "https://github.com/codexahmar/Pantho-Freelance"
    },
    {
      imgPath: ecommerce,
      title: "ShopEase – E-commerce",
      description: "A premium shopping experience with smooth transitions, Stripe payment integration, and dark mode support. Showcasing pixel-perfect UI/UX implementation.",
      ghLink: "https://github.com/codexahmar/InternIntelligence_ecommerceApp"
    },
    {
      imgPath: movie,
      title: "CineTrack - Movie Hub",
      description: "Discover trending cinema using TMDb API. Implements advanced filtering, personalized watchlists, and hero animations for a cinematic browsing feel.",
      ghLink: "https://github.com/codexahmar/InternIntelligence_Movie-App"
    },
    {
      imgPath: emotion,
      title: "AI Mood Detector",
      description: "Leveraging Google ML Kit for real-time facial analysis. This app detects emotions and head orientation with sub-second latency on mobile devices.",
      ghLink: "https://github.com/codexahmar/InternIntelligence_FaceDetection"
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


