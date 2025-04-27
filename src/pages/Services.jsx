import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive and high-performance websites tailored to your needs.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Creating visually appealing and user-friendly designs for your digital products.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Designing and developing mobile applications for iOS and Android platforms.",
  },
];

function Services() {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid gap-3 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="p-6 bg-white shadow-lg rounded-2xl text-center flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
