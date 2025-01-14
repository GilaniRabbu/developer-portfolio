import React from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";
import SkillOrbit from "./SkillOrbit";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="py-16 px-8 text-indigo-900 dark:text-white">
      <div className="container mx-auto">
        <AnimatedWord
          text="SkillsOfMine"
          className="text-center mb-20 text-7xl sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
        />
        <div className="d-flex justify-content-center align-items-center">
          <SkillOrbit />
        </div>
      </div>
    </section>
  );
}
