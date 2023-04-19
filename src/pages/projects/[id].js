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
      <div className="p-10  max-w-4xl mx-auto">
        <h3 className="section-heading">{project.title}</h3>
        <div className="max-w-2xl my-4">
          <Image
            src={`/${project.title}.png`}
            width="600"
            height="300"
            className="w-full rounded-lg"
            alt={project.title}
          />
        </div>
        <div
          className="text-white lg:text-xl"
          dangerouslySetInnerHTML={{ __html: project.desciption }}
        ></div>
        <div className="space-x-3 mt-5">
          <a
            className="btn btn-default inline-flex items-center gap-1"
            // className="text-white bg-dark-400 transition duration-200 text-xl px-3 py-2 rounded-md hover:bg-dark-700 inline-block"
            href={project.href}
            target="_blank"
          >
            <MdOpenInNew className="translate-y-[-0.125rem]" /> Open
          </a>
          <a
            className="btn btn-default inline-flex items-center gap-1"
            // className="text-white bg-dark-400 transition duration-200 text-xl px-3 py-2 rounded-md hover:bg-dark-700 inline-block"
            href={project.github}
            target="_blank"
          >
            <AiOutlineGithub className="translate-y-[-0.125rem]" /> GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;
