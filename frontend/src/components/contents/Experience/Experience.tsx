import "./Experience.css";
import { FiBriefcase } from "react-icons/fi";

function Experience() {
  return (
    <>
      {/* EXPERIENCE */}
      <div className="card experience">
        <h2 className="section-title">
          <FiBriefcase className="title-icon" />
          Experience
        </h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <strong>On-the-Job Training (Web Developer)</strong>
              <p>
                Assisted in developing internal systems, fixing UI issues, and
                working with APIs and databases.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <strong>BS in Information Technology</strong>
              <p>
                Focused on software development, databases, and system analysis.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <strong>Encoder</strong>
              <p>
                Entered and managed data accurately for multiple projects,
                ensuring consistency and reliability in records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
