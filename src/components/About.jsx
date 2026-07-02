import "../style/about.css";

const About = () => {
  return (
    <div className="about-container">

        <div className="about-card" data-aos="fade-right">
        <h1>About Me</h1>

        <p>
          Hello! I'm <span className="highlight">Misheck Trinity Chama</span>,
          a passionate Computer Science student who enjoys building modern web
          applications and solving real-world problems through technology.
        </p>

        <p>
          I have experience developing applications using React, JavaScript,
          Python (Flask), HTML, CSS and MySQL. I'm constantly learning new
          technologies to improve my software development skills.
        </p>

        <p>
          Apart from coding, I enjoy studying networking concepts, improving my
          programming skills, and working on personal projects that challenge me
          to grow as a developer.
        </p>

        <h2>Skills</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>Flask</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Linux</span>
        </div>
      </div>

    </div>
  );
};

export default About;