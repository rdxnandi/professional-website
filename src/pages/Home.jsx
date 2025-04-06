import React from "react";
import home_page from "../assets/images/home_page.jpg";

function Home() {
  return (
    <section className="relative w-full h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={home_page}
          alt="Home"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-lg ml-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Transform Your Business Today
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Elevate your company with expert consulting, tailored solutions, and
          innovative strategies to maximize growth.
        </p>
        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Home;
