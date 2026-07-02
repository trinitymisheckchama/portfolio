import "../style/home.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import Skills from "./Skills";
import ProjectsSection from "./ProjectsSection";

const Home = () => {
  return (
    <>
     <section className="hero" data-aos="fade-up">
      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-left">

          <p className="greeting">👋 Hello, I'm</p>

          <h1> Trinity Misheck Chama</h1>

          <TypeAnimation
            sequence={[
              "Computer Science Student",
              2000,
              "React Developer",
              2000,
              "Flask Developer",
              2000,
              "Full Stack Developer",
              2000,
              "Network Engineer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="typing"
          />

          <p className="description">
            Passionate about building modern web applications,
            solving real-world problems and continuously learning
            new technologies.
          </p>

          <div className="buttons">
            <Link to="/projects" className="btn primary">
              View Projects
            </Link>

            <a href="/resume.pdf" className="btn secondary" download>
              Download CV
            </a>
          </div>


        </div>

        <div className="hero-right">
          <img src={profile} alt="Profile" />
        </div>

      </section>
     </section>
      {/* SKILLS SECTION */}
      <Skills />
      {/* PROJECTS SECTION */}
      <ProjectsSection />


    </>
  );
};

export default Home;