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
    { name: "React", icon: <SiReact className="text-blue-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Css3", icon: <SiCss3 className="text-blue-400" /> },
    { name: "SASS", icon: <SiSass className="text-pink-400" /> },
  ];

  const backendSkills = [
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-sky-500" /> },
    { name: "Javascript", icon: <SiJavascript className="text-red-500" /> },
  ];

  const tools = [
    { name: "Confluence", icon: <FaConfluence className="text-blue-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Jira", icon: <FaJira className="text-blue-500" /> },
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <AnimatedWord
          text="SkillsOfMine"
          className="text-center mb-20 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
        />
        <div className="flex justify-center items-center">
          <div className="flex flex-1 gap-5 flex-col md:flex-row justify-center items-center">
            <div className="text-center p-6 w-full md:w-1/2 bg-indigo-100 rounded">
              <h2 className="text-xl mb-4">
                <code>&lt;Frontend /&gt;</code>
              </h2>
              <div className="flex gap-3 justify-center flex-wrap">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="relative group">
                    <div className="h-16 w-16 flex items-center justify-center mx-auto text-4xl">
                      {skill.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center p-6 w-full md:w-1/2 bg-red-100 rounded">
              <h2 className="text-xl mb-4">
                <code>&lt;Backend /&gt;</code>
              </h2>
              <div className="flex gap-3 justify-center flex-wrap">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="relative group">
                    <div className="h-16 w-16 flex items-center justify-center mx-auto text-4xl">
                      {skill.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center p-6 w-full md:w-1/2 bg-green-100 rounded">
              <h2 className="text-xl mb-4">
                <code>&lt;Tools /&gt;</code>
              </h2>
              <div className="flex gap-3 justify-center flex-wrap">
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
