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

    // <section className="container my-5">
    //   {/* Section Title */}
    //   <h2 className="text-center text-primary mb-4">
    //     About NSS IIT Guwahati
    //   </h2>

    //   {/* Flexbox for Image and Text */}
    //   <div className="row align-items-center">
    //     {/* Left: NSS Logo */}
    //     <div className="col-md-5 text-center">
    //       <img
    //         src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/National_Service_Scheme.svg/600px-National_Service_Scheme.svg.png"
    //         alt="NSS Logo"
    //         className="img-fluid rounded shadow"
    //         style={{ maxWidth: "80%" }}
    //       />
    //     </div>

    //     {/* Right: Mission and Vision */}
    //     <div className="col-md-7">
    //       <h4 className="text-primary">Our Mission</h4>
    //       <p>
    //         The National Service Scheme (NSS) at IIT Guwahati is dedicated to
    //         developing students' personality through community service. Our
    //         mission is to instill social welfare in students and provide service
    //         to society without bias.
    //       </p>

    //       <h4 className="text-primary">Our Vision</h4>
    //       <p>
    //         We envision a society where young minds are actively engaged in
    //         nation-building through social service, environmental conservation,
    //         and community development.
    //       </p>
    //     </div>
    //   </div>

    //   {/* Stats Section */}
    //   <div className="row mt-4 text-center">
    //     <div className="col-md-4">
    //       <div className="p-3 bg-light rounded shadow">
    //         <h3 className="text-success fw-bold">1000+</h3>
    //         <p>Volunteers</p>
    //       </div>
    //     </div>

    //     <div className="col-md-4">
    //       <div className="p-3 bg-light rounded shadow">
    //         <h3 className="text-success fw-bold">50+</h3>
    //         <p>Projects</p>
    //       </div>
    //     </div>

    //     <div className="col-md-4">
    //       <div className="p-3 bg-light rounded shadow">
    //         <h3 className="text-success fw-bold">10+</h3>
    //         <p>Years</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default AboutSection;
