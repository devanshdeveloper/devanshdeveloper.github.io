import { MdOpenInNew } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { projects } from "@/utilities";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

function Project() {
  const router = useRouter();
  console.log(projects);
  const project = projects.find(
    (e) => e.title.toLowerCase() === router.query.id
  );

  if (!project) return;

  return (
    <>
      <Head>
        <title>{project.title} || DevanshDeveloper</title>
      </Head>
      <div className="p-10  max-w-4xl mx-auto space-y-4">
        <h3 className="section-heading">{project.title}</h3>
        <div className="max-w-2xl">
          <Image
            src={`/projects/${project.title}.png`}
            width="600"
            height="300"
            className="w-full rounded-lg"
            alt={project.title}
          />
        </div>
        <div className="space-x-4">
          {project.techStack.map((tech, i) => (
            <div key={i} className="bg-dark-700 inline-block px-3 py-1 rounded">
              <Image
                src={`/techstack/${tech}.svg`}
                width="100"
                height="100"
                alt={tech}
                className="h-10 w-10"
              />
            </div>
          ))}
        </div>
        <div className="space-x-3">
          <a
            className="btn btn-default inline-flex items-center gap-1"
            href={project.href}
            target="_blank"
          >
            <MdOpenInNew className="translate-y-[-0.125rem]" /> Open
          </a>
          <a
            className="btn btn-default inline-flex items-center gap-1"
            href={project.github}
            target="_blank"
          >
            <AiOutlineGithub className="translate-y-[-0.125rem]" /> GitHub
          </a>
        </div>
        <div
          className="text-white lg:text-xl"
          dangerouslySetInnerHTML={{ __html: project.desciption }}
        ></div>
      </div>
    </>
  );
}

export default Project;
