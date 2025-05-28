import React from "react";
import "./AboutUs.css"; // Only for .hero-parallax and overlay

const AboutUs = () => {
  return (
    <div className="relative font-sans min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Blurred shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-indigo-100 rounded-full filter blur-2xl opacity-50 pointer-events-none"></div>
      <div className="absolute top-40 left-[-6rem] w-80 h-44 bg-gradient-to-br from-cyan-200 via-teal-100 to-blue-100 rounded-[60%] filter blur-2xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-32 right-[-4rem] w-72 h-40 bg-gradient-to-br from-indigo-200 via-violet-100 to-blue-100 rounded-[50%] filter blur-2xl opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-24 bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 rounded-[60%] filter blur-2xl opacity-30 pointer-events-none" style={{transform: "translate(-50%, -50%)"}}></div>
      {/* Blurred square */}
      <div className="absolute top-24 right-20 w-56 h-56 bg-gradient-to-br from-blue-200 via-cyan-100 to-indigo-100 rounded-2xl filter blur-2xl opacity-40 pointer-events-none"></div>
      {/* Blurred polygon (SVG) */}
      <svg className="absolute left-1/2 top-1/3 w-72 h-72 opacity-30 filter blur-2xl pointer-events-none" style={{transform: "translate(-50%, -50%)"}} viewBox="0 0 200 200">
        <polygon points="100,10 190,60 160,190 40,190 10,60" fill="#a5b4fc" />
      </svg>
      {/* Dot pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#38bdf8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Hero Section */}
      <section className="hero-parallax flex flex-col justify-center items-center text-white text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-pulse"  style={{ fontFamily: "'Poppins', serif" }}>"Not Me, But You"</h1>
        <p className="mt-4 text-xl md:text-2xl font-medium tracking-wide drop-shadow-md">
          National Service Scheme – IIT Mandi Chapter
        </p>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6"  style={{ fontFamily: "'Gabriela', serif" }}>Who We Are</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl shadow p-6 border border-white/30">
          The National Service Scheme (NSS) at IIT Mandi is a student-run organization committed to community service and nation-building. We aim to develop the personality of students through social service by involving them in constructive, community-oriented activities.
        </p>
      </section>

      {/* What We Do */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10"  style={{ fontFamily: "'Gabriela', serif" }}>What We Do</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["🌱", "Tree Plantation"],
              ["🩸", "Blood Donation Camps"],
              ["🏞️", "Cleanliness Drives"],
              ["🏫", "Rural Education"],
              ["🏥", "Health Camps"],
              ["🎗️", "Awareness Campaigns"]
            ].map(([icon, title], i) => (
              <div key={i} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 p-8 text-center border border-white/30">
                <div className="text-4xl">{icon}</div>
                <h5 className="mt-4 text-xl font-semibold text-gray-800">{title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-10"  style={{ fontFamily: "'Gabriela', serif" }}>Our Impact</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              ["👥", "150+", "Active Volunteers"],
              ["📅", "40+", "Events Conducted"],
              ["🏘️", "10+", "Villages Impacted"]
            ].map(([icon, num, label], i) => (
              <div key={i} className="w-60 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 border border-white/30">
                <div className="text-4xl">{icon}</div>
                <h4 className="text-2xl font-bold mt-3 text-indigo-900">{num}</h4>
                <p className="text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
