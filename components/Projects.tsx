"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, FileText } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Hospital Management System",
    description:
      "A full-stack hospital management application for managing patients, doctors, appointments and hospital workflows.",
    stack: ["Python", "Flask", "SQLite"],
    color: "purple",
    github: "https://github.com/GARVIT0184/Hospital-Management-System",
    live: "https://hospital-management-system-fo0i.onrender.com/",
    liveText: "Live Demo",
  },

  {
    number: "02",
    title: "Placement Portal",
    description:
      "A web platform connecting students and companies while supporting placement workflows and recruitment-related operations.",
    stack: ["JavaScript", "Bootstrap", "Vue"],
    color: "blue",
    github:
      "https://github.com/GARVIT0184/Placement-Portal-Application---V2",
    live: "https://placement-portal-application.netlify.app/",
    liveText: "Live Demo",
  },

  {
    number: "03",
    title: "Vehicle Parking App",
    description:
      "A multi-user application for managing parking lots, parking spots, bookings and vehicle parking operations.",
    stack: ["Python", "HTML", "CSS"],
    color: "orange",
    github: "https://github.com/GARVIT0184/Vehicle-Parking-App---V1",
    live: "https://vehicle-parking-app-v1-oqwh.onrender.com/",
    liveText: "Live Demo",
  },

  {
    number: "04",
    title: "Heavy Equipment Price Prediction",
    description:
      "A machine learning project focused on statistical analysis and predicting the selling price of heavy equipment using classical machine learning models.",
    stack: ["Python", "Pandas", "Scikit-learn"],
    color: "green",
    notebook:
      "https://drive.google.com/file/d/1JSemETplqdFo6OGNuN1bsPiivNcEHBV1/view?usp=sharing",
    notebookText: "View Notebook",
  },

  {
    number: "05",
    title: "Smart MCQ Solver",
    description:
      "An AI-based project focused on solving multiple-choice questions using computer vision and generative AI techniques.",
    stack: ["CNN", "Gen AI", "Python"],
    color: "pink",
    notebook:
      "https://drive.google.com/file/d/114HfAfktYytCbmt8gLwkLU4mwaXPj0Py/view?usp=sharing",
    notebookText: "View Notebook",
  },

  {
    number: "06",
    title: "Fraud Detection System",
    description:
      "An end-to-end machine learning system for detecting fraudulent financial transactions using feature engineering and classification models.",
    stack: ["Python", "Pandas", "Scikit-learn"],
    color: "yellow",
    github: "https://github.com/GARVIT0184/Fraud_Detection_",
    githubOnly: true,
  },

  {
    number: "07",
    title: "End-to-End ML Project",
    description:
      "An 8-week machine learning workflow covering dataset handling, model training, evaluation, experiment tracking, benchmarking and reporting.",
    stack: ["GitHub", "Kaggle", "W&B"],
    color: "cyan",
    githubOnly: true,
  },
];

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <p
          className="section-label"
          style={{ color: "#ea580c" }}
        >
          03 / Selected Work
        </p>

        <div>
          <h2 className="section-title">
            I make
            <br />
            <span className="muted">things.</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              className={`project project-${project.color}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-button"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-button"
                      style={{
                        background: "rgba(255,255,255,.65)",
                        color: "#111",
                      }}
                    >
                      {project.liveText || "Live Demo"}
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                  {project.notebook && (
                    <a
                      href={project.notebook}
                      target="_blank"
                      rel="noreferrer"
                      className="project-button"
                      style={{
                        background: "rgba(255,255,255,.65)",
                        color: "#111",
                      }}
                    >
                      <FileText size={15} />
                      {project.notebookText || "View Notebook"}
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}