import { IconType } from "react-icons";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiDocker,
  SiGithub,
  SiFigma,
  SiVercel,
  SiAmazonwebservices,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export type SkillIcon = IconType | string;

export interface Skill {
  name: string;
  level: number;
  icon: SkillIcon;
}

export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 3, icon: "/images/React-icon.png" },
      { name: "JavaScript / TS", level: 3, icon: "/images/js.svg" },
      { name: "HTML / CSS", level: 4, icon: "/images/html5.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Servlet / JSP", level: 2, icon: DiJava },
      { name: "Firebase", level: 2, icon: "/images/Fire.png" },
    ],
  },
  {
    title: "DB",
    skills: [
      { name: "SQLServer", level: 3, icon: "/images/SQLSERVER.png" },
      { name: "Neon", level: 1, icon: "/images/neon.png" },
    ],
  },
  {
    title: "Infra",
    skills: [
      { name: "Vercel", level: 3, icon: "/images/Vercel.png" },
      { name: "AWS", level: 1, icon: "/images/aws.png" },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Docker", level: 2, icon: "/images/Do.png" },
      { name: "Github", level: 3, icon: SiGithub },
      { name: "Figma", level: 3, icon: "/images/fi.png" },
    ],
  },
];
