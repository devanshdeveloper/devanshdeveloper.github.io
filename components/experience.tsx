"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <div className="flex flex-col gap-6 w-full max-w-[53rem]">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-100 border border-black/5 rounded-xl px-8 py-6 flex flex-col sm:flex-row items-start justify-between gap-4"
          >
            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-full border border-black/5 text-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-700">{item.location}</p>
                <p className="text-gray-500 mt-2">{item.description}</p>
              </div>
            </div>
            <div className="text-gray-500 font-medium">{item.date}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
