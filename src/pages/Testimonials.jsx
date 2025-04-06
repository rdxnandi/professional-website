import React, { useState, useEffect } from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Product Manager",
      text: "This product has completely transformed the way we work. Highly recommended!",
    },
    {
      name: "John Smith",
      role: "Software Engineer",
      text: "An absolute game-changer! The UI is fantastic, and the features are top-notch.",
    },
    {
      name: "Emily Johnson",
      role: "UX Designer",
      text: "I love how intuitive and user-friendly the experience is. A must-have tool!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, [testimonials.length]);

  return (
    <section id="testimonials" className="bg-gray-100 py-12 px-6 min-h-[60vh]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-wider mb-8">Testimonials</h2>
        <div className="relative w-full max-w-lg mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div>
                <p className="text-gray-700 italic mb-4 text-2xl">
                  "{testimonial.text}"
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
