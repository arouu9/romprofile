import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import profilePic from "../../../assets/avatar.jpg";
import ResumePDF from "../../../assets/Romewell_Resume.pdf";
import "./Header.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Download Resume
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Romewell_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send Email Directly
  const handleSendEmail = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.warn("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_czc3pgl",   // Replace with your Service ID
        "template_l05dkkg",  // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "eidPPGSAsyuXAK-Pg"    // Replace with your Public Key
      );

      toast.success("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setShowModal(false);
    } catch (error: unknown) {
      // ✅ Type-safe catch
      if (error && typeof error === "object" && "text" in error) {
        toast.error(`Failed to send message ❌: ${error.text}`);
      } else if (error instanceof Error) {
        toast.error(`Failed to send message ❌: ${error.message}`);
      } else {
        toast.error("Failed to send message ❌: Unknown error");
      }
      console.error("EmailJS error:", error);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="header">
        <div className="avatar-wrapper">
          <img src={profilePic} alt="Profile" className="avatar" />
        </div>

        <div className="header-info">
          <h1>Romewell Aniciete</h1>
          <p className="address">Laguna, Philippines</p>
          <p className="role">Full-Stack Developer</p>

          <div className="buttons">
            <button className="primary" onClick={handleDownload}>
              Download Resume
            </button>
            <button className="outline" onClick={() => setShowModal(true)}>
              Send Email
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Send Me a Message</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />

            <div className="modal-buttons">
              <button
                className="primary"
                onClick={handleSendEmail}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>

              <button
                className="outline"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Header;