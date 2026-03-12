import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Github, Linkedin, Instagram } from "lucide-react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer glass-card" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", borderRadius: "0" }}>
      <Row className="align-items-center">
        <Col md="4" className="footer-copywright">
          <h3 style={{ fontSize: "0.9rem", opacity: 0.8 }}>Designed & Developed by Nidhin PC</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3 style={{ fontSize: "0.9rem", opacity: 0.8 }}>Copyright © {year} Nidhin PC | Flutter Developer</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons" style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: 0 }}>
            <li className="social-icons">
              <a
                href="https://github.com/nidhinpc"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nidhinpc316/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_nidhin_p_c_/profilecard/?igsh=am5uaXMzanVhczlh"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

