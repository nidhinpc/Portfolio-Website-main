import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Home, 
  User, 
  Code, 
  FileText, 
  Github, 
  Star 
} from "lucide-react";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, var(--primary), var(--secondary), var(--accent))",
          transformOrigin: "0%",
          zIndex: 10001
        }}
      />
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex">
            <motion.strong 
              className="main-name" 
              style={{ fontSize: "1.8rem" }}
              whileHover={{ scale: 1.1 }}
            >
              NIDHIN.
            </motion.strong>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              {[
                { to: "/", icon: <Home size={18} />, label: "Home" },
                { to: "/about", icon: <User size={18} />, label: "About" },
                { to: "/project", icon: <Code size={18} />, label: "Projects" },
                { to: "/resume", icon: <FileText size={18} />, label: "Resume" },
              ].map((item, index) => (
                <Nav.Item key={index}>
                  <Nav.Link 
                    as={Link} 
                    to={item.to} 
                    onClick={() => updateExpanded(false)}
                    style={{ position: "relative" }}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {React.cloneElement(item.icon, { style: { marginRight: "8px" } })}
                      {item.label}
                    </motion.div>
                  </Nav.Link>
                </Nav.Item>
              ))}

              <Nav.Item className="fork-btn">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    href="https://github.com/nidhinpc"
                    target="_blank"
                    className="fork-btn-inner glass-card"
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "10px",
                      padding: "8px 20px",
                      background: "rgba(255,255,255,0.05)"
                    }}
                  >
                    <Github size={20} />
                    <Star size={18} fill="currentColor" />
                  </Button>
                </motion.div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;


