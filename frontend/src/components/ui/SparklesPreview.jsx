"use client";
import React from "react";
import { SparklesCore } from "./parkles";
import { motion } from "framer-motion";

export function SparklesPreview() {
  const words = "Clear Vision With Clean Energy".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-4 py-8">
      <motion.div
        className="text-white text-center font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl z-20 flex flex-wrap justify-center gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, idx) => (
          <motion.span key={idx} variants={wordVariants}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      <div className="w-full max-w-5xl h-40 relative mt-8">
        {/* Gradients */}
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-24 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-24 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Sparkles */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={
            typeof window !== "undefined" && window.innerWidth < 768
              ? 150
              : 1200
          }
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
