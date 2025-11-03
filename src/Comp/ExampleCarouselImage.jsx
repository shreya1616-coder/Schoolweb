import React from "react";
import Button from "react-bootstrap/Button";

function ExampleCarouselImage({ src, alt, captionTitle, captionText, buttonText, onButtonClick }) {
  return (
    <div className="position-relative text-center">
      <img
        className="d-block w-100"
        src={src}
        alt={alt}
        style={{ height: "90vh", objectFit: "cover", filter: "brightness(70%)" }}
      />

      {/* Overlay Text */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-light"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
      >
        <h1>{captionTitle}</h1>
        <p>{captionText}</p>
        {buttonText && (
          <Button
            variant="light"
            size="lg"
            onClick={onButtonClick}
            style={{
              marginTop: "1rem",
              borderRadius: "25px",
              fontWeight: "bold",
            }}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}

export default ExampleCarouselImage;
