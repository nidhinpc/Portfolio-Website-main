import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.1,
            color: "#ffffff",
          },
          move: {
            direction: "none",
            speed: 0.8,
            enable: true,
            out_mode: "out",
          },
          size: {
            value: 1.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            onhover: {
              enable: true,
              mode: "repulse",
            }
          },
          modes: {
            push: {
              particles_nb: 1,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            }
          },
        },
        retina_detect: true,

      }}
    />
  );
}

export default Particle;
