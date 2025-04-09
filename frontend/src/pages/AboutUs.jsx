import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">

      {/* Hero Section */}
      <section className="hero-parallax d-flex flex-column justify-content-center align-items-center text-white text-center">
        <h1 className="display-5 fw-bold">"Not Me, But You"</h1>
        <p className="lead">National Service Scheme – IIT Mandi Chapter</p>
      </section>

      {/* Who We Are */}
      <section className="container py-5">
        <h2 className="mb-4 text-center">Who We Are</h2>
        <p className="text-muted">
          The National Service Scheme (NSS) at IIT Mandi is a student-run organization committed to community service and nation-building. We aim to develop the personality of students through social service by involving them in constructive, community-oriented activities.
        </p>
      </section>

      {/* What We Do */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-center">What We Do</h2>
          <div className="row g-4">
            {[
              ["🌱", "Tree Plantation"],
              ["🩸", "Blood Donation Camps"],
              ["🏞️", "Cleanliness Drives"],
              ["🏫", "Rural Education"],
              ["🏥", "Health Camps"],
              ["🎗️", "Awareness Campaigns"]
            ].map(([icon, title], i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 text-center p-3">
                  <div className="fs-2">{icon}</div>
                  <h5 className="mt-3">{title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Impact Stats */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Our Impact</h2>
          <div className="row justify-content-center">
            {[
              ["👥", "150+", "Active Volunteers"],
              ["📅", "40+", "Events Conducted"],
              ["🏘️", "10+", "Villages Impacted"]
            ].map(([icon, num, label], i) => (
              <div className="col-md-3 mb-3" key={i}>
                <div className="stat-box py-3 px-2 bg-white shadow rounded">
                  <div className="fs-2">{icon}</div>
                  <h4 className="fw-bold mt-2">{num}</h4>
                  <p>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default AboutUs;
