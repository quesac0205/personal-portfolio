import React from "react";
import bgImage from "../assets/contact-bg.jpg";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="footer"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,23,0.85), rgba(10,10,23,0.85)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <h2>Think I can add value to your team? Contact Me!</h2>
      <p>Email: SachinBansal@cmail.carleton.com </p>
      <p>Alternate Email: Sachinbansal3668@gmail.com</p>
      <p>Phone: +1 (613) 879-9876</p>
      <p>(Canadian PR, No Need for Sponsorship, Willing to relocate anywhere within Canada & US).</p>
    </footer>
  );
};

export default Contact;