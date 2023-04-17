import Button from "@/components/Button";
import InputField, { Textarea } from "@/components/InputField";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="h-screen relative top-[-64px] flex justify-around items-center"
      >
        <div className="">
          <h3 className="text-white font-medium text-lg lg:text-2xl">
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
      <section id="contact" className="bg-dark-700 p-10 max-w-5xl mx-auto">
        <h3 className="section-heading mb-4">Get in touch...</h3>
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
      </section>
      <footer className="w-screen h-16 flex justify-center items-center border-t-2 border-dark-100">
        <p className="text-white">Made with ♥ by @devanshdeveloper</p>
      </footer>
    </>
  );
}
