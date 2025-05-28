import React, { useEffect, useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 overflow-x-hidden py-10 px-4 sm:px-6 lg:px-8">
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

      {/* Main content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12 drop-shadow-lg"  style={{ fontFamily: "'Gabriela', serif" }}>Events Organized</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300 border border-white/30"
            >
              {event.imageurl && (
                <img
                  src={event.imageurl}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{event.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p><span className="font-medium text-gray-700">Date:</span> {event.date}</p>
                  <p><span className="font-medium text-gray-700">Venue:</span> {event.venue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
