import "./TechStack.css";
import { FiTool } from "react-icons/fi";

function TechStack() {
  return (
    <>
      {/* TECH STACK */}
      <div className="card tech">
        <h2 className="section-title">
          <FiTool className="title-icon" />
          Tech Stack
        </h2>

        <div className="tech-row">
          <div className="tech-title">Frontend</div>
          <div className="tech-items">
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>React Native</span>
            <span>Tailwind</span>
          </div>
        </div>

        <div className="tech-row">
          <div className="tech-title">Backend</div>
          <div className="tech-items">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>PHP</span>
            <span>Firebase</span>
            <span>REST API</span>
            <span>MySQL</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="tech-row">
          <div className="tech-title">Tools</div>
          <div className="tech-items">
            <span>VSCode</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Postman</span>
            <span>Figma</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
