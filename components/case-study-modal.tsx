"use client";

import { projectsData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoClose,
  IoChevronBack,
  IoChevronForward,
  IoOpenOutline,
} from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import { useEffect, useState } from "react";

type Project = (typeof projectsData)[number];

type CaseStudyModalProps = {
  selectedProject: Project | null;
  onClose: () => void;
};

export default function CaseStudyModal({
  selectedProject,
  onClose,
}: CaseStudyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  };

  return (
    <AnimatePresence>
      {selectedProject && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none p-4 sm:p-8">
            <motion.div
              layoutId={`card-${selectedProject.title}`}
              className="bg-white w-full max-w-7xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto md:overflow-hidden rounded-xl shadow-2xl relative pointer-events-auto flex flex-col md:flex-row"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-sm"
                aria-label="Close modal"
              >
                <IoClose size={24} />
              </button>

              <div className="w-full md:w-1/2 relative bg-gray-100 flex items-center justify-center min-h-[300px] md:h-auto overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center p-8 md:p-12"
                  >
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} image ${currentImageIndex + 1}`}
                      width={1000}
                      height={800}
                      className="w-full h-auto max-h-[60vh] md:max-h-[80vh] object-contain rounded-lg shadow-lg"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                      aria-label="Previous image"
                    >
                      <IoChevronBack size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                      aria-label="Next image"
                    >
                      <IoChevronForward size={20} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {selectedProject.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentImageIndex
                              ? "bg-black/70"
                              : "bg-black/20"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 md:p-10 md:w-1/2 flex flex-col md:overflow-y-auto custom-scrollbar">
                <motion.h2 className="text-3xl font-bold mb-2">
                  {selectedProject.title}
                </motion.h2>

                <div className="flex gap-2 mb-6 flex-wrap">
                  {selectedProject.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600 border border-black/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed text-sm">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      🚨 The Problem
                    </h3>
                    <p>{selectedProject.caseStudy?.problem}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      💡 The Solution
                    </h3>
                    <p>{selectedProject.caseStudy?.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Impact</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {selectedProject.caseStudy?.impact.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={selectedProject.projectUrl}
                    target="_blank"
                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition"
                  >
                    Live Demo <IoOpenOutline />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 bg-white border border-gray-200 text-gray-900 px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition"
                  >
                    Code <BsGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
