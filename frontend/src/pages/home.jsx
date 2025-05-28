// import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Carousel from '../components/Carousel';
import "./Home.css";

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-indigo-100 rounded-full filter blur-2xl opacity-50 pointer-events-none"></div>
      {/* Subtle pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#38bdf8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        <Carousel />

        {/* About NSS */}
        <AboutNSSBrief />

        {/* Recent Events */}
        <RecentEvents />

        {/* Impact Statistics */}
        <ImpactStats />

        {/* Testimonials */}
        <Testimonials />

        {/* News and Updates */}
        {/* <NewsUpdates /> */}
      </div>
    </div>
  );
}

function AboutNSSBrief() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4 drop-shadow-sm animate-fade-in-up">About NSS</h2>
        <div className="h-1 w-24 bg-blue-400 mx-auto mb-8 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-white/30">
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              "To build up an epistemological platform for exploring new realms in science and technology, art and culture..."
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-white/30">
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              "To interlace a culture of civility with equity and excellence, by believing in a democratic dissemination..."
            </p>
          </div>
        </div>
        <Link to="/AboutUs">
          <button className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-105">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}

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
      title: "Teach Your Neighbour",
      date: "March 32, 2025",
      image: "https://res.cloudinary.com/dfiyyyjp8/image/upload/v1748199842/TYN_czvnhx.jpg",
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
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-700 drop-shadow-sm">Recent Events</h2>
        <div className="h-1 w-24 bg-indigo-400 mx-auto mb-8 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-white/30 transition">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-gray-500">{event.date}</span>
                <h3 className="text-xl font-semibold mt-2 text-blue-700">{event.title}</h3>
                <p className="text-gray-700 mt-2">{event.description}</p>
                {/* <button className="mt-4 text-blue-600 hover:underline font-semibold">Read More</button> */}
              </div>
            </div>
          ))}
        </div>
        <Link to="./events">
          <button className="mt-8 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-600 hover:to-indigo-600 text-white py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-105">
            View All Events
          </button>
        </Link>
      </div>
    </section>
  );
}

function ImpactStats() {
  const stats = [
    { id: 1, number: "500+", label: "Volunteers" },
    { id: 2, number: "50+", label: "Events" },
    { id: 3, number: "1000+", label: "Service Hours" },
    { id: 4, number: "20+", label: "Awards" }
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-700 drop-shadow-sm">Our Impact</h2>
        <div className="h-1 w-24 bg-blue-400 mx-auto mb-8 rounded-full"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div key={stat.id} className="text-center bg-white/50 backdrop-blur-lg rounded-xl shadow-md p-6 border border-white/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Utkarsh",
      role: "NSS Coordinator",
      image: "https://icons.veryicon.com/png/o/system/ali-mom-icon-library/random-user.png",
      quote: "Being part of NSS has been a life-changing experience. I've learned the value of service and community."
    },
    {
      id: 2,
      name: "Paridhi",
      role: "NSS Coordinator",
      image: "https://icons.veryicon.com/png/o/system/ali-mom-icon-library/random-user.png",
      quote: "The enthusiasm and dedication of our volunteers make every project successful and impactful."
    },
    {
      id: 3,
      name: "ParidhiM",
      role: "NSS Coordinator",
      image: "https://icons.veryicon.com/png/o/system/ali-mom-icon-library/random-user.png",
      quote: "The enthusiasm and dedication of our volunteers make every project successful and impactful."
    },
    {
      id: 4,
      name: "ParidhiMittal",
      role: "NSS Coordinator",
      image: "https://icons.veryicon.com/png/o/system/ali-mom-icon-library/random-user.png",
      quote: "The enthusiasm and dedication of our volunteers make every project successful and impactful."
    },
  ];

  const CARDS_PER_VIEW = 2;

  const slides = [
    ...testimonials.slice(-CARDS_PER_VIEW),
    ...testimonials,
    ...testimonials.slice(0, CARDS_PER_VIEW)
  ];
  const totalSlides = testimonials.length;
  const [current, setCurrent] = useState(CARDS_PER_VIEW);
  const [transition, setTransition] = useState(true);
  const trackRef = useRef();

  // Move to next/prev
  const handlePrev = () => {
    setTransition(true);
    setCurrent(current - 1);
  };
  const handleNext = () => {
    setTransition(true);
    setCurrent(current + 1);
  };

  // Dot navigation
  const handleDot = (idx) => {
    setTransition(true);
    setCurrent(idx + CARDS_PER_VIEW);
  };

  // Looping logic
  useEffect(() => {
    if (!transition) {
      const id = setTimeout(() => setTransition(true), 20);
      return () => clearTimeout(id);
    }
  }, [transition]);

  // When transition ends, jump to real slides if needed
  const handleTransitionEnd = () => {
    if (current === 0) {
      setTransition(false);
      setCurrent(totalSlides);
    }
    if (current === totalSlides + CARDS_PER_VIEW) {
      setTransition(false);
      setCurrent(CARDS_PER_VIEW);
    }
  };

  // Calculate transform
  const cardWidthPercent = 100 / CARDS_PER_VIEW;
  const translateX = -current * cardWidthPercent;

  return (
    <section className="w-full py-6  backdrop-blur-md">
      
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-4 drop-shadow-sm">Testimonials</h2>
        <div className="h-1 w-24 bg-indigo-400 mx-auto mb-8 rounded-full"></div>
        <div className="relative flex items-center justify-center overflow-hidden" style={{borderRadius:"10px"}}>
          <button
            className="absolute left-0 z-10 bg-indigo-100 hover:bg-indigo-200 rounded-full p-2 shadow transition"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="w-full overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-x-8"
              style={{
                // width: `${(slides.length * 100) / CARDS_PER_VIEW}%`,
                width: `{cardWidthPercent}%`,
                transition: transition ? "transform 0.5s cubic-bezier(.4,0,.2,1)" : "none",
                transform: `translateX(${translateX}%)`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
            {slides.map((testimonial, idx) => (
              <div
                key={idx + testimonial.id}
                className="flex-shrink-0"
                style={{ width: "50%" }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-white/30 h-full w-full flex flex-col items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-indigo-100 shadow mb-4 object-cover"
                  />
                  <p className="italic text-gray-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <h5 className="font-bold text-indigo-700">{testimonial.name}</h5>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            ))}

            </div>
          </div>
          <button
            className="absolute right-0 z-10 bg-indigo-100 hover:bg-indigo-200 rounded-full p-2 shadow transition"
            onClick={handleNext}
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Dots navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${current - CARDS_PER_VIEW === idx ? "bg-indigo-600" : "bg-indigo-200"}`}
              onClick={() => handleDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );

}
export default Home;