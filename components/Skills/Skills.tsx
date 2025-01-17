import React from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiSass,
} from "react-icons/si";
import { FaConfluence, FaGitAlt, FaJira } from "react-icons/fa";
import AnimatedWord from "@/components/Motion/AnimatedWord";

export default function Skills() {
  const frontendSkills = [
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <SiReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-sky-500" /> },
    { name: "Javascript", icon: <SiJavascript className="text-red-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Css3", icon: <SiCss3 className="text-blue-400" /> },
    { name: "SASS", icon: <SiSass className="text-pink-400" /> },
  ];

  const tools = [
    { name: "Confluence", icon: <FaConfluence className="text-blue-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Jira", icon: <FaJira className="text-blue-500" /> },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <AnimatedWord
          text="SkillsOfMine"
          className="text-center mb-20 text-7xl sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
        />

        <div className="flex justify-center items-center">
          <div className="p-8">
            <div className="text-center">
              <h1 className="text-xl mb-4">
                <code>&lt;Frontend/&gt;</code>
              </h1>
              <div className="flex justify-center space-x-6">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="relative group">
                    <div className="h-16 w-16 flex items-center justify-center mx-auto text-4xl">
                      {skill.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <h1 className="text-xl mb-4">
                <code>&lt;Tools/&gt;</code>
              </h1>
              <div className="flex justify-center space-x-6">
                {tools.map((tool, index) => (
                  <div key={index} className="relative group">
                    <div className="h-16 w-16 flex items-center justify-center mx-auto text-4xl">
                      {tool.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
