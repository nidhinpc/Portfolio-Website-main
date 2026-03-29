import React from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// ── Local worker (served from public/) avoids CDN cold-start latency ─────────
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

// ── Skeleton shown by react-pdf's loading prop ───────────────────────────────
export function PdfSkeleton({ width }) {
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
export function PdfViewer({ file, width }) {
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
export function CertificateViewer({ cert, width, icon: Icon }) {
  return (
    <div className="cert-card">
      {/* Header */}
      <div className="cert-header">
        <div className="cert-icon">
          <Icon size={28} />
        </div>
        <div>
          <h3 className="cert-company">{cert.organization || cert.company}</h3>
          <p className="cert-title-text">{cert.title}</p>
        </div>
      </div>

      {/* Download top */}
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Button
          variant="primary"
          href={cert.file || cert.link}
          target="_blank"
          download={cert.filename || (cert.title + ".pdf")}
          style={{ maxWidth: "260px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Certificate
        </Button>
      </Row>

      {/* PDF preview */}
      <Row className="resume" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <PdfViewer file={cert.file || cert.link} width={width} />
      </Row>

      {/* Download bottom */}
      <Row style={{ justifyContent: "center", marginTop: "20px" }}>
        <Button
          variant="primary"
          href={cert.file || cert.link}
          target="_blank"
          download={cert.filename || (cert.title + ".pdf")}
          style={{ maxWidth: "260px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Certificate
        </Button>
      </Row>
    </div>
  );
}
