"use client";
import React, { useEffect, useState, useId } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion"; // fixed import
import { cn } from "@/lib/utils"; // remove if unused

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: background || "#0d47a1" },
            },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: false },
                onHover: { enable: false },
                resize: true,
              },
            },
            particles: {
              number: {
                density: { enable: true, width: 400, height: 400 },
                value: particleDensity || (isMobile ? 150 : 1200),
              },
              color: { value: particleColor || "#ffffff" },
              shape: { type: "circle" },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: !isMobile,
                  speed: speed || 2,
                  startValue: "random",
                  sync: false,
                },
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
              },
              move: {
                enable: true,
                speed: isMobile ? 0.3 : 1,
                direction: "none",
                outModes: { default: "out" },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
