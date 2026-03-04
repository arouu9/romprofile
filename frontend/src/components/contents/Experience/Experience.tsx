import "./Experience.css";
import { FiBriefcase } from "react-icons/fi";

function Experience() {
  return (
    <div className="card experience">
      <h2 className="section-title">
        <FiBriefcase className="title-icon" />
        Experience
      </h2>

      <div className="timeline">

        {/* Lacson Studio */}
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <strong>ID Editor / Data Encoder</strong>
            <span className="company">Lacson Studio</span>
            <span className="date">August 2025 – October 2025</span>
            <p>
              Created and designed ID card templates for schools and companies.
            </p>
          </div>
        </div>

        {/* NIA OJT */}
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <strong>On-the-Job Training (OJT)</strong>
            <span className="company">National Irrigation Administration (NIA)</span>
            <span className="date">February 2025 – May 2025</span>
            <p>
              Assisted in developing a basic monitoring system. Managed and encoded
              data accurately, organized office records, handled documentation tasks,
              and supported administrative operations.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;