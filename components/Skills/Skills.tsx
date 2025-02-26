"use client";

import React from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";
import { FaConfluence, FaGitAlt, FaJira } from "react-icons/fa";
import AnimatedWord from "@/components/Motion/AnimatedWord";
import SkillAccordion, { AccordionItem } from "./SkillAccordion";
import { MarqueeSlide } from "@/components/Marque/MarqueeSlide";

export default function Skills() {
  const frontend: AccordionItem[] = [
    {
      title: "<Frontend />",
      content: (
        <div className="flex items-center gap-2 text-3xl">
          <SiTypescript className="text-blue-400" />
          <SiReact className="text-sky-400" />
          <SiNextdotjs className="text-slate-700" />
        </div>
      ),
    },
  ];

  const backend: AccordionItem[] = [
    {
      title: "<Backend />",
      content: (
        <div className="flex items-center gap-2 text-3xl">
          <SiJavascript className="text-yellow-500" />
          <SiTailwindcss className="text-sky-500" />
          <SiSass className="text-pink-500" />
        </div>
      ),
    },
  ];

  const tools: AccordionItem[] = [
    {
      title: "<Tools />",
      content: (
        <div className="flex items-center gap-2 text-3xl">
          <FaGitAlt className="text-orange-500" />
          <FaConfluence className="text-orange-500" />
          <FaJira className="text-orange-500" />
        </div>
      ),
    },
  ];

  return (
    <section className="min-h-screen py-20">
      <AnimatedWord
        text="SkillsOfMine"
        className="text-center mb-20 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
      />
      <MarqueeSlide />
      <div className="container mx-auto mt-20 px-4">
        <div className="flex justify-center items-center">
          <div className="flex flex-1 gap-5 flex-col">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-5">
              <div className="w-full rounded overflow-hidden bg-accordion">
                <SkillAccordion items={frontend} />
              </div>
              <div className="w-full rounded overflow-hidden bg-accordion">
                <SkillAccordion items={backend} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[0.8fr,1.2fr] gap-5">
              <div className="w-full rounded overflow-hidden bg-accordion">
                <SkillAccordion items={tools} />
              </div>
              <div className="w-full rounded overflow-hidden bg-accordion">
                <SkillAccordion items={tools} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
