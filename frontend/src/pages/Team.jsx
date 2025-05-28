import React from "react";

const teamData = {
  heads: [
    {
      name: "Varun Kumar Jayapaul",
      role: "Faculty Advisor",
      img: "https://res.cloudinary.com/dfiyyyjp8/image/upload/v1748458785/vkj_edwdlw.png",
      linkedin: "https://www.linkedin.com/in/varunkumar-jayapaul-170001335/",
      email: ""
    },
    {
      name: "Dr. Robin Khosla",
      role: "Co-Advisor",
      img: "https://res.cloudinary.com/dfiyyyjp8/image/upload/v1748458786/robin_wzquya.jpg",
      linkedin: "https://www.linkedin.com/in/robin-khosla/",
      email: ""
    },
    {
      name: "Atul Saini",
      role: "Junior Assistant",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
      linkedin: "",
      email: ""
    },
  ],
  headcoor: [
    {
      name: "Om Maheshwari",
      role: "Head Coordinator",
      img: "https://res.cloudinary.com/dfiyyyjp8/image/upload/v1748458581/om_bbj6aw.jpg",
      linkedin: "https://www.linkedin.com/in/om-maheshwari-8a4996299/",
      email: "b23089@students.iitmandi.ac.in"
    }
  ],
  coordinators: [
    {
      name: "Rohan Aggarwal",
      role: "Coordinator",
      img: "https://res.cloudinary.com/dfiyyyjp8/image/upload/v1748458581/rohan_ezbzkk.jpg",
      linkedin: "https://www.linkedin.com/in/rohan-aggarwal-3abb32323/",
      email: "b24218@students.iitmandi.ac.in"
    },
    {
      name: "Swastik Verma",
      role: "Coordinator",
      img: "https://res.cloudinary.com/dfiyyyjp8/image/upload/v1748458581/swastik_qxec5f.jpg",
      linkedin: "https://www.linkedin.com/in/swastik-verma-795612319/",
      email: "im24041@students.iitmandi.ac.in"
    },
    {
      name: "Manmeet Kaur",
      role: "Coordinator",
      img: "https://res.cloudinary.com/dfiyyyjp8/image/upload/v1748458475/manmeet_o5zuyy.jpg",
      linkedin: "https://www.linkedin.com/in/manmeet-kaur-550139309/",
      email: "b24255@students.iitmandi.ac.in"
    },
    {
      name: "Paridhi Mittal",
      role: "Coordinator",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
      linkedin: "https://www.linkedin.com/in/paridhi-mittal-69b76531b/",
      email: "b24400@students.iitmandi.ac.in"
    },
    {
      name: "Pari",
      role: "Media Coordinator",
      img: "https://res.cloudinary.com/dfiyyyjp8/image/upload/v1748458427/pari_ymf7od.jpg",
      linkedin: "https://www.linkedin.com/in/pari-bhansali-4ba818213/",
      email: "b24014@students.iitmandi.ac.in"
    },
    {
      name: "Utkarsh Sahu",
      role: "Media Coordinator",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
      linkedin: "https://www.linkedin.com/in/utkarsh-sahu-989b22269/",
      email: "b24172@students.iitmandi.ac.in"
    },
  ],
};

function TeamSection({ title, members }) {
  if (!members || members.length === 0) return null;
  return (
    <section className="py-16 text-center">
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 drop-shadow-sm text-center"  style={{ fontFamily: "'Gabriela', serif" }}>{title}</h2>
            <div className="h-1 w-24 bg-blue-400 mx-auto mb-8 rounded-full"></div>
          </>
        )}
        <div className="flex flex-wrap justify-center gap-10">
          {members.map((member, index) => (
            <div
              className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-white/30 transition transform hover:-translate-y-2 flex flex-col items-center p-6 mx-auto max-w-xs"
              key={index}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full border-4 border-cyan-100 shadow mb-4"
              />

              <h5 className="text-xl font-semibold text-blue-700">{member.name}</h5>
              <p className="text-sm text-gray-600 mb-4">{member.role}</p>
              <div className="flex gap-4 justify-center">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-700 text-white transition"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-800 text-white transition"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Team() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Blurred circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-indigo-100 rounded-full filter blur-2xl opacity-50 pointer-events-none"></div>
      {/* Blurred squares */}
      <div className="absolute top-24 right-20 w-56 h-56 bg-gradient-to-br from-blue-200 via-cyan-100 to-indigo-100 rounded-2xl filter blur-2xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-32 left-10 w-44 h-44 bg-gradient-to-tr from-cyan-100 via-blue-100 to-indigo-100 rounded-xl filter blur-2xl opacity-40 pointer-events-none"></div>
      {/* Blurred polygon (SVG) */}
      <svg className="absolute left-1/2 top-1/3 w-72 h-72 opacity-30 filter blur-2xl pointer-events-none" style={{transform: "translate(-50%, -50%)"}} viewBox="0 0 200 200">
        <polygon points="100,10 190,60 160,190 40,190 10,60" fill="#a5b4fc" />
      </svg>
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
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-center text-blue-800 mt-16 mb-8 drop-shadow-lg"  style={{ fontFamily: "'Gabriela', serif" }}>Meet Our Team</h1>
        <TeamSection title="Heads" members={teamData.heads} />
        <TeamSection title="Head Coordinator" members={teamData.headcoor} />
        <TeamSection title="Coordinators" members={teamData.coordinators} />
      </div>
    </div>
  );
}
