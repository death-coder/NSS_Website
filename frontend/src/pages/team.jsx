import React from "react";
import "./Team.css";

const teamData = {
    faculty: [
        {
            name: "Dummy Name",
            role: "Faculty Advisor",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            linkedin: "",
            email: ""
        },
        {
            name: "Dummy Name",
            role: "Co-Faculty Advisor",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            linkedin: "",
            email: ""
        },
    ],
    core: [
        {
            name: "Dummy Name",
            role: "Overall NSS Coordinator",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            linkedin: "",
            email: ""
        },
    ],
    heads: [
        {
            name: "Dummy Name",
            role: "Head, Operations",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            linkedin: "",
            email: ""
        },
        {
            name: "Dummy Name",
            role: "Head, Outreach",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            linkedin: "",
            email: ""
        },
    ],
    coordinators: [
        {
            name: "Dummy Name",
            role: "Coordinator",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            linkedin: "",
            email: ""
        },
        {
            name: "Dummy Name",
            role: "Coordinator",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            linkedin: "",
            email: ""
        },
        {
            name: "Dummy Name",
            role: "Coordinator",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            linkedin: "",
            email: ""
        },
        {
            name: "Dummy Name",
            role: "Coordinator",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            linkedin: "",
            email: ""
        },
    // ],
    // media: [
        {
            name: "Dummy Name",
            role: "Media Coordinator",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            linkedin: "",
            email: ""
        },
        {
            name: "Dummy Name",
            role: "Media Coordinator",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            linkedin: "",
            email: ""
        },
    ],
};

function TeamSection({ title, members }) {
    return (
        <section className="py-5 text-center bg-light">
            <div className="container">
                <h2 className="mb-4">{title}</h2>
                <div className="row justify-content-center g-4">
                    {members.map((member, index) => (
                        <div className="col-6 col-md-4 col-lg-3" key={index}>
                            <div className="card team-card shadow-sm h-100 border-0">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="card-img-top team-img rounded-circle p-3"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p className="card-text text-muted">{member.role}</p>

                                    <a
                                        href={`mailto:${member.email}`}
                                        className="btn-social email me-3"
                                        aria-label="Email"
                                    >
                                        <i className="bi bi-envelope-fill"></i>
                                    </a>

                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-social linkedin"
                                        aria-label="LinkedIn"
                                    >
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function team() {
    return (
        <>
            <TeamSection title="Faculty Advisors" members={teamData.faculty} />
            <TeamSection title="Core Team" members={teamData.core} />
            <TeamSection title="Heads" members={teamData.heads} />
            <TeamSection title="Coordinators" members={teamData.coordinators} />
            {/* <TeamSection title="Media Coordinators" members={teamData.media} /> */}
        </>
    );
}
