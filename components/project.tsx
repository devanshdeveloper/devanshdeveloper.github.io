"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="flex sm:flex-col flex-col-reverse bg-gray-100 border max-w-[min(80vw,900px)] border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex flex-col h-full p-10 gap-5 group-odd:sm:mr-[calc(28.25rem-140px)] group-even:sm:ml-[calc(28.25rem-140px)]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-3">
            {tags?.map((tag, index) => (
              <li
                className="px-4 py-2 bg-black/[0.7] text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-5 ml-2">
          <a href={projectUrl} target="_blank" className="hover:scale-110 transition-all duration-200">
            <IoOpenOutline  className="text-2xl" />
          </a>
          <a href={githubUrl} target="_blank" className="hover:scale-110 transition-all duration-200">
            <BsGithub className="text-2xl" />
          </a>
        </div>
          </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={400}
          height={200}
          className="sm:absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        sm:group-hover:scale-[1.04]
        sm:group-hover:-translate-x-3
        sm:group-hover:translate-y-3
        sm:group-hover:-rotate-2

        sm:group-even:group-hover:translate-x-3
        sm:group-even:group-hover:translate-y-3
        sm:group-even:group-hover:rotate-2

        sm:group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
