"use client";

import React from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";
import IconCloudSlug from "@/components/Skills/IconCloudSlug";

export default function Skills() {
  return (
    <section className="min-h-screen py-20">
      <AnimatedWord
        text="SkillsOfMine"
        className="text-center mb-20 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
      />
      <div className="container mx-auto mt-20 px-4">
        <IconCloudSlug />
      </div>
    </section>
  );
}
