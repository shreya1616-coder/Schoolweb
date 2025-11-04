import React from "react";
import MyNavbar from "../Comp/MyNavbar";
import Footer from "../Comp/Footer";
import bgImage from "../assets/484943498_1166289181957540_6416239797447386503_n.jpg"; // ✅ Import background image

export default function Contact() {
  return (
    <>
      {/* 🎨 CSS Styling */}
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(to right, #e3f2fd, #fff3e0);
        }

        /* ===== HEADER SECTION ===== */
        .contact-header {
           background: url(${bgImage}) center/cover no-repeat;
          color: white;
          text-align: center;
          padding: 200px 20px; /* Increased height for better background visibility */
          position: relative;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
        }

        .contact-header::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 0;
        }

        .contact-header h1 {
          position: relative;
          z-index: 1;
          font-size: 3.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin: 0;
          animation: fadeDown 1.2s ease;
        }

        .contact-header p {
          position: relative;
          z-index: 1;
          font-size: 1.3rem;
          margin-top: 15px;
          opacity: 0.9;
          animation: fadeUp 1.4s ease;
        }

        /* ===== PAGE LAYOUT ===== */
        .contact-page {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 60px 40px;
          flex-wrap: wrap;
          gap: 40px;
          background: linear-gradient(to right, #e3f2fd, #ffe0b2);
        }

        /* FORM SECTION */
        .form-section {
          flex: 1;
          max-width: 46%;
          background: white;
          padding: 30px;
          border-radius: 18px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          animation: fadeInLeft 1.2s ease;
        }

        .form-section h2 {
          color: #ff7300;
          text-align: center;
          margin-bottom: 20px;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-top: 10px;
          font-weight: 600;
          color: #444;
        }

        input, select {
          margin-top: 5px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 15px;
          outline: none;
          transition: 0.3s;
        }

        input:focus, select:focus {
          border-color: #ff9800;
          box-shadow: 0 0 6px rgba(255,152,0,0.4);
        }

        button {
          margin-top: 20px;
          padding: 12px;
          background-color: #ff9800;
          color: #fff;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }

        button:hover {
          background-color: #e57c00;
          transform: scale(1.03);
        }

        /* CONTACT SECTION */
        .contact-section {
          flex: 1;
          max-width: 46%;
          display: flex;
          flex-direction: column;
          gap: 25px;
          animation: fadeInRight 1.2s ease;
        }

        .contact-info {
          background: white;
          padding: 25px;
          border-radius: 18px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          line-height: 1.6;
          animation: fadeUp 1.4s ease;
        }

        .contact-info h2 {
          color: #ff7300;
          margin-bottom: 10px;
          text-align: center;
        }

        .map-container iframe {
          width: 100%;
          height: 250px;
          border: none;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          animation: fadeIn 1.5s ease;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ===== RESPONSIVE DESIGN ===== */
        @media (max-width: 900px) {
          .contact-header {
            padding: 150px 15px; /* slightly smaller on mobile */
          }

          .contact-header h1 {
            font-size: 2.4rem;
          }

          .contact-header p {
            font-size: 1.1rem;
          }

          .contact-page {
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
          }

          .form-section, .contact-section {
            max-width: 100%;
          }
        }
      `}</style>

      {/* ✅ Navbar */}
      <MyNavbar />

      {/* ✅ Header Section */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Get in touch or apply for admission below.</p>
      </header>

      {/* ✅ Main Content */}
      <div className="contact-page">
        {/* 📝 Admission Form */}
        <div className="form-section">
          <h2>Admission Form</h2>
          <form>
            <label>Student Name</label>
            <input type="text" placeholder="Enter student name" />

            <label>Age</label>
            <input type="number" placeholder="Enter age" />

            <label>Class</label>
            <select>
              <option>Nursery</option>
              <option>KG</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
            </select>

            <label>Parent / Guardian Name</label>
            <input type="text" placeholder="Enter guardian name" />

            <label>Phone Number</label>
            <input type="tel" placeholder="e.g. 9876543210" />

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* 📞 Contact Info + Map */}
        <div className="contact-section">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>School Name:</strong> Morning Bells Academy</p>
            <p><strong>Address:</strong> Bapugram Rd, Bapu Gram, IDPL Colony, Rishikesh, Uttarakhand 249202</p>
            <p><strong>Email:</strong> shreyachauhan16@gmail.com</p>
            <p><strong>Phone:</strong> +91 8979086560</p>
          </div>

          <div className="map-container">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.4818868517013!2d78.26972377534638!3d30.08038247490546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e12915bfb77%3A0xc361af100deef1c0!2sMorning%20Bells%20Academy!5e0!3m2!1sen!2sin!4v1761547064308!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}
