import React from 'react';
import './home.css';
import { Link } from "react-router-dom";
import Carousel from './../components/Carousel';

function home() {
  return (
    <div className="home-page">

        <Carousel />
      {/* Hero Section */}
      {/* <HeroSection /> */}
      
      {/* About NSS Brief */}
      <AboutNSSBrief />
      
      {/* Recent Events */}
      <RecentEvents />
      
      {/* Impact Statistics */}
      <ImpactStats />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* News and Updates */}
      <NewsUpdates />

      
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <h1>Welcome to NSS</h1>
        <h2>VTM NSS College Dhanuvachapuram</h2>
        <p>Not Me But You</p>
        <button className="btn btn-primary btn-lg">Join Us</button>
      </div>
    </div>
  );
}

// About NSS Brief Component
function AboutNSSBrief() {
  return (
    <div className="section-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">About NSS</h2>
            <div className="section-underline"></div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p>"To build up an epistemological platform for exploring new realms in science and technology, art and culture, to improve the socio-economic status of the community and to instill values of life, diligence and skill in students"</p>
          </div>
          <div className="col-md-6">
            <h3>Our Vision</h3>
            <p>"To interlace a culture of civility with equity and excellence, by believing in a democratic dissemination of knowledge that transcends all barriers of segregation"</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <Link to="/AboutUs">
            <button className="btn btn-primary">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Recent Events Component
function RecentEvents() {

  const events = [
    {
      id: 1,
      title: "Tree Plantation Drive",
      date: "April 32, 2025",
      image: "https://images.unsplash.com/photo-1625758476104-f2ed6c81248f",
      description: "Join us for a tree plantation drive at the college campus."
    },
    {
      id: 2,
      title: "Blood Donation Camp",
      date: "March 32, 2025",
      image: "https://plus.unsplash.com/premium_photo-1682309704250-6bac0f499665",
      description: "Annual blood donation camp organized in collaboration with local hospital."
    },
    {
      id: 3,
      title: "HIV Awareness",
      date: "February 32, 2025",
      image: "https://plus.unsplash.com/premium_photo-1723568541719-a9abad0b7919",
      description: "Spreading awareness about HIV AIDS among citizens"
    }
  ];

  return (
    <div className="section-container bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Recent Events</h2>
            <div className="section-underline"></div>
          </div>
        </div>
        <div className="row mt-4">
          {events.map(event => (
            <div className="col-md-4 mb-4" key={event.id}>
              <div className="card h-100 event-card">
                <img src={event.image} className="card-img-top" alt={event.title} />
                <div className="card-body">
                  <span className="badge bg-primary mb-2">{event.date}</span>
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline-primary btn-sm">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <Link to='./events'>
            <button className="btn btn-primary" >View All Events</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Impact Statistics Component
function ImpactStats() {
  const stats = [
    { id: 1, number: "500+", label: "Volunteers" },
    { id: 2, number: "50+", label: "Events" },
    { id: 3, number: "1000+", label: "Service Hours" },
    { id: 4, number: "20+", label: "Awards" }
  ];

  return (
    <div className="section-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Our Impact</h2>
            <div className="section-underline"></div>
          </div>
        </div>
        <div className="row mt-4">
          {stats.map(stat => (
            <div className="col-md-3 text-center stat-item" key={stat.id}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Testimonials Component
function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Utkarsh",
      role: "NSS Coordinator",
      image: "",
      quote: "Being part of NSS has been a life-changing experience. I've learned the value of service and community."
    },
    {
      id: 2,
      name: "Paridhi",
      role: "NSS Coordinator",
      image: "https://source.unsplash.com/random/100x100/?man",
      quote: "The enthusiasm and dedication of our volunteers make every project successful and impactful."
    },
  ];

  return (
    <div className="section-container bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Testimonials</h2>
            <div className="section-underline"></div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div id="testimonialCarousel" className="carousel slide testimonial-carousel" data-bs-ride="carousel">
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={testimonial.id}>
                    <div className="testimonial-item text-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="testimonial-image"
                      />
                      <p className="testimonial-quote">"{testimonial.quote}"</p>
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// News and Updates Component
function NewsUpdates() {
  const news = [
    {
      id: 1,
      title: "Dummy Heading",
      date: "April 32, 2025",
      content: "Sabkuch dummy data."
    },
    {
      id: 2,
      title: "Dummy Heading",
      date: "March 33, 2025",
      content: "Sabkuch firse dummy."
    }
  ];

  return (
    <div className="section-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">News & Updates</h2>
            <div className="section-underline"></div>
          </div>
        </div>
        <div className="row mt-4">
          {news.map(item => (
            <div className="col-md-6 mb-4" key={item.id}>
              <div className="card news-card">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.date}</h6>
                  <p className="card-text">{item.content}</p>
                  <a href="#" className="btn btn-link p-0">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default home;
