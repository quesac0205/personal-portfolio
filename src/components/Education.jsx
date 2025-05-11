import React from "react";
import carletonLogo from "../assets/carleton.png";
import algonquinLogo from "../assets/algonquin.png";
import certLogo from "../assets/cert.png";
import bgImage from "../assets/education-bg.png";

const educationList = [
  {
    title: "B.Sc. in Computer Science (Honours) - AI & ML Stream",
    school: "Carleton University, Ottawa, ON",
    date: "Expected Graduation: Apr 2026, Major CGPA: 10.40",
    achievements: "(Donald William Buchanan Scholarship, Dean's Honors List)",
    logo: carletonLogo,
  },
  {
    title: "Associate Diploma in Computer Systems - Networking ",
    school: "Algonquin College, Ottawa, ON",
    date: "Completed: Apr 2020, Major CGPA: 3.74",
    achievements: "(4x Dean’s Honor List, Graduated with Honors distinction)",
    logo: algonquinLogo,
  },
  {
    title: "Certifications",
    fir: "Nokia Network Routing Specialist I (Equivalent to CCNA)",
    sec: "Nokia Network Routing Specialist II",
    thir: "Fortinet NSE Level I and Level II",
    for: "Course - Fundamentals of TinyML by HarvardX",
    five: "Course - Fundamentals of R programming",
    logo: certLogo,
  },


];

const Education = () => {
  return (
    <section
      id="education"
      className="section"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,23,0.8), rgba(10,10,23,0.8)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white"
      }}
    >
      <h2 className="gradient-title">Education</h2>
      <div className="education-grid">
        {educationList.map((edu, index) => (
          <div className="education-card" key={index}>
            <img src={edu.logo} alt={edu.school} className="school-logo" />
            <h3>{edu.title}</h3>
            <p>{edu.school}</p>
            <p>{edu.date}</p>
            <p>{edu.coursework}</p>
            <p>{edu.fir}</p>
            <p>{edu.sec}</p>
            <p>{edu.thir}</p>
            <p> {edu.for}</p>
            <p> {edu.five}</p>
            <p>{edu.achievements}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
