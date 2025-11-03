import React, { useState } from "react";
import MyNavbar from "../Comp/MyNavbar";
import Footer from "../Comp/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import thumb1 from "../assets/506810866_9351219228313433_3556482480371429055_n.jpg";
import thumb2 from "../assets/506032268_9341543022614387_1231155258513425171_n.jpg";
import thumb3 from "../assets/45610252_1614060775362689_7168500017039147008_n.jpg";
import thumb4 from "../assets/486188699_1166289345290857_1682304627507756343_n.jpg";
import thumb5 from "../assets/503075224_9284850644950292_5887689650100437857_n.jpg";
import thumb6 from "../assets/506810866_9351219228313433_3556482480371429055_n.jpg";
import thumb7 from "../assets/506032268_9341543022614387_1231155258513425171_n.jpg";
import thumb8 from "../assets/45610252_1614060775362689_7168500017039147008_n.jpg";
import thumb9 from "../assets/486188699_1166289345290857_1682304627507756343_n.jpg";
import thumb10 from "../assets/503075224_9284850644950292_5887689650100437857_n.jpg";
import thumb11 from "../assets/506810866_9351219228313433_3556482480371429055_n.jpg";
import thumb12 from "../assets/506032268_9341543022614387_1231155258513425171_n.jpg";
import thumb13 from "../assets/45610252_1614060775362689_7168500017039147008_n.jpg";
import thumb14 from "../assets/486188699_1166289345290857_1682304627507756343_n.jpg";
import thumb15 from "../assets/503075224_9284850644950292_5887689650100437857_n.jpg";
import thumb16 from "../assets/506810866_9351219228313433_3556482480371429055_n.jpg";
import thumb17 from "../assets/506032268_9341543022614387_1231155258513425171_n.jpg";
import thumb18 from "../assets/45610252_1614060775362689_7168500017039147008_n.jpg";
import thumb19 from "../assets/486188699_1166289345290857_1682304627507756343_n.jpg";
import thumb20 from "../assets/503075224_9284850644950292_5887689650100437857_n.jpg";
import thumb21 from "../assets/45610252_1614060775362689_7168500017039147008_n.jpg";
import thumb22 from "../assets/486188699_1166289345290857_1682304627507756343_n.jpg";
import thumb23 from "../assets/503075224_9284850644950292_5887689650100437857_n.jpg";
import thumb24 from "../assets/506810866_9351219228313433_3556482480371429055_n.jpg";

function Gallery() {
  const images = [
    thumb1, thumb2, thumb3, thumb4, thumb5,
    thumb6, thumb7, thumb8, thumb9, thumb10,
    thumb11, thumb12, thumb13, thumb14, thumb15,
    thumb16, thumb17, thumb18, thumb19, thumb20,thumb21, thumb22, thumb23, thumb24,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Proper background image reference
  const headerStyle = {
    backgroundImage: `url(${thumb4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // Group images (8 per slide)
  const imageGroups = [];
  for (let i = 0; i < images.length; i += 8) {
    imageGroups.push(images.slice(i, i + 8));
  }

  return (
    <>
      <style>{`
        /* ✨ Elegant Gallery Styling */
        .gallery-header {
          color: white;
          text-align: center;
          padding: 220px 20px;
          position: relative;
          overflow: hidden;
        }

        .gallery-header::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          z-index: 0;
        }

        .gallery-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          position: relative;
          z-index: 1;
          animation: fadeIn 1s ease;
        }

        .gallery-header p {
          font-size: 1.2rem;
          color: #f1f1f1;
          position: relative;
          z-index: 1;
          opacity: 0.9;
          animation: slideUp 1s ease;
        }

        .gallery-section {
          background-color: #fffaf2;
          padding: 80px 5%;
          text-align: center;
        }

        .gallery-section h2 {
          color: #ff7300;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 10px;
          letter-spacing: 0.5px;
        }

        .gallery-section p {
          color: #555;
          margin-bottom: 40px;
        }

        .swiper {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding-bottom: 60px;
        }

        .swiper-pagination-bullet {
          background: #ff7300 !important;
          opacity: 0.4;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #ff7300 !important;
          opacity: 1;
          transform: scale(1.2);
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          justify-items: center;
          animation: fadeSlide 0.8s ease;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.04);
        }

        .gallery-item img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          border-radius: 16px;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          color: white;
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          border-radius: 16px;
          transition: opacity 0.25s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          animation: fadeSlide 0.4s ease;
        }

        .lightbox img {
          max-width: 92%;
          max-height: 92%;
          border-radius: 12px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.6);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(18px); opacity: 0; } 
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .gallery-header { padding: 160px 18px; }
          .gallery-header h1 { font-size: 2.2rem; }
        }
      `}</style>

      {/* Navbar */}
      <MyNavbar />

      {/* Header */}
      <header className="gallery-header" style={headerStyle}>
        <h1>Our Gallery</h1>
        <p>Beautiful memories and joyful moments at Morning Bells Academy</p>
      </header>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Explore Our Memories</h2>
        <p>Click the dots below to explore more beautiful photos.</p>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={false}
          allowTouchMove={false}
          speed={0} // ✅ no animation or auto change
        >
          {imageGroups.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid-container">
                {group.map((src, i) => (
                  <div
                    key={i}
                    className="gallery-item"
                    onClick={() => setSelectedImage(src)}
                  >
                    <img src={src} alt={`Gallery ${i + 1}`} />
                    <div className="gallery-overlay">View Photo</div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged" />
        </div>
      )}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Gallery;
