import Image from "next/image";
import React from "react";

function ProjectCard({ src, href, techStack }) {
  return (
    <div>
      <Image {...{ src }} />
    </div>
  );
}

export default ProjectCard;
