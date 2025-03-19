"use client";

import React from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";
import IconCloudSlug from "@/components/Skills/IconCloudSlug";
import SkillStat from "@/components/Skills/SkillStat";

export default function Skills() {
  return (
    <section className="min-h-screen py-20" id="skill">
      <AnimatedWord
        text="SkillsOfMine"
        className="text-center mb-5 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
      />
      <div className="container mx-auto px-4">
        <IconCloudSlug />
        <SkillStat />
      </div>
    </section>
  );
}
