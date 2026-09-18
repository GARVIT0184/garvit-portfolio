import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Journey from "../components/Journey";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="noise page-grid min-h-screen overflow-hidden">
      <Navbar />

      <Hero />

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="journey">
        <Journey />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}