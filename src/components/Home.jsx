import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import profileImg from "../assets/profile2.jpeg";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-glass">
        <img src={profileImg} alt="Profile" className="profile-img" />

        <h1 style={{ fontSize: "2.0rem", marginBottom: "1rem" }}>
          Welcome to my portfolio!
        </h1>

        <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 2rem" }}>
          Hello, I'm Sachin👋 -  a 4th year Carleton University Computer Science Student. I'm a problem solver, thinker and a life long learner, passionate about full-stack innovation and building scalable, real-time AI-powered systems. I focus on building systems that solve real-world problems and deliver meaningful impact. 
        </p>

        <div className="button-row">
          <a href="https://github.com/quesac0205" target="_blank" rel="noreferrer" className="btn light">
            <FaGithub style={{ marginRight: "0.5rem" }} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sachin-bansal-q1/" target="_blank" rel="noreferrer" className="btn dark">
            <FaLinkedin style={{ marginRight: "0.5rem" }} />
            LinkedIn
          </a>
          <a href="/Sachin Bansal - Resume.pdf" download className="btn light">
            <HiDownload style={{ marginRight: "0.5rem" }} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;