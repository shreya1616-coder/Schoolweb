import React from "react";
import MyNavbar from "../Comp/MyNavbar";
import Header from "../Comp/Header";
import Footer from "../Comp/Footer";
import { useNavigate } from "react-router-dom";
import "../App.css";
import ArtCraft from "./ArtCraft";

// Event Images
import event1 from "../assets/506810866_9351219228313433_3556482480371429055_n.jpg";
import event2 from "../assets/506032268_9341543022614387_1231155258513425171_n.jpg";
import event3 from "../assets/45610252_1614060775362689_7168500017039147008_n.jpg";

// Icons
import {
  FaLaptopCode,
  FaPaintBrush,
  FaHeartbeat,
  FaChalkboardTeacher,
  FaFootballBall,
  FaMusic,
} from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  const events = [
    { id: 1, title: "Annual Cultural Fest", date: "March 2024", image: event1 },
    { id: 2, title: "Science Exhibition", date: "July 2024", image: event2 },
    { id: 3, title: "Children’s Day Celebration", date: "November 2024", image: event3 },
  ];

  const handleLearnMore = () => {
    navigate("/about");
  };

  const facilities = [
    { icon: <FaPaintBrush />, title: "Art & Craft Zone" },
    { icon: <FaChalkboardTeacher />, title: "Smart Classrooms" },
    { icon: <FaFootballBall />, title: "Sports & Play Area" },
    { icon: <FaMusic />, title: "Music & Dance Room" },
    { icon: <FaLaptopCode />, title: "Computer Learning Lab" },
    { icon: <FaHeartbeat />, title: "Healthy Environment" },
  ];

  return (
    <>
      {/* Navbar */}
      <MyNavbar />

      {/* Header */}
      <Header />

      {/* About Section */}
      <section className="about-section">
        <h2>About Morning Bells Academy</h2>
        <p>
          Morning Bells Academy is a joyful and nurturing primary school located in Rishikesh.
          We believe in fostering creativity, curiosity, and confidence in every child through
          fun-based and activity-driven learning.
        </p>
        <p>
          Our vision is to create a safe, inspiring, and inclusive environment where young
          learners can grow academically, socially, and emotionally — preparing them for
          a bright future.
        </p>
        <button className="btn-primary" onClick={handleLearnMore}>
          Learn More
        </button>
      </section>

      {/* 🌟 Events Section */}
      <section className="facilities-section">
        <h2 style={{ color: "#ff7a00" }}>Our Events</h2>
        <p>Some glimpses from our exciting school activities & celebrations</p>

        <div className="facility-grid">
          {events.map((event) => (
            <div key={event.id} className="facility-card" style={{ padding: 0 }}>
              <img
                src={event.image}
                alt={event.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h4 style={{ color: "#ff7a00", marginBottom: "5px" }}>{event.title}</h4>
                <p style={{ color: "#555" }}>{event.date}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="btn-primary"
          onClick={() => navigate("/gallery")}
          style={{ marginTop: "30px" }}
        >
          View More
        </button>
      </section>

      {/* 🏫 Facilities Section */}
      <section className="facilities-section">
        <h2>Our School Facilities</h2>
        <div className="facility-grid">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="facility-card facility-icon-card"
              onClick={() => {
                if (f.title === "Art & Craft Zone") {
                  navigate("/art-craft");
                }
              }}
              style={{
                cursor: f.title === "Art & Craft Zone" ? "pointer" : "default",
              }}
            >
              <div className="facility-icon">{f.icon}</div>
              <h3>{f.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers Section */}
      <section className="teachers-section">
        <h2>Our Caring Teachers</h2>
        <div className="teacher-grid">
          <div className="teacher-card">
            <img src="src/assets/PassportImagewithouttext.webp" alt="Teacher 1" />
            <h4>Priyank Sharma</h4>
            <p>Class Teacher (Grade 1)</p>
          </div>
          <div className="teacher-card">
            <img src="src/assets/compressed_37c94e20cb613116de36841ba02309d2.webp" alt="Teacher 2" />
            <h4>Rahul Negi</h4>
            <p>Class Teacher (Grade 2)</p>
          </div>
          <div className="teacher-card">
            <img src="src/assets/passport-photo-costs-at-costco-1702177269.jpg" alt="Teacher 3" />
            <h4>Sonali Khatri</h4>
            <p>Activity Coordinator</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* ✅ CSS (Same as your old style, plus hover effects for icons) */}
      <style>{`
        /* ABOUT SECTION */
        .about-section {
          text-align: center;
          padding: 70px 10%;
          background: #fffaf2;
        }

        .about-section h2 {
          color: #ff7a00;
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .about-section p {
          font-size: 1rem;
          line-height: 1.7;
          margin: 10px auto;
          max-width: 800px;
        }
/* FACILITIES */
.facilities-section {
  padding: 70px 10%;
  background: #fff;
  text-align: center;
}

.facility-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 per row */
  gap: 50px;
  margin-top: 30px;
  justify-items: stretch; /* ensures cards fill equally */
  align-items: stretch;   /* equal height rows */
}

.facility-card {
  background: #fff7e6;
  border: 2px solid #ffb84d;
  border-radius: 12px;
  padding: 20px;
  font-weight: 600;
  color: #ff7a00;
  transition: all 0.3s ease;
  
  /* 👇 Equal size tweaks */
  display: flex;
  flex-direction: column;
  justify-content: center;  /* centers text vertically */
  align-items: center;      /* centers text horizontally */
  min-height: 220px;        /* adjust height as needed */
  height: 100%;             /* fills grid cell */
  box-sizing: border-box;
}
.facility-icon {
  font-size: 60px; /* 👈 increase this for bigger icons */
  margin-bottom: 15px;
  color: #ff7a00;  /* same orange color */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
}

        /* TEACHERS */
        .teachers-section {
          background: #fffaf2;
          padding: 70px 10%;
          text-align: center;
        }

        .teacher-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }

        .teacher-card {
          background: #fff7e6;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .teacher-card:hover {
          transform: translateY(-5px);
        }

        .teacher-card img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 10px;
        }

        .teacher-card h4 {
          color: #ff7a00;
          margin-bottom: 5px;
        }

        /* BUTTON */
        .btn-primary {
          background: white;
          color: #ff7a00;
          padding: 12px 25px;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #fff3e0;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .about-section, .facilities-section, .teachers-section {
            padding: 50px 5%;
          }
        }
      `}</style>
    </>
  );
}
