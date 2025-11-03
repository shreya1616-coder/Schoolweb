import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/9.webp";
import img2 from "../assets/10.webp";

function Header() {
  const navigate = useNavigate();

  // ✅ Button click hone par contact page par navigate karega
  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <Carousel controls={false} indicators={false} fade interval={4000}>
      <Carousel.Item>
        <ExampleCarouselImage
          src={img1}
          alt="Welcome to Morning Bells Academy"
          captionTitle="Welcome to Morning Bells Academy"
          captionText="Empowering Students with Knowledge and Creativity"
          buttonText="Contact Us"
          onButtonClick={handleContactClick}
        />
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage
          src={img2}
          alt="Join Our Exciting Classes"
          captionTitle="Join Our Exciting Classes"
          captionText="Explore, Learn, and Grow"
          buttonText="Contact Us"
          onButtonClick={handleContactClick}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
