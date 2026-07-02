import "../style/projectssection.css";

const ProjectsSection = () => {

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Full-stack shopping platform with cart, authentication, and checkout.",
      tech: "React, Node.js, MySQL",
      github: "#",
      live: "#"
    },
    {
      title: "Student Management System",
      description: "System for managing students, grades, and records.",
      tech: "Flask, Python, SQLite",
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my skills and projects.",
      tech: "React, CSS",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="projects" data-aos="zoom-in">

      <h2>Featured Projects</h2>

      <p className="subtitle">
        Here are some of the projects I’ve built.
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up">

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="tech">{project.tech}</span>

            <div className="project-links">

              <a href={project.github} target="_blank">
                GitHub
              </a>

              <a href={project.live} target="_blank">
                Live Demo
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ProjectsSection;