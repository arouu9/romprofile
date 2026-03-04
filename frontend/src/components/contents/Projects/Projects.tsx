import BarangaySystem from "../../../assets/BarangaySystem.png";
import WaterRefill from "../../../assets/waterRefill.png";
import POSSystem from "../../../assets/PosSystem.png";
import RealEstate from "../../../assets/RealEstate.png";
import "./Projects.css";
import { FiFolder } from "react-icons/fi";

function Projects() {
  const projectList = [
    {
      image: POSSystem,
      title: "Point of Sale System",
      description:
        "Inventory management, sales tracking, and responsive UI built with React",
      link: "https://www.tiktok.com/@ajampogi/video/7591797161818410260",
    },
    {
      image: BarangaySystem,
      title: "Barangay Certificate System",
      description:
        "Online certificate requests with admin approval and record management.",
      link: "https://your-barangay-demo-link.com",
    },
    {
      image: WaterRefill,
      title: "Water Refilling Station System",
      description:
        "Order tracking, customer management, and gallon monitoring system.",
      link: "https://www.tiktok.com/@ajampogi/video/7592993903628192149",
    },
    {
      image: RealEstate,
      title: "Real Estate Listing System",
      description:
        "Property listings, agent management, advanced search filters, and responsive map-based browsing.",
      link: "https://www.tiktok.com/@ajampogi/video/7592993903658192149",
    },
  ];

  return (
    <div className="card projects full">
      <h2 className="section-title">
        <FiFolder className="title-icon" />
        Projects
      </h2>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <strong>{project.title}</strong>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;