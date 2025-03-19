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
      name: "MongoDB",
      icon: "/skill/mongodb.svg",
    },
  ];
  return (
    <div>
      <p className="text-center text-balance text-2xl">
        Discover my arsenal of full stack tools & technologies — TypeScript,
        React, Redux, Next.js, Node.js, Express.js, MongoDB & more. From
        crafting dynamic UIs with Material UI & shadcn/ui to building robust
        server-side logic and seamless data flow, I deliver exceptional user
        experiences.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-14">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="w-full aspect-square p-12 rounded-lg bg-[#659477] dark:bg-[#2D2726] flex flex-col items-center justify-center">
              <div>
                <Image
                  alt={skill.name}
                  src={skill.icon}
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </div>
              <div className="text-xl font-bold mt-5">{skill.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
