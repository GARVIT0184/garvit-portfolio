"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";

const experience = [
  {
    period: "FEB 2026 — MAY 2026",
    role: "LLM Post Training Intern",
    company: "Ethara AI",
    location: "Gurugram, Haryana · Remote",
    description:
      "Worked on AI/LLM data workflows, annotation pipelines and structured datasets for model training.",
    points: [
      "Supported data preparation and structured feedback pipelines for LLM post-training tasks.",
      "Contributed to prompt understanding and response optimization processes.",
      "Worked with NLP, data processing and model improvement workflows.",
      "Gained hands-on experience with Generative AI and prompt engineering.",
    ],
    skills: ["LLM", "Generative AI", "NLP", "Prompt Engineering"],
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <p
          className="section-label"
          style={{ color: "#8b5cf6" }}
        >
          04 / EXPERIENCE
        </p>

        <h2 className="section-title">
          Things I’ve
          <br />
          <span className="muted">worked on.</span>
        </h2>

        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.article
              key={item.role}
              className="experience-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="experience-icon">
                <Briefcase size={22} />
              </div>

              <div className="experience-content">
                <div className="experience-top">
                  <div>
                    <p className="experience-period">
                      {item.period}
                    </p>

                    <h3>{item.role}</h3>

                    <p className="experience-company">
                      {item.company}
                    </p>

                    <p className="experience-location">
                      {item.location}
                    </p>
                  </div>

                  <span className="experience-badge">
                    Internship
                  </span>
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                <ul className="experience-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="experience-skills">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}