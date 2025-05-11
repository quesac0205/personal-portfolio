import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      {/* Add other sections here later */}
    </div>
  );
}

export default App;
