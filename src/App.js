import React, { useState, useEffect } from "react";
import Preloader from "./components/common/Pre";
import Navbar from "./components/layout/Navbar";
import Home from "./features/home/components/Home";
import About from "./features/about/components/About";
import Projects from "./features/projects/components/Projects";
import Footer from "./components/layout/Footer";
import Resume from "./features/resume/components/ResumeNew";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion, useSpring, useMotionValue } from "framer-motion";
import ScrollToTop from "./components/common/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import "./styles/App.css";
import "./styles/index.css";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        position: "fixed",
        top: 0,
        left: 0,
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: "2px solid var(--primary)",
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "difference"
      }}
    />
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/project" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div 
        className="App" 
        id={load ? "no-scroll" : "scroll"} 
        style={{ 
          cursor: "none",
          backgroundColor: "#030014", /* Hardcoded safety */
          minHeight: "100vh"
        }}
      >
        <CustomCursor />
        <Navbar load={load} />
        <ScrollToTop />
        <main style={{ minHeight: "90vh", background: "transparent" }}>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


