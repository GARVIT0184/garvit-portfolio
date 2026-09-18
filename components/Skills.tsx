"use client";

import { motion } from "framer-motion";

const skills = [
  ["Python", "Programming"],
  ["SQL", "Data"],
  ["Machine Learning", "ML"],
  ["Pandas", "Data"],
  ["NumPy", "Data"],
  ["Scikit-learn", "ML"],
  ["Git / GitHub", "Tools"],
  ["Statistics", "Foundation"],
];

export default function Skills() {
  return (
    <section className="section skills-section">
      <div className="container">
        <p
          className="section-label"
          style={{ color: "#bef264" }}
        >
          02 / Toolbox
        </p>

        <div className="skills-header">
          <h2 className="section-title">
            Things I
            <br />
            <span style={{ color: "rgba(255,255,255,.2)" }}>
              work with.
            </span>
          </h2>

          <p className="skills-description">
            A growing toolbox built through coursework, projects,
            experimentation and problem solving.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map(([name, category], index) => (
            <motion.div
              key={name}
              className="skill"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="skill-category">
                {category}
              </div>

              <div className="skill-name">
                {name}
              </div>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            marginTop: "70px",
            paddingTop: "25px",
            borderTop: "1px solid rgba(255,255,255,.1)",
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            color: "rgba(255,255,255,.35)",
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: ".08em",
          }}
        >
          <span>PYTHON</span>
          <span>NUMPY</span>
          <span>PANDAS</span>
          <span>SCIKIT-LEARN</span>
          <span>SQL</span>
          <span>GIT</span>
          <span>GITHUB</span>
          <span>MATPLOTLIB</span>
        </div>
      </div>
    </section>
  );
}