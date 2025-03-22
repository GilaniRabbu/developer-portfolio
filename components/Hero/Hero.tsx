"use client";
import React from "react";
import { WordRotate } from "@/components/ui/word-rotate";
import { SparklesText } from "@/components/ui/sparkles-text";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section style-3 pt-40 px-4 pb-16 md:pt-48 md:pb-20 flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex md:gap-8 items-center justify-evenly">
          <div className="hidden md:block md:w-5/12">
            <div className="relative w-full max-w-80 mx-auto">
              <div className="absolute inset-0 bg-transparent rounded-md border-4 border-black dark:border-white translate-x-4 translate-y-4 z-0" />
              <img
                src="/profile.png"
                alt="Admin Image"
                className="mx-auto relative w-full rounded-md z-10"
              />
            </div>
          </div>
          <div className="md:w-7/12">
            <div>
              <div className="flex gap-2 flex-wrap mb-3 font-bold text-3xl">
                Hi, <SparklesText text="I am Gilani" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl inline-block md:text-[#F59C5C] dark:text-[#F7B687]">
                <WordRotate
                  className="font-bold"
                  words={[
                    "WEB DEV.",
                    "MERN DEV.",
                    "Frontend DEV.",
                    "Backend DEV.",
                  ]}
                />
              </h1>
              <div className="md:hidden text-center mt-3">
                <img
                  src="/profile.png"
                  alt="Admin Image"
                  className="mx-auto rounded-md w-full md:max-w-[400px] sm:max-w-80 max-w-[256px]"
                />
              </div>
              <p className="text-lg md:text-xl w-full max-w-xl mt-3">
                I am a proficient MERN stack developer with expertise in
                building dynamic and scalable web applications.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a
                  className="tr-btn"
                  href="/GilaniRabbu_Mern_Stack_Developer.pdf"
                  download="GilaniRabbu_Mern_Stack_Developer.pdf"
                >
                  Download CV
                </a>
                <a href="#" className="tr-btn">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
