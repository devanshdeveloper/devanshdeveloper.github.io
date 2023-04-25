import InputField, { SelectInput, Textarea } from "@/components/InputField";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import TechnologyGlow from "@/components/TechnologyGlow";
import Testimonial from "@/components/Testimonial";
import { projects, services, testimonials } from "@/utilities";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CgScrollV } from "react-icons/cg";

export default function Home() {
  return (
    <>
      <Head>
        <title>devanshdeveloper</title>
      </Head>
      <section id="home" className="h-screen relative top-[-64px] ">
        <div className="flex flex-col lg:flex-row justify-center gap-20 lg:justify-around items-center h-full">
          <div className="mx-8">
            <h3 className="text-white font-medium text-md lg:text-2xl">
              Hey, This is
            </h3>
            <span className="text-brand-default text-5xl lg:text-8xl font-semibold font-bruno">
              Devansh
            </span>
            <p className="text-dark-50">
              I help businesses to connect with tech.
            </p>
            <Link
              className="btn btn-default -translate-y-3 mt-6 inline-block"
              scroll={false}
              href="#about"
            >
              Know Me
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
            Hello, I&apos;m Devansh Khetwani, a web developer specializing in
            React JS, Next.js, Tailwind, and Stripe. I&apos;m passionate about
            creating custom solutions that meet your unique needs, and I have a
            track record of delivering engaging and intuitive user experiences.
            Let&apos;s work together to bring your vision to life. Browse my
            portfolio and reach out to me to discuss your project.
          </p>
        </div>
      </section>
      <section id="projects" className="p-10 lg:p-16  space-y-10  lg:space-y-20">
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
      {/* <section id="testimonial" className="p-10 lg:p-16 bg-dark-700">
        <h3 className="section-heading">Testimonial</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8  max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <Testimonial key={i} {...testimonial} />
          ))}
        </div>
      </section> */}
      <section id="services" className="p-10 lg:p-16 bg-dark-700  space-y-10  lg:space-y-20">
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
            action="https://formsubmit.co/devanshkhetwani@gmail.com"
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
            <button className="btn btn-default" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
