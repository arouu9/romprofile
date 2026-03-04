import profilePic from "../../../assets/avatar.jpg";
import ResumePDF from "../../../assets/Romewell_Resume.pdf"; // make sure your PDF is here
import "./Header.css";

const Header = () => {

  // Function to download resume
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Romewell_Resume.pdf"; // filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="header">
      {/* Avatar */}
      <div className="avatar-wrapper">
        <img src={profilePic} alt="Profile" className="avatar" />
      </div>

      {/* Info Column */}
      <div className="header-info">
        <h1>Romewell Aniciete</h1>
        <p className="address">Laguna, Philippines</p>
        <p className="role">Full-Stack Developer</p>

        {/* Buttons */}
        <div className="buttons">
          <button className="primary" onClick={handleDownload}>
            Download Resume
          </button>
          <button className="outline">Send Email</button>
        </div>
      </div>
    </div>
  );
};

export default Header;