import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../../components/common/Particle";
import pdf from "../../../assets/NidhinPcCV.pdf";
import corevantCert from "../../../assets/experience/corevant-exp-cert.pdf";
import rootmentsCert from "../../../assets/experience/rootments-exp-cert.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// ── Local worker (served from public/) avoids CDN cold-start latency ─────────
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

// ── Certificate config ────────────────────────────────────────────────────────
const certificates = [
  {
    id: "corevant",
    company: "Corevant",
    title: "Experience Certificate",
    file: corevantCert,
    filename: "Corevant-Experience-Certificate.pdf",
  },
  {
    id: "rootments",
    company: "Rootments",
    title: "Experience Certificate",
    file: rootmentsCert,
    filename: "Rootments-Experience-Certificate.pdf",
  },
];

// ── Skeleton shown by react-pdf's loading prop ───────────────────────────────
function PdfSkeleton({ width }) {
  const h = width > 786 ? 900 : 320;
  const w = width > 786 ? 660 : 234;
  return (
    <div
      className="pdf-skeleton"
      style={{ width: w, height: h, margin: "0 auto" }}
    />
  );
}

// ── Single PDF viewer ─────────────────────────────────────────────────────────
function PdfViewer({ file, width }) {
  return (
    <Document
      file={file}
      className="d-flex justify-content-center"
      loading={<PdfSkeleton width={width} />}
      error={
        <div className="pdf-error">
          <span>⚠️ Could not load PDF preview</span>
        </div>
      }
    >
      <Page
        pageNumber={1}
        scale={width > 786 ? 1.7 : 0.6}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        loading={null}
      />
    </Document>
  );
}

// ── Certificate card ──────────────────────────────────────────────────────────
function CertificateViewer({ cert, width }) {
  return (
    <div className="cert-card">
      {/* Header */}
      <div className="cert-header">
        <div className="cert-icon">
          <MdWork size={28} />
        </div>
        <div>
          <h3 className="cert-company">{cert.company}</h3>
          <p className="cert-title-text">{cert.title}</p>
        </div>
      </div>

      {/* Download top */}
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Button
          variant="primary"
          href={cert.file}
          target="_blank"
          download={cert.filename}
          style={{ maxWidth: "260px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Certificate
        </Button>
      </Row>

      {/* PDF preview */}
      <Row className="resume" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <PdfViewer file={cert.file} width={width} />
      </Row>

      {/* Download bottom */}
      <Row style={{ justifyContent: "center", marginTop: "20px" }}>
        <Button
          variant="primary"
          href={cert.file}
          target="_blank"
          download={cert.filename}
          style={{ maxWidth: "260px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Certificate
        </Button>
      </Row>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ── Tab Navigation ── */}
        <Tab.Container defaultActiveKey="cv">

          {/* Tab Pills — z-index ensures clicks aren't blocked by Particle */}
          <Row
            style={{
              justifyContent: "center",
              marginBottom: "40px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Col xs="auto">
              <Nav className="resume-tabs" as="ul">
                <Nav.Item as="li">
                  <Nav.Link eventKey="cv" className="resume-tab-link">
                    📄 &nbsp;Resume / CV
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="certificates" className="resume-tab-link">
                    🏆 &nbsp;Experience Certificates
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

          <Tab.Content style={{ position: "relative", zIndex: 5 }}>

            {/* ── CV Tab ── */}
            <Tab.Pane eventKey="cv">
              <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  style={{ maxWidth: "250px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </Row>

              <Row className="resume">
                <PdfViewer file={pdf} width={width} />
              </Row>

              <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  style={{ maxWidth: "250px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </Row>
            </Tab.Pane>

            {/* ── Certificates Tab — mountOnEnter: PDFs load only when tab opens ── */}
            <Tab.Pane eventKey="certificates" mountOnEnter>
              <h1
                className="project-heading"
                style={{ textAlign: "center", marginBottom: "10px" }}
              >
                Experience <strong className="purple">Certificates</strong>
              </h1>
              <p
                style={{
                  textAlign: "center",
                  color: "#b0b0b0",
                  marginBottom: "50px",
                  fontSize: "1.1em",
                }}
              >
                Official certificates from my professional experience
              </p>

              {certificates.map((cert, idx) => (
                <div key={cert.id}>
                  <CertificateViewer cert={cert} width={width} />
                  {idx < certificates.length - 1 && (
                    <div className="cert-divider" />
                  )}
                </div>
              ))}
            </Tab.Pane>

          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
