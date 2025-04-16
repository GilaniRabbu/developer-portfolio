import Image from "next/image";
import React from "react";

export default function SkillStat() {
  const skills = [
    {
      name: "TypeScript",
      icon: "/skill/ts.svg",
    },
    {
      name: "Next.js",
      icon: "/skill/next.svg",
    },
    {
      name: "React.js",
      icon: "/skill/react.svg",
    },
    {
      name: "JavaScript",
      icon: "/skill/js.svg",
    },
    {
      name: "Node.js",
      icon: "/skill/node.svg",
    },
    {
      name: "Express.js",
      icon: "/skill/express.svg",
    },
  ];
  return (
    <div>
      <p className="text-pretty text-left md:text-balance md:text-center text-2xl">
        Discover my arsenal of full stack tools & technologies — TypeScript,
        React, Redux, Next.js, Node.js, Express.js, MongoDB & more. From
        crafting dynamic UIs with Material UI & shadcn/ui to building robust
        server-side logic and seamless data flow, I deliver exceptional user
        experiences.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-14">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="w-40 aspect-square p-5 border-2 border-[#21C45D] dark:border-[#2D2726] flex flex-col items-center justify-center">
              <div>
                <Image
                  alt={skill.name}
                  src={skill.icon}
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
