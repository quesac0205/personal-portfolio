import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = ["home",  "experience", "projects", "skills", "education", "contact"];

  return (
    <header className="navbar">
      <ul className="nav-pill">
        {navItems.map((item) => (
          <li key={item}>
            <button
              className={`nav-link ${active === item ? "active" : ""}`}
              onClick={() => handleClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;