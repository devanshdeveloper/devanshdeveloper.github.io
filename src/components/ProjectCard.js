import Image from "next/image";
import React from "react";

function ProjectCard({ src, title, href, techStack }) {
  return (
    <div>
      <Image {...{ src }} alt={title} />
    </div>
  );
}

export default ProjectCard;

// git add . ; git commit -m "added something" ; git push
