import Button from "@/components/Button";
import InputField, { Textarea } from "@/components/InputField";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="h-screen relative top-[-64px] flex justify-around items-center"
      >
        <div className="mx-8">
          <h3 className="text-white font-medium text-md lg:text-2xl">
            Hey, This is
          </h3>
          <span className="text-brand-default text-5xl lg:text-6xl font-bold">
            Devansh
          </span>
          <p className="text-dark-50">
            I help businesses to connect with tech.
          </p>
          <Button>Get in touch</Button>
        </div>
        <div>0</div>
      </section>
      <section
        id="about"
        className="bg-dark-700 grid grid-cols-1 gap-10 lg:grid-cols-5 place-items-center p-10 lg:p-20"
      >
        <Image
          className="lg:col-span-2 rounded-md hover:scale-110 transition-all duration-200"
          src="/profile.jpg"
          width="200"
          height="200"
          alt="Devansh Khetwani"
        />
        <div className="lg:col-span-3 space-y-2">
          <h3 className="section-heading">About Me</h3>
          <p className="text-white">
            Hello, I&apos;m Devansh Khetwani, a web developer specializing in React
            JS, Next.js, Tailwind, and Stripe. I&apos;m passionate about creating
            custom solutions that meet your unique needs, and I have a track
            record of delivering engaging and intuitive user experiences. Let&apos;s
            work together to bring your vision to life. Browse my portfolio and
            reach out to me to discuss your project.
          </p>
        </div>
      </section>
      <section id="projects" className="h-screen p-10">
          <h3 className="section-heading">Projects</h3>
      </section>
      <section id="contact" className="border-t-2 border-b-2 border-dark-100">
        <div className="bg-dark-700 p-10 max-w-5xl mx-auto ">
          <h3 className="section-heading mb-4">Get in touch</h3>
          <form
            className="space-y-4"
            action="https://formsubmit.co/devanshkhetwani@gmail.com"
            method="POST"
          >
            <InputField name="name" label="Name" />
            <InputField name="email" label="Email" type="email" />
            <Textarea name="desc" label="How can I help you?" rows="7" />
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </section>
      <footer className="w-screen p-4 flex justify-center items-center flex-col gap-2">
        <p className="text-white">
          Made with ♥ by
          <a
            href="https://instagram.com/devanshdeveloper/"
            target="_blank"
            className="hover:underline ml-1"
          >
            @devanshdeveloper
          </a>
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
      </footer>
    </>
  );
}
