
import profilePic from "../../../assets/avatar.jpg";
import "./Header.css";

const Header = () => {
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
          <button className="primary">Download Resume</button>
          <button className="outline">Send Email</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
