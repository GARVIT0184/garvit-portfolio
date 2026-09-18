"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

const certifications = [
  {
    title: "SQL (Basic) Certification",
    issuer: "HackerRank",
    date: "JAN 2026",
    credential: "12EF2A925FD",
    link: "https://www.hackerrank.com/certificates/121ef2a925fd",
    color: "green",
  },
  {
    title: "SQL (Intermediate) Certification",
    issuer: "HackerRank",
    date: "JAN 2026",
    credential: "273EC4BF27F9",
    link: "https://www.hackerrank.com/certificates/273EC4BF27F9",
    color: "blue",
  },
  {
    title: "SQL (Advanced) Certification",
    issuer: "HackerRank",
    date: "JAN 2026",
    credential: "649A001B216D",
    link: "https://www.hackerrank.com/certificates/649A001B216D",
    color: "purple",
  },
  {
    title: "Python (Basic) Certification",
    issuer: "HackerRank",
    date: "JAN 2026",
    credential: "DF6C6ACB5200",
    link: "https://www.hackerrank.com/certificates/fdf6ca6b5200",
    color: "orange",
  },
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    date: "SEP 2026",
    credential: "C63EBD",
    link: "https://www.hackerrank.com/certificates/c63ebdfd0b5c",
    color: "pink",
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "SEP 2026",
    credential: "389EFAA71302",
    link: "https://www.hackerrank.com/certificates/389efaa71302",
    color: "cyan",
  },
];

export default function Journey() {
  return (
    <section className="section journey-section">
      <div className="container">

        <p
          className="section-label"
          style={{ color: "#2563eb" }}
        >
          05 / JOURNEY
        </p>

        <h2 className="section-title">
          Still
          <br />
          <span className="muted">becoming.</span>
        </h2>

        {/* EDUCATION */}

        <div className="journey-timeline">

          <motion.div
            className="journey-item"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="journey-year">2028</span>

            <h3>BS in Data Science</h3>

            <strong>IIT Madras</strong>

            <p>
              Building a foundation across programming,
              statistics, data science and machine learning.
            </p>
          </motion.div>

          <motion.div
            className="journey-item"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="journey-year">2026</span>

            <h3>Data + ML Projects</h3>

            <strong>Projects / Kaggle / Coursework</strong>

            <p>
              Working with real datasets, machine learning
              models, programming assignments and practical
              applications.
            </p>
          </motion.div>

          <motion.div
            className="journey-item"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="journey-year">2025</span>

            <h3>Programming Foundation</h3>

            <strong>Diploma in Programming</strong>

            <p>
              Strengthened programming fundamentals and
              started building software projects.
            </p>
          </motion.div>

        </div>

        {/* CERTIFICATIONS */}

        <div className="certifications-section">

          <div className="certifications-heading">
            <p
              className="section-label"
              style={{ color: "#16a34a" }}
            >
              CERTIFICATIONS
            </p>

            <h3>Proof of learning.</h3>

            <p>
              Verified certifications and skill credentials
              earned through technical assessments.
            </p>
          </div>

          <div className="certifications-grid">

            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className={`cert-card cert-${cert.color}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                }}
              >

                <div className="cert-top">
                  <div className="cert-icon">
                    <Award size={20} />
                  </div>

                  <ArrowUpRight size={18} />
                </div>

                <div className="cert-info">
                  <span>{cert.date}</span>

                  <h4>{cert.title}</h4>

                  <p>{cert.issuer}</p>

                  <small>
                    Credential ID · {cert.credential}
                  </small>
                </div>

              </motion.a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}