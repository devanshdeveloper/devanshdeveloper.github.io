import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "Freelance Full Stack Developer",
    location: "Remote",
    description:
      "Build and deploy web applications for clients. Own projects end-to-end, maintain and improve production systems, and communicate with clients to clarify requirements.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    location: "St. Paul Institute of Professional Studies",
    description:
      " focused on computer science fundamentals, software engineering, and application development.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    title: "Infosys Certificate Course",
    location: "Infosys & Edubridge",
    description:
      "Placement readiness & employability skills. In collaboration with Infosys & Edubridge.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;
