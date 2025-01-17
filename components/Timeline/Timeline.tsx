import React from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";
import { FaGraduationCap, FaRegStar, FaRegCalendarDays } from "react-icons/fa6";

export default function Timeline() {
  const educationData = [
    {
      institution: "National University",
      period: "2023 - Current",
      degree: "MBA in Management",
    },
    {
      institution: "National University",
      period: "2017 - 2021",
      degree: "BBA in Management",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <AnimatedWord
          text="MyEducation"
          className="text-center mb-20 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
        />

        <div className="flex flex-col gap-10 items-center">
          {educationData.map((item, index) => (
            <div
              className="w-full max-w-96 rounded p-8 bg-[#377E86] text-white"
              key={index}
            >
              <h2 className="text-2xl font-semibold mb-4 flex gap-4 items-center">
                <FaGraduationCap size={22} />
                <span>{item.degree}</span>
              </h2>
              <h3 className="text-xl mb-4 flex gap-4 items-center">
                <FaRegStar size={22} />
                <span>{item.institution}</span>
              </h3>
              <p className="text-lg flex gap-4 items-center">
                <FaRegCalendarDays size={22} />
                <span>{item.period}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
