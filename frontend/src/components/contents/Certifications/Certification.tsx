import "./Certification.css";
import { FiAward } from "react-icons/fi";

function Certification() {
  return (
    <>
      {/* CERTIFICATIONS */}
      <div className="card certifications">
        <h2 className="section-title">
          <FiAward className="title-icon" />
          Certificates Earn
        </h2>

        <div className="cert-grid">
          <div className="cert-card">
            <strong>Basic Troubleshooting</strong>
            <p>Online Course Certificate</p>

            <a
              href="https://example.com/certificate/react-fundamentals"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <strong>Laravel Fundamentals</strong>
            <p>Online Course Certificate</p>
            <a
              href="https://drive.google.com/file/d/1RdOTZ53ctu4UvsUkoo9uD2b-sZo86WiL/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <strong>JavaScript Essentials 1</strong>
            <p>Online Course Certificate</p>
            <a
              href="https://drive.google.com/file/d/1aQXn9TB8hEcTQ7QwYhpFkPFji3w1QwXP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <strong>JavaScript Essentials 2</strong>
            <p>Online Course Certificate</p>
            <a
              href="https://drive.google.com/file/d/1WZ_3dYBXNuf7eMhgqhE-qs5lLoVIcOzc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <strong>Understanding Cybersecurity</strong>
            <p>Face-to-Face Training Certificate</p>
            <a
              href="https://drive.google.com/file/d/19ZHy4Es2ZlOKlUt96hOEREyquyhwg5Kz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card">
            <strong>Network Support and Security</strong>
            <p>Online Course Certificate</p>
            <a
              href="https://drive.google.com/file/d/1Yg0etC8tsH7BPElmHnbzpD0jB8_pBZfs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Certification;
