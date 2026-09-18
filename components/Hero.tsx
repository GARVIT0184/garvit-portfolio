"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">

      {/* FLOATING BACKGROUND */}
      <motion.div
        className="blob blob-one"
        animate={{
          x: [0, 100, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob-two"
        animate={{
          x: [0, -100, 40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob-three"
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -70, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="hero-container">

        {/* BADGE */}
        <motion.div
          className="badge"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <Sparkles size={15} />
          BS Data Science @ IIT Madras
        </motion.div>

        {/* TITLE */}
        <div className="hero-title-wrap">

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h1>BUILD.</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h1 className="gradient-text">LEARN.</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h1>REPEAT.</h1>
          </motion.div>

        </div>

        {/* DESCRIPTION */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
        >
          I&apos;m Garvit — a Data Science student who enjoys turning{" "}
          <strong>data, code and ideas</strong> into useful things.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1.1,
          }}
        >
          <motion.a
            href="#projects"
            className="primary-button"
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            See My Work
            <ArrowUpRight size={17} />
          </motion.a>

          <motion.a
            href="#contact"
            className="secondary-button"
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            Let&apos;s Talk
          </motion.a>
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          className="socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.3,
          }}
        >
          {/* GITHUB */}
          <motion.a
            href="https://github.com/GARVIT0184"
            target="_blank"
            rel="noreferrer"
            className="social"
            aria-label="GitHub"
            whileHover={{
              y: -7,
              rotate: -8,
            }}
          >
            <Github size={19} />
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/garvit-sahu-9b3763319/"
            target="_blank"
            rel="noreferrer"
            className="social"
            aria-label="LinkedIn"
            whileHover={{
              y: -7,
              rotate: 8,
            }}
          >
            <Linkedin size={19} />
          </motion.a>
        </motion.div>

        {/* SCROLL */}
        <motion.div
          className="scroll-indicator"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} />
        </motion.div>

      </div>
    </section>
  );
}