import React, { useEffect, useState } from "react";

function Heading() {
  const [activeSection, setActiveSection] = useState("");

  const handleClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full h-14 flex justify-between items-center px-6">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-semibold text-center">Logo</h1>
      </div>

      {/* Nav list */}
      <nav>
        <ul className="flex gap-6">
          <li className="tracking-widest text-lg">
            <a href="#about" onClick={() => handleClick("about")}>
              About
            </a>
          </li>
          <li className="tracking-widest text-lg">
            <a href="#services" onClick={() => handleClick("services")}>
              Services
            </a>
          </li>
          <li className="tracking-widest text-lg">
            <a href="#testimonials" onClick={() => handleClick("testimonials")}>
              Testimonials
            </a>
          </li>
          <li className="tracking-widest text-lg">
            <a href="#contact" onClick={() => handleClick("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Heading;
