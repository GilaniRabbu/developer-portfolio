import Image from "next/image";
import React from "react";

export default function SkillStat() {
  const skills = [
    {
      name: "TypeScript",
      icon: "/skill/ts.svg",
      percentage: 55,
    },
    {
      name: "Next.js",
      icon: "/skill/next.svg",
      percentage: 65,
    },
    {
      name: "React.js",
      icon: "/skill/react.svg",
      percentage: 70,
    },
    {
      name: "JavaScript",
      icon: "/skill/js.svg",
      percentage: 75,
    },
    {
      name: "Node.js",
      icon: "/skill/node.svg",
      percentage: 60,
    },
    {
      name: "MongoDB",
      icon: "/skill/mongodb.svg",
      percentage: 45,
    },
  ];
  return (
    <div>
      <p className="text-center text-balance text-2xl">
        Discover my arsenal of frontend tools & technologies — TypeScript,
        React, Redux, Next.js & more. From UI libraries like Material UI &
        shadcn/ui to custom animations using GSAP & Framer Motion, I deliver
        stunning user experiences.
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
              <div className="text-xl font-bold mt-5">{skill.percentage}%</div>
            </div>
            <p className="text-lg font-medium mt-3">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
