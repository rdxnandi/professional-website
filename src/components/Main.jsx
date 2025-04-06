import React from "react";
import Contact from "../pages/Contact";
import Testimonials from "../pages/Testimonials";
import Services from "../pages/Services";
import Home from "../pages/Home";
import About from "../pages/About";

function Main() {
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default Main;
