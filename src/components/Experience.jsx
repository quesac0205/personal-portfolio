import React from "react";
import cienaLogo from "../assets/ciena.jpg";
import nokiaLogo from "../assets/nokia.jpg";
import clcLogo from "../assets/clc.jpg";
import nextGenLogo from "../assets/nextGen.jpg";
import pmcLogo from "../assets/pmc.jpg";
import aiLogo from "../assets/nokia2.jpg";
import bgImage from "../assets/experience-bg.jpg";

const experiences = [
  {
    title: "Embedded Software Developer Intern",
    company: "CIENA, Ottawa (Jan 2025 – Present)",
    logo: cienaLogo,
    details: [
      "Experience in low level C/C++ software development on real-time Embedded devices.",
      "Experience using multithreaded, and Microservices based software architectures.",
      "Experience of Linux kernel development (e.g. kernel drivers, bitbake, Yocto project).",
      "Knowledge of Embedded processors such as ARM computing processors.",
      "Self motivated and goal driven. Capable of working alone or as part of a team."
    ]
  },
  {
    title: "Tier-3 IP Technical Support Engineer",
    company: "NOKIA, Ottawa (Jul 2021 - Jan 2025)",
    logo: nokiaLogo,
    details: [
      "3+ years of experience supporting Data center and enterprise networks with extensive knowledge of IP networking protocols (TCP/IP, Ethernet, VLANs, QoS, OSPF, BGP, MPLS, NAT)",
      "Spearheaded Root Cause Analysis for high impact technical issues, meeting the SLAs.", 
      "Developed comprehensive technical documentation, assisting with troubleshooting.",
      "Experience with traffic generator tools such as Spirent, IXIA, Viavi, EXFO, etc."
    ]
  },
  {
    title: "Volunteer, Mentor with Ottawa Chapter",
    company: "Canada Learning Code (Jan 2024 - Dec 2024)",
    logo: clcLogo,
    details: [
      "Facilitate workshops aimed at teaching technical skills to participants of all age groups.",
      "Cultivate curiosity among participants and encouraging them to ask questions freely.",
      "Event Participation - Teen Hackathon/Workshop, In-person at Nokia Office, Mar 2024"
    ]
  },
  {
    title: "Volunteer, Notetaker for Students with Disabilities",
    company: "Paul Menton Center ( Sept 2024 - Dec 2024)",
    logo: pmcLogo,
    details: [
      "Provided detailed lecture notes of COMP 3000 course to support students with disabilities, enhancing student's accessibility and strengthen their learning outcomes.",
      "Received a Letter of Appreciation and CCR credit, recognizing volunteer contributions."
    ]
  },
  {
    title: "Member, NextGen Community",
    company: "NOKIA, Ottawa (Dec 2022 - Dec 2024)",
    logo: nextGenLogo,
    details: [
      "Mentored Technata Hacks participants offering insights on project focusing sustainability",
      "Represented Nokia at Algonquin College Career fair, providing guidance and support to students and other job seekers"
    ]
  },
  {
    title: "IP Customer Applications Engineer Intern",
    company: "NOKIA, Ottawa (May 2019 - Dec 2019)",
    logo: aiLogo,
    details: [
      "Reduced routine server backup downtime by developing automation scripts in Python.",
      "Conducted customer network audits, assisted in deployment of LAN switches during MW."
    ]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="section"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,23,0.85), rgba(10,10,23,0.85)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white"
      }}
    >
      <h2 className="gradient-title">Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <img src={exp.logo} alt={`${exp.company} Logo`} className="exp-logo" />
            <h3>{exp.title}</h3>
            <p><strong>{exp.company}</strong></p>
            <p><em>{exp.period}</em></p>
            <ul>
              {exp.details.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;