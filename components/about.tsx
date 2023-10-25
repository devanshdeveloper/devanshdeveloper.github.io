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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My journey started in 2020 when I was 15 years old, during my 10th-grade
        year. It began with creating a basic calculator in JavaScript. Since
        then, coding has become my passion. I&apos;ve worked with various
        programming languages, including JavaScript, TypeScript, PHP, C, C++,
        and Java and I&apos;m continually learning more. I have experience with
        frameworks and libraries such as ReactJS, Next.js, Express.js,
        Discord.js, and many others. I consider myself a self-taught developer,
        a quick learner, a community helper, and a coder driven by curiosity and
        passion.
        <br /> <br />
        Currently, I&apos;m building a web application using Next.js, Tailwind
        CSS, and Prisma, which is a trending tech stack.
      </p>
    </motion.section>
  );
}
