"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import CaseStudyModal from "./case-study-modal";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[number] | null
  >(null);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} onClick={setSelectedProject} />
          </React.Fragment>
        ))}
      </div>

      <CaseStudyModal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
