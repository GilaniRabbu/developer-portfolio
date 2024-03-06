import React from "react";
import { motion } from "framer-motion";

const skill = [
  {
    id: 1,
    img: "./html.png",
    title: "HTML",
  },
  {
    id: 2,
    img: "./css.png",
    title: "CSS",
  },
  {
    id: 3,
    img: "./js.png",
    title: "JavaScript",
  },
  {
    id: 4,
    img: "./jquery.svg",
    title: "jQuery",
  },
  {
    id: 5,
    img: "./bootstrap.png",
    title: "BootStrap",
  },
  {
    id: 6,
    img: "./tailwind.svg",
    title: "Tailwind CSS",
  },
  {
    id: 7,
    img: "./react.png",
    title: "React JS",
  },
  {
    id: 8,
    img: "./php.png",
    title: "PHP",
  },
  {
    id: 9,
    img: "./git.svg",
    title: "Git",
  },
  {
    id: 10,
    img: "./github.svg",
    title: "Github",
  },
  {
    id: 11,
    img: "./firebase.svg",
    title: "Firebase",
  },
  {
    id: 12,
    img: "./npm.svg",
    title: "npm",
  },
  {
    id: 13,
    img: "./vs-code.png",
    title: "VS Code",
  },
  {
    id: 14,
    img: "./netlify.svg",
    title: "Netlify",
  },
];

const Skill = ({ item }) => {
  return (
    <motion.div
      className="w-[130px] h-[130px] cursor-pointer grid place-items-center rounded bg-zinc-300 dark:bg-zinc-800"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={item.img}
        title={item.title}
        className="max-w-20 m-auto"
        alt="..."
      />
    </motion.div>
  );
};

const SkillPage = () => {
  return (
    <div className="py-10 text-blue-800 dark:text-blue-400 bg-zinc-100 dark:bg-zinc-950">
      <div className="m-auto max-w-3xl">
        <h2 className="font-bold font-serif text-4xl text-center mb-10 p-2 md:p-0">
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
