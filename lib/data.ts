import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Joined Youtube University",
    location: "Internet",
    description:
      "I learnt frontend basics from youtube, and made some simple projects",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Passed 12th Grade",
    location: "Indore, India",
    description: "Got my graduation, and started freelance after that",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Pursuing BCA",
    location: "Indore, India",
    description:
      "To complete my post graduation, I have joined St. Paul Institute of Proffessional Studies",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Freelance",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "React Link Manager",
    description:
      "A powerful tool built using React JS and Bootstrap to help you manage your links with ease! With this application, you can save your links into different categories and set a specific time for them to open",
    tags: ["ReactJS", "React Context API", "React Bootstrap", "React Router Dom"],
    imageUrl: "/projects/Link Manager.png",
    projectUrl: "https://devanshdeveloper.github.io/link-manager-react",
    githubUrl: "https://github.com/devanshdeveloper/link-manager-react",
  },
  {
    title: "NextChat",
    description: `NextChat: A modern web app built with Next.js, Tailwind CSS, and Firebase for seamless global communication. Lightning-fast with an intuitive interface, offering real-time messaging and emojis. Stay connected and build meaningful relationships effortlessly.`,
    tags: ["next.js", "firebase", "tailwind"],
    imageUrl: "/projects/NextChat.png",
    projectUrl: "https://nextjs-firebase-auth-friendbro.vercel.app/",
    githubUrl: "https://github.com/devanshdeveloper/nextchat",
  },
  {
    title: "Keyboard Game",
    description: `Welcome to the Keyboard Game! Boost your typing skills with this fun JavaScript game. Choose your speed level, enjoy a light mode, and track your progress as you type. Ready to test your speed and accuracy? Let's play!`,
    tags: ["html", "css", "javascript"],
    imageUrl: "/projects/Keyboard Game.png",
    projectUrl: "https://devanshdeveloper.github.io/keyboard-game",
    githubUrl: "https://github.com/devanshdeveloper/keyboard-game",
  },
  {
    title: "JavaScript Quiz",
    description: `Welcome to the JavaScript Quiz, Your key to JavaScript mastery! With 15 questions covering various levels, this quiz is designed to challenge your JavaScript knowledge. Save progress with local storage, access lifelines, and get a bonus PDF for extra practice. Let's see how you fare among fellow JavaScript enthusiasts!`,
    tags: ["html", "css", "javascript"],
    imageUrl: "/projects/JavaScript Quiz.png",
    projectUrl: "https://devanshdeveloper.github.io/javascript-quiz/",
    githubUrl: "https://github.com/devanshdeveloper/javascript-quiz",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
