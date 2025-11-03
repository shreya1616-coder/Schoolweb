import React from "react";
import MyNavbar from "../Comp/MyNavbar";
import Header from "../Comp/Header";
import Footer from "../Comp/Footer";
import "../App.css";

// ✅ Corrected image import paths (must use ../ not src/)
import art1 from "../assets/easy-fast-paper-craft-video-tutorial-for-all.jpg";
import art2 from "../assets/paper-cup-crafts-for-kids-featured.jpg";
import art3 from "../assets/93fa567741d2720460ba623d3ddcec1f.jpg"; // fixed extension
import art4 from "../assets/easy-fast-paper-craft-video-tutorial-for-all.jpg";

export default function ArtCraft() {
  const artProjects = [
    {
      id: 1,
      title: "Paper Collage Creations",
      desc: "Students explored creativity by crafting colorful collages using recycled paper and magazines.",
      image: art1,
    },
    {
      id: 2,
      title: "Clay Modeling Fun",
      desc: "Young artists shaped animals, fruits, and decorative objects using vibrant modeling clay.",
      image: art2,
    },
    {
      id: 3,
      title: "Nature-Inspired Painting",
      desc: "Our budding painters expressed their love for nature with brushes and eco-friendly colors.",
      image: art3,
    },
    {
      id: 4,
      title: "Handmade Greeting Cards",
      desc: "Students designed heartfelt greeting cards for festivals and school events.",
      image: art4,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <MyNavbar />

      {/* Header */}
      <Header />

      {/* Art & Craft Section */}
      <section className="artcraft-section">
        <h2>🎨 Art & Craft Zone</h2>
        <p>
          Creativity is at the heart of learning at Morning Bells Academy. Our Art & Craft
          sessions allow students to explore imagination, innovation, and design through
          hands-on activities.
        </p>

        <div className="art-grid">
          {artProjects.map((item) => (
            <div className="art-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="art-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* CSS for Art & Craft Page */}
      <style>{`
        .artcraft-section {
          padding: 80px 10%;
          background: #fffaf2;
          text-align: center;
        }

        .artcraft-section h2 {
          color: #ff7a00;
          font-size: 2.2rem;
          margin-bottom: 15px;
        }

        .artcraft-section p {
          color: #444;
          max-width: 800px;
          margin: 0 auto 40px;
          font-size: 1rem;
          line-height: 1.6;
        }

        .art-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .art-card {
          background: #fff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .art-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(255,122,0,0.3);
        }

        .art-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .art-content {
          padding: 20px;
        }

        .art-content h3 {
          color: #ff7a00;
          font-size: 1.2rem;
          margin-bottom: 8px;
        }

        .art-content p {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .artcraft-section {
            padding: 60px 5%;
          }
          .artcraft-section h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}
