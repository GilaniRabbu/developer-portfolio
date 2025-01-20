"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import AnimatedWord from "@/components/Motion/AnimatedWord";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
  git: string;
}

const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const categories: string[] = [
    "All",
    "Web Development",
    "Mobile Apps",
    "UX/UI Design",
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/portfolio_1.png",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://ecommerce-fur-store.vercel.app/",
      git: "https://github.com/GilaniRabbu/ecommerce-website.git",
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      image: "/portfolio_2.png",
      tags: ["React Native", "Firebase", "REST API"],
      link: "https://ai-landing-v1.vercel.app/",
      git: "https://github.com/GilaniRabbu/ai-landing-page.git",
    },
    {
      id: 3,
      title: "Banking Dashboard",
      category: "UX/UI Design",
      image: "/portfolio_3.png",
      tags: ["Figma", "UI Design", "UX Research"],
      link: "https://rest-countries-api-solution-v2.vercel.app/",
      git: "https://github.com/GilaniRabbu/rest-countries-api-solution.git",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      category: "Web Development",
      image: "/portfolio_1.png",
      tags: ["Vue.js", "Python", "AWS"],
      link: "https://ecommerce-fur-store.vercel.app/",
      git: "https://github.com/GilaniRabbu/ecommerce-website.git",
    },
    {
      id: 5,
      title: "Healthcare App",
      category: "Mobile Apps",
      image: "/portfolio_2.png",
      tags: ["Flutter", "GraphQL", "Firebase"],
      link: "https://ai-landing-v1.vercel.app/",
      git: "https://github.com/GilaniRabbu/ai-landing-page.git",
    },
    {
      id: 6,
      title: "Travel Booking Platform",
      category: "UX/UI Design",
      image: "/portfolio_3.png",
      tags: ["Adobe XD", "Prototyping", "User Testing"],
      link: "https://rest-countries-api-solution-v2.vercel.app/",
      git: "https://github.com/GilaniRabbu/rest-countries-api-solution.git",
    },
  ];

  useEffect(() => {
    setFilteredProjects(
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <AnimatedWord
          text="MyProjects"
          className="text-center mb-20 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
        />

        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-md shadow-md bg-[#F7B687] dark:bg-[#875C36]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-sm tracking-wide">
                  {project.tags.join(" | ")}
                </p>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    className="group flex items-center gap-2 px-4 py-2 bg-teal-500/50 hover:bg-teal-500/30 rounded-lg transition-all duration-300"
                  >
                    Visit
                    <FiExternalLink className="group-hover:rotate-45 transition-transform duration-300" />
                  </a>
                  <a
                    href={project.git}
                    target="_blank"
                    className="group flex items-center gap-2 px-4 py-2 bg-teal-500/50 hover:bg-teal-500/30 rounded-lg transition-all duration-300"
                  >
                    Github
                    <FiExternalLink className="group-hover:rotate-45 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
