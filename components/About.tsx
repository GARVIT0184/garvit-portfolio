"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Lightbulb,
  Rocket,
} from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "I BUILD",
    text: "Applications, tools and experiments that solve real problems.",
  },
  {
    icon: Database,
    title: "I ANALYZE",
    text: "Data using Python, SQL, statistics and machine learning.",
  },
  {
    icon: Lightbulb,
    title: "I LEARN",
    text: "New technologies by actually building with them.",
  },
  {
    icon: Rocket,
    title: "I SHIP",
    text: "Ideas from local code to deployed products.",
  },
];

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <div>
            <p className="section-label">01 / About</p>

            <h2 className="section-title">
              Curious
              <br />
              <span className="muted">by nature.</span>
            </h2>
          </div>

          <div>
            <p className="about-text">
              I&apos;m currently pursuing a{" "}
              <strong>BS in Data Science at IIT Madras</strong>.
              My interests sit at the intersection of data, machine
              learning, programming and building practical software.
            </p>

            <p className="about-small">
              I like learning by doing taking an idea, writing the
              code, breaking it, understanding why it broke, and
              eventually making it work.
            </p>
          </div>
        </div>

        <div className="about-cards">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                className="about-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon size={28} />

                <h3>{card.title}</h3>

                <p>{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}