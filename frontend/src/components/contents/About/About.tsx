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
          I hold a Bachelor of Science in Information Technology (BSIT) with a specialization in System Development from Laguna University, June 2025. My education provided me with a strong foundation in software design, databases, and system analysis, preparing me to tackle real-world development challenges.
        </p>

        <p>
          I am a freelance full-stack developer passionate about building high-quality web and mobile applications. I focus on creating scalable and user-friendly systems, turning complex requirements into clean, efficient, and reliable solutions using technologies like React, Node.js, and Firebase.
        </p>

        <p>
         I am always learning new tools and best practices to improve my skills and deliver better experiences. Collaboration and communication are key for me, and I strive to create solutions that truly make an impact.
        </p>
      </div>
    </>
  );
}

export default About;
