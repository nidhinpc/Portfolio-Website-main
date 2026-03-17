import React from "react";
import Card from "react-bootstrap/Card";
import { FiCode, FiZap, FiLayers, FiServer } from "react-icons/fi";
import { motion } from "framer-motion";

function AboutCard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const coreSkills = [
    { label: "Advanced Flutter & Dart", icon: <FiZap /> },
    { label: "Clean Architecture", icon: <FiLayers /> },
    { label: "CI/CD & Deployment", icon: <FiServer /> },
    { label: "REST & Financial API", icon: <FiCode /> },
  ];

  return (
    <Card className="quote-card-view glass-card" style={{ border: "none" }}>
      <Card.Body style={{ padding: "40px 30px" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Intro Section */}
          <motion.div variants={itemVariants} style={{ marginBottom: "35px" }}>
            <h2
              style={{
                fontSize: "1.8em",
                fontWeight: "800",
                marginBottom: "15px",
              }}
            >
              Crafting Digital <span className="purple">Excellence</span>
            </h2>
            <p
              style={{
                textAlign: "justify",
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "1.05rem",
                lineHeight: "1.7",
              }}
            >
              I am a dedicated{" "}
              <span className="purple">Mobile Application Developer</span>{" "}
              specializing in high-performance solutions. With a focus on{" "}
              <span className="purple">clean code</span> and
              <span className="purple"> intuitive UX</span>, I transform complex
              requirements into seamless mobile experiences.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} style={{ marginTop: "40px" }}>
            <h3
              style={{
                fontSize: "1.3em",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Core <span className="purple">Competencies</span>
            </h3>
            <div className="about-skill-grid">
              {coreSkills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill.icon}
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievement Highlight */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: "40px",
              padding: "20px",
              background: "rgba(192, 132, 252, 0.05)",
              borderRadius: "15px",
              borderLeft: "4px solid var(--primary)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontStyle: "italic",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              Successfully published <span className="purple">Vitara Gold</span>{" "}
              and orchestrated dozens of production releases with clinical
              precision.
            </p>
          </motion.div>

          {/* Footer Quote */}
          <motion.div
            variants={itemVariants}
            style={{ marginTop: "45px", textAlign: "center" }}
          >
            <p
              style={{
                color: "var(--primary)",
                fontStyle: "italic",
                fontSize: "1.1em",
                marginBottom: "8px",
              }}
            >
              "Efficiency in code, impact in reality."
            </p>
            <footer className="blockquote-footer" style={{ border: "none" }}>
              Nidhin PC
            </footer>
          </motion.div>
        </motion.div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
