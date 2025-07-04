"use client";

import React from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGitbook,
  SiPostman,
} from "react-icons/si";
import {
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import SkillAccordion, { AccordionItem } from "./SkillAccordion";

function Accordion() {
  const frontend: AccordionItem[] = [
    {
      title: "<Frontend />",
      content: (
        <div className="flex items-center flex-wrap gap-5 text-3xl text-[#1F2328] dark:text-[#38BDF8]">
          <SiJavascript />
          <SiNextdotjs />
          <SiReact />
          <SiTypescript />
          <SiSass />
          <FaBootstrap />
          <SiTailwindcss />
        </div>
      ),
    },
  ];

  const backend: AccordionItem[] = [
    {
      title: "<Backend />",
      content: (
        <div className="flex items-center flex-wrap gap-5 text-3xl text-[#1F2328] dark:text-[#00ED64]">
          <FaNodeJs />
          <SiExpress />
          <SiFirebase />
          <SiMongodb />
        </div>
      ),
    },
  ];

  const design: AccordionItem[] = [
    {
      title: "<Design />",
      content: (
        <div className="flex items-center flex-wrap gap-5 text-3xl text-[#1F2328] dark:text-[#FF5C16]">
          <FaFigma />
        </div>
      ),
    },
  ];

  const tools: AccordionItem[] = [
    {
      title: "<Tools />",
      content: (
        <div className="flex items-center flex-wrap gap-5 text-3xl text-[#1F2328] dark:text-[#F74D27]">
          <FaGitAlt />
          <FaGithub />
          <SiGitbook />
          <SiPostman />
          <VscVscode />
        </div>
      ),
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-1 gap-5 flex-col">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-5">
          <div className="w-full rounded overflow-hidden bg-accordion">
            <SkillAccordion items={frontend} />
          </div>
          <div className="w-full rounded overflow-hidden bg-accordion">
            <SkillAccordion items={design} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[0.8fr,1.2fr] gap-5">
          <div className="w-full rounded overflow-hidden bg-accordion">
            <SkillAccordion items={backend} />
          </div>
          <div className="w-full rounded overflow-hidden bg-accordion">
            <SkillAccordion items={tools} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
