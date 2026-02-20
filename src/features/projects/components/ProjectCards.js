import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function ProjectCards(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="project-card-view glass-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px", transform: "translateZ(50px)" }}>
          <Card.Img 
            variant="top" 
            src={props.imgPath} 
            alt="card-img" 
            style={{ borderRadius: "15px", boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
          />
        </div>
        <Card.Body style={{ flex: 1, display: "flex", flexDirection: "column", transform: "translateZ(30px)" }}>
          <Card.Title className="purple" style={{ fontWeight: "700", fontSize: "1.4rem", marginBottom: "15px" }}>
            {props.title}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "0.95rem", color: "var(--text-dim)", flex: 1 }}>
            {props.description}
          </Card.Text>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ flex: 1 }}>
              <Button 
                variant="primary" 
                href={props.ghLink} 
                target="_blank" 
                className="fork-btn-inner"
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              >
                <BsGithub /> {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            </motion.div>

            {!props.isBlog && props.demoLink && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ flex: 1 }}>
                <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  className="fork-btn-inner"
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "var(--accent-gradient)" }}
                >
                  <CgWebsite /> {"Demo"}
                </Button>
              </motion.div>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
export default ProjectCards;


