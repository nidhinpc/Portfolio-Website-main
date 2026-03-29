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
  Star,
  Mail,
  Award
} from "lucide-react";

function NavBar({ load }) {
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
        className={`page-progress-bar ${load ? "linear-loader" : "scroll-progress"}`}
        style={{
          scaleX: load ? 1 : scaleX,
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
            <Link to="/" className="navbar-brand-container">
              {/* Spinning orbital ring, exactly like the preloader but scaled down */}
              <div className="nav-orbital-container">
                <motion.div
                  className="nav-ring nav-ring-outer"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="nav-ring nav-ring-inner"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Initials */}
                <div className="nav-initials">
                  NP
                </div>
              </div>
            </Link>
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
                { to: "/certificates", icon: <Award size={18} />, label: "Certificates" },
                { to: "/resume", icon: <FileText size={18} />, label: "Resume" },
                { to: "/contact", icon: <Mail size={18} />, label: "Contact" },
              ].map((item, index) => (
                <Nav.Item key={index}>
                  <Nav.Link 
                    {...(item.href ? { href: item.href } : { as: Link, to: item.to })}
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


