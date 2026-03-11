import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Pre({ load }) {
  return (
    <AnimatePresence>
      {load && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999999,
            background: "radial-gradient(ellipse at center, #0a0520 0%, #030014 70%)",
            overflow: "hidden",
          }}
        >
          {/* Background floating orbs */}
          <div className="preloader-orbs">
            <motion.div
              className="preloader-orb preloader-orb-1"
              animate={{
                x: [0, 80, -40, 0],
                y: [0, -60, 40, 0],
                scale: [1, 1.3, 0.8, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="preloader-orb preloader-orb-2"
              animate={{
                x: [0, -60, 50, 0],
                y: [0, 50, -30, 0],
                scale: [1, 0.8, 1.2, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Spinning orbital ring */}
          <div className="preloader-center">
            <motion.div
              className="preloader-ring preloader-ring-outer"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="preloader-ring preloader-ring-inner"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Initials */}
            <motion.div
              className="preloader-initials"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              NP
            </motion.div>
          </div>

          {/* Name */}
          <motion.p
            className="preloader-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            NIDHIN PC
          </motion.p>

          {/* Progress bar */}
          <div className="preloader-progress-track">
            <motion.div
              className="preloader-progress-bar"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Pre;
