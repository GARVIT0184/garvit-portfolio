"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="section contact">
      <div className="blob blob-one" />
      <div className="blob blob-three" />

      <div
        className="container"
        style={{ position: "relative", zIndex: 2 }}
      >
        <p className="section-label">
          06 / Contact
        </p>

        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          LET&apos;S
          <br />
          <span className="gradient-text">BUILD.</span>
        </motion.h2>

        <div className="contact-grid">
          <div>
            <p className="contact-description">
              Looking for someone interested in data, machine
              learning, programming and building useful things?
            </p>

            <p
              style={{
                maxWidth: "550px",
                color: "rgba(255,255,255,.3)",
                lineHeight: 1.7,
                marginTop: "25px",
              }}
            >
              I&apos;m open to conversations about internships,
              projects and opportunities where I can learn and
              contribute.
            </p>
          </div>

          <div className="contact-links">

            {/* EMAIL */}
            <a
              href="mailto:24f2006741@ds.study.iitm.ac.in"
              className="contact-link"
            >
              <span
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <Mail size={20} />
                Email Me
              </span>

              <ArrowUpRight size={20} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/garvit-sahu-9b3763319/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <Linkedin size={20} />
                LinkedIn
              </span>

              <ArrowUpRight size={20} />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/GARVIT0184"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <Github size={20} />
                GitHub
              </span>

              <ArrowUpRight size={20} />
            </a>

            {/* RESUME */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="contact-link resume-link"
            >
              <span
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <Download size={20} />
                Download Resume
              </span>

              <ArrowUpRight size={20} />
            </a>

          </div>
        </div>

        <div
          style={{
            marginTop: "120px",
            paddingTop: "25px",
            borderTop: "1px solid rgba(255,255,255,.1)",
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(255,255,255,.3)",
            fontSize: "12px",
            fontWeight: 800,
          }}
        >
          <span>GARVIT © 2026</span>
          <span>DATA • CODE • CURIOSITY</span>
        </div>
      </div>
    </section>
  );
}