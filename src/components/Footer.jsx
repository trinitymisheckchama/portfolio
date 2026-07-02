import "../style/footer.css";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* Name / Branding */}
        <div className="footer-brand">
          <h2>TMC</h2>
          <p>Building modern web applications with React & Flask.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h3>Connect</h3>

          <div className="icons">
            <a href="https://github.com/trinitymisheckchama" target="_blank">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/trinity-misheck-chama" target="_blank">
              <FaLinkedin />
            </a>

            <a href="mailto:trinitymeshach31@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()}  Trinity Misheck Chama. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;