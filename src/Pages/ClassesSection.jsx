import React from "react";
import MyNavbar from "../Comp/MyNavbar";
import Footer from "../Comp/Footer";
import bgImage from "../assets/504359035_9295642877204402_254611619851850626_n.jpg";

export default function ClassesSection() {
  const classesData = [
    { name: "Nursery", desc: "Fun learning through play and basic social skills." },
    { name: "LKG", desc: "Learning letters, numbers, and creative activities." },
    { name: "UKG", desc: "Developing early reading and writing confidence." },
    { name: "Class 1", desc: "Building strong basics in English, Math, and Science." },
    { name: "Class 2", desc: "Encouraging creativity and logical thinking." },
    { name: "Class 3", desc: "Exploring the world through stories and experiments." },
    { name: "Class 4", desc: "Enhancing analytical and problem-solving skills." },
    { name: "Class 5", desc: "Preparing for middle school with confidence." },
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background-color: #fffdf8;
          font-family: 'Poppins', sans-serif;
        }

        .classes-header {
          background: url(${bgImage}) center/cover no-repeat;
          color: white;
          text-align: center;
          padding: 120px 20px;
          position: relative;
          overflow: hidden;
        }

        .classes-header::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 0;
        }

        .classes-header h1 {
          position: relative;
          z-index: 1;
          font-size: 3rem;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0;
        }

        .classes-header p {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
          margin-top: 10px;
          opacity: 0.9;
        }

        .classes-section {
          padding: 60px 20px;
          background-color: #fffaf3;
          text-align: center;
          min-height: 100vh;
        }

        .classes-title {
          font-size: 2.4rem;
          color: #ff7300;
          margin-bottom: 40px;
          font-weight: bold;
        }

        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .class-card {
          background-color: white;
          border-radius: 18px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          width: 240px;
          padding: 30px 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .class-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .class-card h3 {
          color: #ff9800;
          margin-bottom: 10px;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .class-card p {
          color: #555;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .classes-header {
            padding: 80px 20px;
          }
          .classes-header h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <MyNavbar />

      <header className="classes-header">
        <h1>Our Classes</h1>
        <p>Building bright futures, one class at a time</p>
      </header>

      <section className="classes-section">
        <h2 className="classes-title">Explore Our Classes</h2>

        <div className="card-container">
          {classesData.map((cls, index) => (
            <div key={index} className="class-card">
              <h3>{cls.name}</h3>
              <p>{cls.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
