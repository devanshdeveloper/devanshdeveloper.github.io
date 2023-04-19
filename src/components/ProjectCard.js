import Image from "next/image";
import Button from "./Button";

function ProjectCard({ github, title, href, techStack }) {
  return (
    <div className="bg-dark-700 rounded-md p-2 border-2 border-white">
      <Image
        src={`/${title}.png`}
        width="300"
        height="150"
        className="w-full rounded-lg"
        alt={title}
      />
      <h3 className="text-white text-2xl mt-1">{title}</h3>
      <div className="space-x-1 my-2">
        {techStack.map((tech, i) => (
          <div key={i} className="bg-dark-50 inline-block px-2 py-1 rounded-lg">
            <Image
              src={`/${tech}-svg.svg`}
              width="30"
              height="30"
              alt={tech}
              className="h-5 w-5"
            />
          </div>
        ))}
      </div>
      <div className="space-x-2 my-1">
        <a className="text-white bg-dark-900 px-2 py-1 rounded-md" {...{ href }} target="_blank">
          Open
        </a>
        <a className="text-white bg-dark-900 px-2 py-1 rounded-md" href={github} target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

// git add . ; git commit -m "added something" ; git push
