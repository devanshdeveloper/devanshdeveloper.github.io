import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utilities";

function ProjectsPage() {
  return (
    <div className="p-10">
      <div className="section-heading">Projects</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-8  max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
