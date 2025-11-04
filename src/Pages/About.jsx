import React from "react";
import MyNavbar from "../Comp/MyNavbar";
import Footer from "../Comp/Footer";
import bgImage from "../assets/485038447_1166289191957539_736602796370129272_n.jpg";
import logo from "../assets/logo.png"; // ✅ Import logo properly

export default function About() {
  return (
    <>
      <style>{`
        /* ============================= */
        /* 🌟 ABOUT PAGE STYLING (Morning Bells Academy) */
        /* ============================= */

        /* HEADER SECTION */
        .about-header {
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
                      url(${bgImage}) center/cover no-repeat;
          color: white;
          text-align: center;
          padding: 220px 20px; /* ✅ Increased height here */
          border-radius: 0;
          position: relative;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(255, 136, 0, 0.3);
        }

        .about-header h1, .about-header p {
          position: relative;
          z-index: 1;
        }

        .about-header h1 {
          font-size: 3.2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .about-header p {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* MAIN CONTENT */
        .about-main {
          background: #fffaf2;
          color: #333;
          text-align: center;
        }

        /* HERO SECTION */
        .hero-section {
          background: #fff;
          padding: 80px 10%;
          border-bottom: 3px solid #ffe0b3;
        }

        .hero-text h2 {
          color: #ff7a00;
          font-size: 2.3rem;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .hero-text p {
          color: #555;
          font-size: 1.1rem;
          max-width: 750px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* MISSION SECTION */
        .mission-section {
          background: #fffaf2;
          padding: 80px 10%;
          border-top: 3px solid #ffd699;
        }

        .mission-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          text-align: left;
        }

        .mission-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mission-image img {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          animation: float 5s ease-in-out infinite;
        }

        .mission-text {
          flex: 2;
        }

        .mission-text h2 {
          color: #ff7a00;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 15px;
          text-align: center;
        }

        .mission-text p {
          color: #444;
          line-height: 1.8;
          font-size: 1.05rem;
          margin-bottom: 15px;
          text-align: justify;
        }

        /* FLOAT ANIMATION */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .about-header {
            padding: 160px 20px; /* slightly smaller height for mobile */
          }

          .about-header h1 {
            font-size: 2.4rem;
          }

          .mission-container {
            flex-direction: column;
            text-align: center;
          }

          .mission-text {
            text-align: center;
          }

          .mission-image img {
            width: 180px;
            height: 180px;
          }
        }
      `}</style>

      {/* ✅ Navbar */}
      <MyNavbar />

      {/* ✅ Header with larger background image */}
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about Morning Bells Academy – nurturing bright young minds.</p>
      </header>

      {/* ✅ Main About Section */}
      <main className="about-main">
        {/* 🌅 Hero Section */}
        <section className="hero-section">
          <div className="hero-text">
            <h2>About Morning Bells Academy</h2>
            <p>
              Bapugram, 249202 — nurturing rural children with quality education
              and strong moral values to shape the leaders of tomorrow.
            </p>
          </div>
        </section>

        {/* 🏫 Mission Section */}
        <section className="mission-section">
          <div className="mission-container">
            {/* Left — Logo */}
            <div className="mission-image">
              <img src={logo} alt="Morning Bells Academy Logo" />
            </div>

            {/* Right — Mission text */}
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                Empowering children from rural and economically weaker families
                through quality education and essential life skills.
              </p>

              <p>
                <strong>Morning Bells Academy</strong> is a primary school where
                children come from rural and backward areas. Many curricular
                activities are organized to motivate the students. Most students
                belong to lower-income families, so we provide them free education
                and guidance.
              </p>

              <p>
                We emphasize hygiene and sanitation education, helping children
                develop healthy habits early. By combining compassion with structured
                learning, we build a foundation for lifelong growth, curiosity, and
                social awareness in every child.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}
