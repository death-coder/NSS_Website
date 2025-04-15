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
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Upcoming Events</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition duration-300">
            {event.imageurl && (
              <img
                src={event.imageurl}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p><span className="font-medium text-gray-700">Date:</span> {event.date}</p>
                <p><span className="font-medium text-gray-700">Venue:</span> {event.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
