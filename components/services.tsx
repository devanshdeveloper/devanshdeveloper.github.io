"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BiCodeAlt } from "react-icons/bi";
import { FiDatabase, FiLayout, FiServer, FiTrendingUp } from "react-icons/fi";

const services = [
  {
    title: "Full-Stack Development",
    description:
      "Building end-to-end web applications with reliability and scalability in mind.",
    icon: <BiCodeAlt />,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Translating designs into clean, responsive, and interactive user interfaces.",
    icon: <FiLayout />,
  },
  {
    title: "Backend Architecture",
    description:
      "Designing robust APIs, database schemas, and server-side logic.",
    icon: <FiServer />,
  },
  {
    title: "Database Management",
    description: "Structuring data efficiently with SQL and NoSQL databases.",
    icon: <FiDatabase />,
  },
];

const valueProps = [
  "Reduce technical complexity",
  "Improve product stability",
  "Speed up development cycles",
  "Build foundations that scale",
];

export default function Services() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="services"
    >
      <SectionHeading>What I Do</SectionHeading>

      <p className="mb-10 text-lg text-gray-700 max-w-2xl mx-auto">
        I design, build, and deploy full-stack web applications with a focus on{" "}
        <span className="font-medium text-gray-950">reliability</span>,{" "}
        <span className="font-medium text-gray-950">clarity</span>, and{" "}
        <span className="font-medium text-gray-950">
          long-term maintainability
        </span>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20 text-left">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 border border-black/5 rounded-xl p-6 hover:bg-gray-200 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="text-4xl text-gray-700 mb-4 block">
              {service.icon}
            </span>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-900 text-white p-8 md:p-12 rounded-2xl text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <FiTrendingUp size={200} />
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FiTrendingUp /> How I Add Value
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valueProps.map((prop, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-gray-200 font-medium">{prop}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
