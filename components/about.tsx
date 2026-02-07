"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="flex flex-col gap-4 text-center mb-16">
        <p className="text-xl font-medium leading-relaxed">
          I started coding in 2020. Since then, I've moved from building small
          sites to architecting complex full-stack applications.
        </p>
        <p className="text-gray-700">
          Today, I work as a full stack developer building production web
          applications using React, Next.js, and Node.js. My focus is always on
          code quality, scalability, and user experience.
        </p>
      </div>

      <div className="bg-white borderBlack rounded-lg p-8 shadow-sm">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="text-2xl">🛠️</span> How I Work
        </h3>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
            </div>
            <div>
              <h4 className="font-medium text-lg">Understanding First</h4>
              <p className="text-gray-600">
                I dive deep into the problem before writing a single line of
                code.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
            </div>
            <div>
              <h4 className="font-medium text-lg">Simple Solutions</h4>
              <p className="text-gray-600">
                I design practical architectures that avoid unnecessary
                complexity.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
            </div>
            <div>
              <h4 className="font-medium text-lg">Iterative Build</h4>
              <p className="text-gray-600">
                I build in small, testable steps to ensure stability.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
                4
              </div>
            </div>
            <div>
              <h4 className="font-medium text-lg">Continuous Refactoring</h4>
              <p className="text-gray-600">
                I constantly improve code structure and document key decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-lg font-medium mb-2">What I’m Looking For</h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Opportunities to work with teams and clients who value quality,
          long-term thinking, and building meaningful products that solve real
          problems.
        </p>
      </div>
    </motion.section>
  );
}
