import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiFirebase, SiFlutter, SiDart, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

function Techstack() {
  const icons = [
    <CgCPlusPlus />, <DiHtml5 />, <DiCss3 />, <DiJavascript1 />, 
    <SiDart />, <SiFlutter />, <SiExpress />, <DiReact />, 
    <SiFirebase />, <DiGit />
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((icon, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, color: "var(--primary-color)" }}
          >
            {icon}
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

