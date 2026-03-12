import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  // SiSlack,
  // SiVercel,
  // SiMacos,
  SiAndroidstudio,
  SiFigma,
  SiGithub,
} from "react-icons/si";

import { motion } from "framer-motion";

function Toolstack() {
  const tools = [
    <SiVisualstudiocode />,
    <SiAndroidstudio />,
    <SiPostman />,
    <SiFigma />,
    <SiGithub />,
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((icon, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            viewport={{ once: true }}
          >
            {icon}
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
