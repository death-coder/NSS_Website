import React from "react";
import "../App.css";

const AboutSection = () => {
  return (


    <div className="container about-section">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="custom-card shadow-lg p-4">
            <div className="text-center">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-subtitle">Discover the passion behind our platform</p>
            </div>
            <div className="about-content">
              <p>
                Welcome to <strong>our platform</strong>, where we bring you the 
                **most thrilling concerts, top artists, and unforgettable performances.** 
                Join us on this exciting journey and be part of an experience like no other!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
