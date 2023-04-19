import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import SocialMediaIcon from "@/components/SocialMediaIcon";
function Footer() {
  return (
    <footer className="w-screen p-4 flex justify-center items-center flex-col gap-2 border-t-2 border-dark-100">
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
  );
}

export default Footer;
