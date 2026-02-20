import React from "react";
import { motion } from "framer-motion";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {props.load && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "50px",
            height: "50px",
            background: "var(--accent-gradient)",
            borderRadius: "10px",
          }}
        />
      )}
    </div>
  );
}

export default Pre;

