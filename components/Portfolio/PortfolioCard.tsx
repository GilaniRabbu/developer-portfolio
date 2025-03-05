"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    title: "FurStore E-Commerce",
    description: "Fully Responsive E-Commerce site built with MERN stack.",
    image: "./portfolio_1.png",
    tech: ["Typescript", "Next.js", "Tailwind"],
    link: "https://ecommerce-fur-store.vercel.app/",
    github: "https://github.com/GilaniRabbu/ecommerce-website.git",
  },
  {
    id: 2,
    title: "GitHub Users Finder App",
    description: "Fetches and displays user profile data dynamically.",
    image: "./portfolio_2.png",
    tech: ["Typescript", "Next.js", "Tailwind", "Api"],
    link: "https://github-user-search-app-v3.vercel.app/",
    github: "https://github.com/GilaniRabbu/github-user-search-app.git",
  },
  {
    id: 3,
    title: "AI Landing Page",
    description: "Responsive landing page added dynamic animations.",
    image: "./portfolio_2.png",
    tech: ["Next.js", "Tailwind", "framer-motion"],
    link: "https://ai-landing-v1.vercel.app/",
    github: "https://github.com/GilaniRabbu/ai-landing-page.git",
  },
  {
    id: 4,
    title: "Rest Countries Api",
    description: "See all countries from the API on the homepage.",
    image: "./portfolio_3.png",
    tech: ["React", "Vite", "Api"],
    link: "https://rest-countries-api-solution-v2.vercel.app/",
    github: "https://github.com/GilaniRabbu/rest-countries-api-solution.git",
  },
];

export default function PortfolioCard() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {cardData.map((card) => (
        <CardContainer key={card.id} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={card.image || "/placeholder.svg"}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={`${card.title} thumbnail`}
              />
            </CardItem>
            <CardItem translateZ="80" className="w-full mt-5">
              <div className="flex flex-wrap gap-2">
                {card.tech.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-200"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </CardItem>
            <div className="flex justify-between items-center mt-16">
              <CardItem
                translateZ={20}
                as={Link}
                href={card.link}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Visit →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={card.github}
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
