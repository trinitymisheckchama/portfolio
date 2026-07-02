import "../style/project.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "An online shopping platform built with React, Node.js, and MySQL.",
      github: "https://github.com/yourusername/ecommerce",
    },
    {
      id: 2,
      title: "Student Management System",
      description: "A web application for managing student records and grades.",
      github: "https://github.com/yourusername/student-management",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A responsive portfolio website showcasing my skills and projects.",
      github: "https://github.com/yourusername/portfolio",
    },
  ];

  return (
    <div className="projects-container" data-aos="zoom-in">
      <h1>My Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id} data-aos="fade-up">
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;