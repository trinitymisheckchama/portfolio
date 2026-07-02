import "../style/skills.css";

const Skills = () => {

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "Flask",
        "MySQL",
        "Git",
        "GitHub",
        "Linux",
        "Networking"
    ];

    return (
        <section className="skills" data-aos="fade-up">

            <h2>My Skills</h2>

            <p>
                These are some of the technologies and tools
                I use to build modern web applications.
            </p>

            <div className="skills" data-aos="fade-up">

                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        {skill}
                    </div>
                ))}

            </div>

        </section>
    );
};

export default Skills;