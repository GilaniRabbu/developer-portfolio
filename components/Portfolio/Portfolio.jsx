"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedWord from "@/components/Motion/AnimatedWord";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
} from "react-icons/si";
import "./Portfolio.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "FurStore",
      category: "app",
      image: "/portfolio_1.png",
      link: "https://ecommerce-fur-store.vercel.app/",
      git: "https://github.com/GilaniRabbu/ecommerce-website.git",
      stacks: [
        <SiNextdotjs />,
        <SiTailwindcss />,
        <SiTypescript />,
        <SiFramer />,
      ],
    },
    {
      id: 2,
      title: "AI Landing",
      category: "web",
      image: "/portfolio_2.png",
      link: "https://ai-landing-v1.vercel.app/",
      git: "https://github.com/GilaniRabbu/ai-landing-page.git",
      stacks: [
        <SiNextdotjs />,
        <SiTailwindcss />,
        <SiTypescript />,
        <SiFramer />,
      ],
    },
    {
      id: 3,
      title: "Rest Countries Api",
      category: "app",
      image: "/portfolio_3.png",
      link: "https://rest-countries-api-solution-v2.vercel.app/",
      git: "https://github.com/GilaniRabbu/rest-countries-api-solution.git",
      stacks: [
        <SiNextdotjs />,
        <SiTailwindcss />,
        <SiTypescript />,
        <SiFramer />,
      ],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="py-16 px-8 text-indigo-900 dark:text-white">
      <div className="container mx-auto">
        <AnimatedWord
          text="MyProjects"
          className="text-center mb-20 text-7xl sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
        />
        <div className="filter-btn flex gap-4 flex-wrap mb-8">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "web" ? "active" : ""}
            onClick={() => setFilter("web")}
          >
            Web
          </button>
          <button
            className={filter === "app" ? "active" : ""}
            onClick={() => setFilter("app")}
          >
            App
          </button>
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={project.id}
                className="project-card"
              >
                <img src={project.image} alt={project.title} />
                <div className="project-info text-white">
                  <h3 className="text-2xl sm:text-3xl mb-4 md:mb-6">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 justify-center mb-4 md:mb-6">
                    {project.stacks.map((icon, index) => (
                      <span key={index} className="text-2xl sm:text-3xl">
                        {icon}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl transition-all duration-300 hover:underline"
                    >
                      Live
                    </a>
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl transition-all duration-300 hover:underline"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
