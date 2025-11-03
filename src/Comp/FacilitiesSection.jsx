import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaHeartbeat,
  FaChalkboardTeacher,
  FaFootballBall,
  FaMusic,
} from "react-icons/fa";

export default function FacilitiesSection() {
  const facilities = [
    { icon: <FaLaptopCode />, title: "Computer Learning Lab" },
    { icon: <FaPaintBrush />, title: "Art & Craft Zone" },
    { icon: <FaHeartbeat />, title: "Healthy Environment" },
    { icon: <FaChalkboardTeacher />, title: "Smart Classrooms" },
    { icon: <FaFootballBall />, title: "Sports & Play Area" },
    { icon: <FaMusic />, title: "Music & Dance Room" },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Our School Facilities</h2>
      <div style={styles.grid}>
        {facilities.map((f, i) => (
          <div key={i} style={styles.card} className="facility-card">
            <div style={styles.icon}>{f.icon}</div>
            <h3 style={styles.cardTitle}>{f.title}</h3>
          </div>
        ))}
      </div>

      <style>
        {`
          .facility-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .facility-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(255, 102, 0, 0.3);
          }
        `}
      </style>
    </section>
  );
}

const styles = {
  section: {
    textAlign: "center",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #ffffff, #f5f9ff)",
    fontFamily: "Poppins, sans-serif",
  },
  title: {
    color: "#004aad",
    fontSize: "2rem",
    marginBottom: "40px",
    fontWeight: "700",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#ff6600",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "1.1rem",
    color: "#333",
    marginTop: "5px",
  },
};
