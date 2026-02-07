"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Testimonials() {
  const { ref } = useSectionInView("Experience");

  return (
    <motion.section
      ref={ref}
      id="testimonials"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>What People Say</SectionHeading>
      <p className="mb-8 text-gray-700">
        Feedback from clients, collaborators, and people I’ve worked with.
      </p>

      <div className="flex flex-col gap-6">
        <blockquote className="bg-gray-100 p-6 rounded-lg italic border border-black/5">
          <p className="mb-4">
            “Devansh delivered exactly what we needed. Clean UI, solid backend,
            and smooth deployment. Communication was clear throughout the
            project.”
          </p>
          <footer className="text-sm not-italic font-semibold text-gray-900">
            — Client Name, Founder / Product Owner
          </footer>
        </blockquote>

        <blockquote className="bg-gray-100 p-6 rounded-lg italic border border-black/5">
          <p className="mb-4">
            “Very reliable developer. Took ownership of the project and handled
            both frontend and backend without issues.”
          </p>
          <footer className="text-sm not-italic font-semibold text-gray-900">
            — Client Name, Startup Team Member
          </footer>
        </blockquote>

        <blockquote className="bg-gray-100 p-6 rounded-lg italic border border-black/5">
          <p className="mb-4">
            “Understands requirements well and builds practical solutions
            instead of overcomplicating things.”
          </p>
          <footer className="text-sm not-italic font-semibold text-gray-900">
            — Client Name, Business Owner
          </footer>
        </blockquote>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        → Real testimonials will be added as more projects are completed
        <br />→ References available on request
      </p>
    </motion.section>
  );
}
