import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGithub,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa6";
import {
  SiJavascript,
  SiJquery,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiMongodb,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skill = [
  {
    id: 1,
    icon: <FaHtml5 size={40} className="text-primary" />,
    title: "HTML5",
  },
  {
    id: 2,
    icon: <FaCss3Alt size={56} className="text-primary" />,
    title: "CSS3",
  },
  {
    id: 3,
    icon: <SiJavascript size={56} className="text-primary" />,
    title: "JavaScript",
  },
  {
    id: 4,
    icon: <SiJquery size={56} className="text-primary" />,
    title: "jQuery",
  },
  {
    id: 5,
    icon: <FaBootstrap size={56} className="text-primary" />,
    title: "BootStrap",
  },
  {
    id: 6,
    icon: <SiTailwindcss size={56} className="text-primary" />,
    title: "Tailwind CSS",
  },
  {
    id: 7,
    icon: <FaReact size={56} className="text-primary" />,
    title: "React JS",
  },
  {
    id: 8,
    icon: <SiNextdotjs size={56} className="text-primary" />,
    title: "Next JS",
  },
  {
    id: 9,
    icon: <FaNodeJs size={56} className="text-primary" />,
    title: "Node JS",
  },
  {
    id: 10,
    icon: <SiExpress size={56} className="text-primary" />,
    title: "Express JS",
  },
  {
    id: 11,
    icon: <SiMongodb size={56} className="text-primary" />,
    title: "MongoDB",
  },
  {
    id: 12,
    icon: <SiTypescript size={56} className="text-primary" />,
    title: "Typescript",
  },
  {
    id: 13,
    icon: <FaPhp size={56} className="text-primary" />,
    title: "PHP",
  },
  {
    id: 14,
    icon: <FaGitAlt size={56} className="text-primary" />,
    title: "Git",
  },
  {
    id: 15,
    icon: <FaGithub size={56} className="text-primary" />,
    title: "Github",
  },
  {
    id: 16,
    icon: <SiFirebase size={56} className="text-primary" />,
    title: "Firebase",
  },
  {
    id: 17,
    icon: <FaNpm size={56} className="text-primary" />,
    title: "npm",
  },
  {
    id: 18,
    icon: <VscVscode size={56} className="text-primary" />,
    title: "VS Code",
  },
  {
    id: 19,
    icon: <SiNetlify size={56} className="text-primary" />,
    title: "Netlify",
  },
  {
    id: 20,
    icon: <SiVercel size={56} className="text-primary" />,
    title: "Vercel",
  },
];

const Skill = ({ item }) => {
  return (
    <motion.div
      className="cursor-pointer w-28 h-28 grid place-items-center border-4 rounded border-primary"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
    >
      <div title={item.title} className="m-auto">
        {item.icon}
      </div>
    </motion.div>
  );
};

const SkillPage = () => {
  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-10 text-5xl text-center font-serif text-primary">
          My Skills & Tools
        </h2>
        <div className="flex gap-5 justify-center items-center flex-wrap flex-row">
          {skill.map((item) => (
            <Skill item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
