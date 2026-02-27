import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import BarangaySystem from "../../../assets/BarangaySystem.png";
import WaterRefill from "../../../assets/waterRefill.png";
import POSSystem from "../../../assets/PosSystem.png";
import RealEstate from "../../../assets/RealEstate.png";
import "./Projects.css";
import { FiFolder } from "react-icons/fi";

function Projects() {
  return (
    <>
      {/* PROJECTS (full width) */}
      <div className="card projects full">
        <h2 className="section-title">
          <FiFolder className="title-icon" />
          Projects
        </h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          <SwiperSlide>
            <div className="project-card">
              <img src={POSSystem} alt="POS System" />
              <div className="project-content">
                <strong>Point of Sale System</strong>
                <p>
                  Inventory management, sales tracking, and responsive UI built
                  with React
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-card">
              <img src={BarangaySystem} alt="Barangay System" />
              <div className="project-content">
                <strong>Barangay Certificate System</strong>
                <p>
                  Online certificate requests with admin approval and record
                  management.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-card">
              <img src={WaterRefill} alt="Water Station" />
              <div className="project-content">
                <strong>Water Refilling Station System</strong>
                <p>
                  Order tracking, customer management, and gallon monitoring
                  system.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-card">
              <img src={RealEstate} alt="Real Estate Listing System" />
              <div className="project-content">
                <strong>Real Estate Listing System</strong>
                <p>
                  Property listings, agent management, advanced search filters,
                  and responsive map-based browsing.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Projects;
