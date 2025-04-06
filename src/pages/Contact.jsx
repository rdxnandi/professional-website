import React from "react";
import { FaFacebook } from "react-icons/fa6";

function Contact() {
  return (
    <section
      id="contact"
      className="grid grid-cols-2 bg-white px-10 py-7 min-h-[60vh]"
    >
      <h1 className="text-6xl">Contact</h1>
      <div className="flex flex-col text-3xl">
        <a href="#">abc@example.com</a>
        <a href="#">123-456-7890</a>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col font-semibold">
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex flex-col font-semibold">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Accessibility Statement</a>
        </div>
      </div>
      <div>
        <ul className="mb-4">
          <li className="text-3xl">
            <FaFacebook />
          </li>
        </ul>
        <p className="font-semibold">
          &copy; 2025 Website. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Contact;
