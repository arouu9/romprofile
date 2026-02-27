import { FiUser } from "react-icons/fi";
import './About.css'

function About() {
  return (
    <>
      {/* ABOUT */}
      <div className="card about">
        <h2 className="section-title">
          <FiUser className="title-icon" />
          About
        </h2>

        <p>
          I’m a freelance full-stack developer passionate about building
          high-quality web and mobile applications. I focus on creating scalable
          and user-friendly systems that solve real-world problems.
        </p>

        <p>
          I have experience working on various projects, including e-commerce
          platforms, dashboards, and internal tools. I enjoy turning complex
          requirements into clean, efficient, and reliable solutions using
          technologies like React, Node.js, and Firebase.
        </p>

        <p>
          I am always learning new tools and best practices to improve my skills
          and deliver better experiences. Collaboration and communication are
          key for me, and I strive to create solutions that truly make an
          impact.
        </p>
      </div>
    </>
  );
}

export default About;
