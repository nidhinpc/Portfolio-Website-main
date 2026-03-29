import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Particle from "../../../components/common/Particle";
import { motion } from "framer-motion";
import { MdSchool, MdWork } from "react-icons/md";
import { CertificateViewer } from "../../resume/components/SharedCertificateComponents";

// Import Assets
import bcaPdf from "../../../assets/educational/bca/university_certificate.pdf";
import flutterPdf from "../../../assets/educational/course/android_flutter_app_development_certificate.pdf";
import nactetPdf from "../../../assets/educational/course/NACTET.pdf";
import corevantCert from "../../../assets/experience/corevant-exp-cert.pdf";
import rootmentsCert from "../../../assets/experience/rootments-exp-cert.pdf";

function Certificates() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const certificateData = {
    educational: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        organization: "Mahatma Gandhi University",
        description: "Successfully completed the degree program, gaining a strong foundation in computer science, software development, and information technology.",
        link: bcaPdf
      }
    ],
    professional: [
      {
        title: "Android & Flutter App Development",
        organization: "Professional Training Course",
        description: "Comprehensive training in building cross-platform mobile applications using Flutter and Dart, covering UI/UX design, state management, and API integration.",
        link: flutterPdf
      },
      {
        title: "NACTET Professional Certificate",
        organization: "National Council for Technology and Training",
        description: "Professional certification validating technical skills and proficiency in advanced technology domains.",
        link: nactetPdf
      }
    ],
    experience: [
      {
        id: "corevant",
        company: "Corevant",
        title: "Experience Certificate",
        file: corevantCert,
        description: "Official certificate verifying my professional contributions and experience at Corevant.",
        filename: "Corevant-Experience-Certificate.pdf",
      },
      {
        id: "rootments",
        company: "Rootments",
        title: "Experience Certificate",
        file: rootmentsCert,
        description: "Official certificate verifying my professional contributions and experience at Rootments.",
        filename: "Rootments-Experience-Certificate.pdf",
      }
    ]
  };

  const TabLink = ({ eventKey, icon, label }) => (
    <Nav.Item as="li">
      <Nav.Link eventKey={eventKey} className="resume-tab-link">
        {icon} &nbsp; {label}
      </Nav.Link>
    </Nav.Item>
  );

  const CertificateList = ({ data, icon }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {data.map((cert, index) => (
        <div key={index}>
          <CertificateViewer 
            cert={{
              ...cert,
              company: cert.organization || cert.company,
              file: cert.link || cert.file
            }} 
            width={width} 
            icon={icon} 
          />
          {index < data.length - 1 && (
            <div className="cert-divider" />
          )}
        </div>
      ))}
    </motion.div>
  );

  return (
    <Container fluid className="resume-section" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <h1 className="project-heading">
            My <span className="purple">Certifications</span>
          </h1>
          <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "1.1rem" }}>
            Official credentials documenting my <strong className="purple">educational and professional</strong> milestones.
          </p>
        </motion.div>

        <Tab.Container defaultActiveKey="educational">
          <Row style={{ justifyContent: "center", marginBottom: "40px", position: "relative", zIndex: 10 }}>
            <Col xs="auto">
              <Nav className="resume-tabs" as="ul">
                <TabLink eventKey="educational" icon="🎓" label="Educational" />
                <TabLink eventKey="professional" icon="🏆" label="Professional" />
                <TabLink eventKey="experience" icon="💼" label="Experience" />
              </Nav>
            </Col>
          </Row>

          <Tab.Content style={{ position: "relative", zIndex: 5 }}>
            <Tab.Pane eventKey="educational">
              <CertificateList data={certificateData.educational} icon={MdSchool} />
            </Tab.Pane>
            <Tab.Pane eventKey="professional" mountOnEnter>
              <CertificateList data={certificateData.professional} icon={MdSchool} />
            </Tab.Pane>
            <Tab.Pane eventKey="experience" mountOnEnter>
              <CertificateList data={certificateData.experience} icon={MdWork} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </Container>
  );
}

export default Certificates;
