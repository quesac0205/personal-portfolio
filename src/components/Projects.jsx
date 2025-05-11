import React from "react";
import bgImage from "../assets/projects-bg.jpg";
import project1Logo from "../assets/project1.jpg";
import project2Logo from "../assets/project2.jpg";
import project3Logo from "../assets/project3.jpg";
import project4Logo from "../assets/project4.jpg";
import project5Logo from "../assets/project5.jpg";


const projects = [
  {
    title: "GetHub - a version tracking system written in C++",
    desc: "Designed a C++ dynamic memory managed version tracking system simulating GitHub with Repository/Files management and Client functionality. The system supports adding, viewing, and removing repositories and their files. Implemented object-oriented design principles with proper destructors, deep copy logic, and modular classes. A UML diagram was created to visualize the architecture.",
    logo: project1Logo,
    github: "https://github.com/quesac0205/GetHub",
    demo: "",
    stack: ["C++", "Object Oriented Design", "Dynamic Memory Management", "UML Diagram"],
  },
  {
    title: "BecomingFree - one stop shop for all of your freelancing needs",
    desc: "Developed a Python Flask based Freelancer Management System to track clients, projects, and earnings with CRUD operations and a lightweight SQLite backend. Integrated a clean web interface for admin actions, client listings, and status updates.",
    logo: project2Logo,
    github: "https://github.com/quesac0205/BecomeFree",
    demo: "https://www.youtube.com/watch?v=ErwT2w_BcYI&ab_channel=SachinBansal",
    stack: ["Python", "Flask", "SQLite", "System Design"],
  },
  {
    title: "RideShare - Uber like simulation",
    desc: "Built a C++ RideShare simulation using object-oriented design and the Visitor pattern to enable dynamic drawing of Customers and Drivers on a city map. Implemented location-based ride matching with driver filtering based on vehicle capacity and rating. ",
    logo: project5Logo,
    github: "https://github.com/quesac0205/RideShare",
    demo: "",
    stack: ["Python", "C++", "Object Oriented Design", "System Design"],
  },
  {
    title: "Custom C/C++ based Linux Shell",
    desc: "Created a customized Linux shell that supports basic bash shell operations.",
    logo: project3Logo,
    github: "https://github.com/quesac0205",
    demo: "",
    stack: ["System Programming", "C", "C++", "Inter Process Communication", "Memory Management"],
  },
  {
    title: "TinyML on Embedded device",
    desc: "Work in progress - Deployed Tiny Machine Learning Model on an ARM processor based embedded system using Tensorflow Lite. This project is still work in progress. More details will be shared later.",
    logo: project4Logo,
    github: "",
    demo: "",
    stack: ["TensorFlow Lite", "Neural Networks", "Tiny ML", "Embedded Devices", "Microcontrollers"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,23,0.85), rgba(10,10,23,0.85)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <h2 className="gradient-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            {project.logo && <img src={project.logo} alt={`${project.title} Logo`} className="project-logo" />}
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <ul className="stack-list">
              {project.stack.map((tech, j) => (
                <li key={j}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn light">
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn dark">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;