import React from "react";
import bgImage from "../assets/skills-bg.jpg";

const skillsData = {
  "Programming Languages": [
    { name: "C", level: 5 },
    { name: "C++", level: 4 },
    { name: "Python", level: 4 },
    { name: "Java", level: 3 },
    { name: "SQL", level: 4 },
    { name: "R", level: 2 },
    { name: "Deno/JavaScript", level: 3 },
    { name: "HTML/CSS", level: 3 },
  ],
  "Tools & Frameworks": [
    { name: "TensorFlow", level: 3 },
    { name: "Docker", level: 3 },
    { name: "Kubernetes", level: 3 },
    { name: "Git", level: 4 },
    { name: "VS Code", level: 4 },
    { name: "Bitbucket", level: 4 },
    { name: "OpenGrok", level: 4 },
    { name: "Jira/Salesforce", level: 4 },
  ],
  "Embedded & OS": [
    { name: "Unix/Linux", level: 4 },
    { name: "VxWorks", level: 3 },
    { name: "Multithreading", level: 4},
    { name: "Microservices Arc", level: 3 },
    { name: "gRPC/REST", level: 3 },
    { name: "GDB", level: 3 },
    { name: "RTOS", level: 3 },
    { name: "SPI", level: 3 },
  ],
  "Networking Protocols": [
    { name: "TCP/IP", level: 5 },
    { name: "Ethernet", level: 5 },
    { name: "BGP/OSPF", level: 4 },
    { name: "DHCP/DNS", level: 4 },
    { name: "NAT", level: 4 },
    { name: "QoS", level: 3 },
    { name: "ONT Testing", level: 4 },
    { name: "Windows AD", level: 5 }, 
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="section"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,23,0.85), rgba(10,10,23,0.85)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <h2 className="gradient-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skills-card" key={category}>
            <h3>{category}</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill.name}>
                  {skill.name}
<span className="star-level">
  {Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      {i < skill.level ? "★" : "☆"}
    </span>
  ))}
</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;