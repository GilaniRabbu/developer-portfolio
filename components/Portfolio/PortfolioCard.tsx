"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    title: "FoodieBite",
    description:
      "Developed a Full-Stack Restaurant Booking application using the MERN stack.",
    image: "./portfolio_1.jpg",
    frontend: ["Typescript", "Next.js", "Tailwind", "Redux"],
    backend: ["Express.js", "Mongoose", "MongoDB"],
    link: "https://restaurant-booking-client-three.vercel.app/",
    github: "https://github.com/GilaniRabbu/restaurant-booking-client.git",
    server: "https://github.com/GilaniRabbu/restaurant-booking-server.git",
  },
  {
    id: 2,
    title: "FurStore E-Commerce",
    description: "Fully Responsive E-Commerce site built with MERN stack.",
    image: "./portfolio_2.jpg",
    frontend: ["Typescript", "Next.js", "Tailwind"],
    backend: ["Swiper.js"],
    link: "https://ecommerce-fur-store.vercel.app/",
    github: "https://github.com/GilaniRabbu/ecommerce-website.git",
  },
  {
    id: 3,
    title: "GitHub Users Finder App",
    description: "Fetches and displays user profile data dynamically.",
    image: "./portfolio_3.jpg",
    frontend: ["Typescript", "Next.js", "Tailwind"],
    backend: ["Api"],
    link: "https://github-user-search-app-v3.vercel.app/",
    github: "https://github.com/GilaniRabbu/github-user-search-app.git",
  },
  {
    id: 4,
    title: "AI Landing Page",
    description: "Responsive landing page added dynamic animations.",
    image: "./portfolio_4.jpg",
    frontend: ["Next.js", "Tailwind"],
    backend: ["framer-motion"],
    link: "https://ai-landing-v1.vercel.app/",
    github: "https://github.com/GilaniRabbu/ai-landing-page.git",
  },
  {
    id: 5,
    title: "Rest Countries Api",
    description: "See all countries from the API on the homepage.",
    image: "./portfolio_5.jpg",
    frontend: ["React", "Vite"],
    backend: ["Api"],
    link: "https://rest-countries-api-solution-v2.vercel.app/",
    github: "https://github.com/GilaniRabbu/rest-countries-api-solution.git",
  },
];

export default function PortfolioCard() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {cardData.map((card) => (
        <CardContainer key={card.id} className="inter-var">
          <CardBody className="relative w-auto h-auto rounded-xl p-6 border sm:w-[30rem] group/card bg-white/50 border-black/[0.1] dark:bg-[#2D2726] dark:border-white/[0.2] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm max-w-sm mt-2 line-clamp-1 text-neutral-500 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={card.image || "/placeholder.svg"}
                height={1000}
                width={1000}
                className="w-full object-cover group-hover/card:shadow-xl"
                alt={`${card.title} thumbnail`}
              />
            </CardItem>
            <CardItem translateZ="80" className="w-full mt-5">
              <div className="flex flex-wrap gap-2">
                {card.frontend.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-200"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </CardItem>
            <CardItem translateZ="80" className="w-full mt-5">
              <div className="flex flex-wrap gap-2">
                {card.backend.map((category, index) => (
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
              <div className="flex gap-5">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={card.github}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-black dark:bg-white dark:text-black text-white"
                >
                  Client
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={card.github}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-black dark:bg-white dark:text-black text-white"
                >
                  Server
                </CardItem>
              </div>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
