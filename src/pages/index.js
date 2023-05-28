import InputField, { SelectInput, Textarea } from "@/components/InputField";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import TabNavigation, { Tab } from "@/components/TabNavigation";
import TechnologyGlow from "@/components/TechnologyGlow";
import Testimonial from "@/components/Testimonial";
import { projects, services, testimonials } from "@/utilities";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineSend } from "react-icons/ai";
import { CgScrollV } from "react-icons/cg";

export default function Home() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Devansh | Web Developer 🚀</title>
      </Head>
      <section id="home" className="h-screen relative top-[-64px] ">
        <div className="flex flex-col lg:flex-row justify-center gap-20 lg:justify-around items-center h-full">
          <div className="mx-8 space-y-2">
            <h3 className="text-white font-medium text-md lg:text-2xl">
              Hey, This is
            </h3>
            <span className="text-brand-default text-5xl lg:text-8xl font-semibold font-bruno">
              Devansh
            </span>
            <p className="text-dark-50">
              I help businesses to connect with tech.
            </p>
            <ul className="flex gap-3">
              <SocialMediaIcon href="https://instagram.com/devanshdeveloper/">
                <AiOutlineInstagram />
              </SocialMediaIcon>
              <SocialMediaIcon href="https://github.com/devanshdeveloper/">
                <AiOutlineGithub />
              </SocialMediaIcon>
              <SocialMediaIcon href="https://www.linkedin.com/in/devansh-khetwani/">
                <AiOutlineLinkedin />
              </SocialMediaIcon>
            </ul>
            <Link
              className="btn btn-default inline-block"
              scroll={false}
              href="#about"
            >
              Get to Know Me
            </Link>
          </div>
          <div className="animate-spin-slow grid grid-cols-2 gap-10 lg:gap-20">
            <TechnologyGlow tech="javascript" />
            <TechnologyGlow tech="react" />
            <TechnologyGlow tech="firebase" />
            <TechnologyGlow tech="tailwind" />
          </div>
        </div>
        <div className="flex justify-center">
          <CgScrollV className="text-dark-50 text-3xl animate-bounce absolute bottom-[10%]" />
        </div>
      </section>
      <section
        id="about"
        className="bg-dark-700 grid grid-cols-1 gap-10 lg:grid-cols-5 place-items-center p-10 lg:p-20 "
      >
        <div className="lg:col-span-2 hover:scale-110 transition-all duration-200 bg-[url('/profile.png')] bg-no-repeat bg-cover rounded">
          <div className=" bg-brand-dark/30 h-52 w-52 rounded hover:bg-transparent transition-all duration-300"></div>
        </div>

        <div className="lg:col-span-3 space-y-2">
          <h3 className="section-heading">About Me</h3>
          <p className="text-white">
            Welcome! As a web developer with expertise in React JS, Next.js,
            Tailwind, and Stripe, my name is Devansh Khetwani. I thrive in
            creating specialised solutions that exactly match your business
            goals thanks to my sharp eye for detail and love for
            problem-solving. My speciality is in designing engaging and simple
            user interfaces that create a long lasting impression on your
            audience. Let's work together to make your ideas a reality. Please
            feel free to look over my portfolio and contact me to discuss the
            specifics of your project.
          </p>
        </div>
      </section>
      <section id="projects" className="p-10 lg:p-16 space-y-10 lg:space-y-20">
        <h3 className="section-heading">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-16  max-w-5xl mx-auto">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
        {projects.length > 3 && (
          <div className="flex justify-center">
            <Link href="/projects" className="btn btn-default">
              See More
            </Link>
          </div>
        )}
      </section>
      <section
        id="skills"
        className="p-10 lg:p-16 bg-dark-700 flex flex-col justify-center items-center gap-10"
      >
        <h3 className="section-heading">Skills</h3>
        <TabNavigation
          {...{ setCurrentTabIndex, currentTabIndex }}
          tabs={["Figma", "HTML/CSS", "JavaScript", "React JS", "Backend"]}
        />
        <Tab isActive={currentTabIndex === 0} techStack={["figma"]}>
          With expertise in Figma, I am proficient in designing visually
          appealing and user-centric interfaces. I can create wireframes,
          prototypes, and high-fidelity designs that enhance the overall user
          experience. By leveraging Figma's collaborative features, I ensure
          seamless communication and efficient design iterations throughout the
          project lifecycle.
        </Tab>
        <Tab isActive={currentTabIndex === 1} techStack={["html", "css"]}>
          I have extensive knowledge of HTML and CSS, enabling me to craft
          pixel-perfect and responsive web pages. Whether it's structuring the
          content or styling the layout, I follow the best practices to ensure
          cross-browser compatibility, accessibility, and clean code. I stay up
          to date with the latest HTML and CSS specifications and utilize modern
          techniques to create engaging user interfaces.
        </Tab>
        <Tab isActive={currentTabIndex === 2} techStack={["javascript"]}>
          As a skilled JavaScript developer, I excel in implementing interactive
          features and dynamic functionality. I leverage the power of JS
          frameworks and libraries to create seamless user interactions, form
          validation and animations. I am well-versed in ES6+ syntax, modular
          coding, and optimizing JavaScript code for improved performance.
        </Tab>
        <Tab isActive={currentTabIndex === 3} techStack={["react", "nextjs"]}>
          With hands-on experience in React JS and Next.js, I specialize in
          building powerful and scalable web applications. I utilize React's
          component-based architecture, state management, and virtual DOM, along
          with Next.js's server-side rendering (SSR) capabilities. This
          combination allows me to create fast, SEO-friendly, and highly
          optimized web applications with improved performance and user
          experience.
        </Tab>
        <Tab isActive={currentTabIndex === 4} techStack={["firebase"]}>
          I am proficient in working with Firebase, a comprehensive platform for
          building web and mobile applications. I can leverage Firebase's
          features like Firestore database, Authentication, Cloud Functions, and
          Hosting to develop secure and scalable backend solutions. I have
          experience in setting up real-time data synchronization, user
          authentication, and managing cloud functions to enhance application
          functionality.
        </Tab>
      </section>
      {/* <section id="testimonial" className="p-10 lg:p-16 bg-dark-700">
        <h3 className="section-heading">Testimonial</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8  max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <Testimonial key={i} {...testimonial} />
          ))}
        </div>
      </section> */}
      <section id="services" className="p-10 lg:p-16 space-y-10 lg:space-y-20">
        <h3 className="section-heading">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </section>
      <section id="contact" className="border-t-2  border-dark-100">
        <div className="bg-dark-700 space-y-10 p-10 lg:p-16 max-w-5xl mx-auto ">
          <h3 className="section-heading mb-4">Get in touch</h3>
          <form
            className="space-y-4"
            action="https://formsubmit.io/send/devanshkhetwani@gmail.com"
            method="POST"
          >
            <InputField name="name" label="Name" />
            <InputField name="email" label="Email" type="email" />
            <div className="flex flex-col md:flex-row gap-5  w-full md:w-2/3">
              <SelectInput
                label="What you need?"
                name="service"
                options={[
                  "",
                  "Portfolio Website",
                  "Figma to HTML",
                  "Landing Page",
                  "Web Application",
                ]}
              />
              <SelectInput
                label="What's Your Budget?"
                name="budget"
                options={["", "$0-$500", "$500-$5000", "$5000+"]}
              />
            </div>
            <Textarea name="desc" label="Need to Say Something?" rows="7" />
            <input
              name="_formsubmit_id"
              type="text"
              style={{ display: "none" }}
            />
            <button
              className="btn btn-default flex gap-2 items-center"
              type="submit"
            >
              Send Message <AiOutlineSend />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
