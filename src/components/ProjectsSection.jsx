import "../style/projectssection.css";

const ProjectsSection = () => {

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Full-stack shopping platform with cart, authentication, and checkout.",
      tech: "React, Node.js, MySQL",
      github: "https://github.com/trinitymisheckchama/e-commerce--flaskog.git",
      live: "#"
    },
    {
      title: "Student Management System",
      description: "System for managing students, grades, and records.",
      tech: "Flask, Python, SQLite",
      github: "https://github.com/trinitymisheckchama/student-management",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my skills and projects.",
      tech: "React, CSS",
      github: "https://github.com/trinitymisheckchama/portfolio",
      live: "#"
    },
    {
      title: "Digital Hygiene",
      description: "A full-stack blogging platform with user authentication and CRUD functionality.",
      tech: " Flask, MySQL",
      github: "https://github.com/sakhile-bit/sakhile_final-_year_pro.git",
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