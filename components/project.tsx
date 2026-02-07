"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";

type ProjectProps = (typeof projectsData)[number] & {
  onClick: (project: (typeof projectsData)[number]) => void;
};

export default function Project({
  title,
  description,
  tags,
  images,
  projectUrl,
  githubUrl,
  caseStudy,
  onClick,
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
      className="group mb-3 sm:mb-8 last:mb-0 cursor-pointer"
      onClick={() =>
        onClick({
          title,
          description,
          tags,
          images,
          projectUrl,
          githubUrl,
          caseStudy,
        } as any)
      }
    >
      <section className="flex sm:flex-col flex-col-reverse bg-gray-100 border max-w-[min(80vw,900px)] border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition h-auto sm:h-[28rem]">
        <div className="flex flex-col h-full p-10 pb-8 gap-5 group-odd:sm:mr-[calc(28.25rem-140px)] group-even:sm:ml-[calc(28.25rem-140px)]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="leading-relaxed text-gray-700 line-clamp-6">
            {description}
          </p>
          <ul className="flex flex-wrap gap-3 mt-auto">
            {tags?.map((tag, index) => (
              <li
                className="px-4 py-2 bg-black/[0.7] text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          layoutId={`card-${title}`}
          className="sm:absolute top-8 -right-40 w-full sm:w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            sm:group-hover:scale-[1.04]
            sm:group-hover:-translate-x-3
            sm:group-hover:translate-y-3
            sm:group-hover:-rotate-2
    
            sm:group-even:group-hover:translate-x-3
            sm:group-even:group-hover:translate-y-3
            sm:group-even:group-hover:rotate-2
    
            sm:group-even:right-[initial] group-even:-left-40"
        >
          <Image
            src={images[0]}
            alt={title}
            quality={95}
            width={400}
            height={200}
            className="w-full h-auto rounded-t-lg"
          />
        </motion.div>
      </section>
    </motion.div>
  );
}
