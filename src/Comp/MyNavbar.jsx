import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ make sure this file exists

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        width: "100vw", // ✅ full viewport width
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ff9d00ff",
        color: "white",
        padding: "0.8rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        left: 0,
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* Logo + Title */}
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "white",
        }}
        onClick={() => setIsOpen(false)}
      >
        <img
          src={logo}
          alt="Morning Bells Academy Logo"
          style={{
            height: "80px",
            width: "80px",
            borderRadius: "50%",
            marginRight: "10px",
            objectFit: "cover",
          }}
        />
        <span
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            letterSpacing: "0.5px",
            whiteSpace: "nowrap",
          }}
        >
          Morning Bells Academy
        </span>
      </Link>

      {/* Hamburger Button (mobile) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "none",
          flexDirection: "column",
          cursor: "pointer",
        }}
        className="hamburger"
      >
        <span
          style={{
            height: "3px",
            width: "25px",
            background: "white",
            marginBottom: "4px",
            borderRadius: "2px",
          }}
        ></span>
        <span
          style={{
            height: "3px",
            width: "25px",
            background: "white",
            marginBottom: "4px",
            borderRadius: "2px",
          }}
        ></span>
        <span
          style={{
            height: "3px",
            width: "25px",
            background: "white",
            borderRadius: "2px",
          }}
        ></span>
      </div>

      {/* Nav Links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1.5rem",
          margin: 0,
          transition: "all 0.3s ease",
        }}
        className={`nav-links ${isOpen ? "open" : ""}`}
      >
        <li>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 500,
            }}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 500,
            }}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/classes"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 500,
            }}
            onClick={() => setIsOpen(false)}
          >
            Classes
          </Link>
        </li>

        <li>
          <Link
            to="/gallery"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 500,
            }}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
        </li>

        <li>
          <Link
            to="/admission"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 500,
            }}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* ✅ Responsive CSS */}
      <style>{`
        body {
          margin: 0; /* removes default margin so navbar is truly full width */
          overflow-x: hidden;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex !important;
          }

          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: #111;
            flex-direction: column;
            align-items: center;
            max-height: 0;
            overflow: hidden;
          }

          .nav-links.open {
            max-height: 350px;
            padding: 1rem 0;
          }

          .nav-links li {
            margin: 10px 0;
          }
        }
      `}</style>
    </nav>
  );
}

export default MyNavbar;
