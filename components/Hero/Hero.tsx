"use client";
import React from "react";
import { WordRotate } from "@/components/ui/word-rotate";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section style-3 pt-40 px-4 pb-16 md:pt-48 md:pb-20 flex items-center"
    >
      <div className="container mx-auto">
        <div className="">
          <div>
            <p className="mb-1 text-xl text-[#377E86] dark:text-[#11EE55]">
              hi there, my name is
            </p>
            <h2 className="text-5xl font-bold mb-3 uppercase text-[#377E86] dark:text-[#11EE55]">
              Md Toufiq Gilani Rabbu
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl inline-block text-[#F59C5C] dark:text-[#F7B687]">
              <WordRotate
                className="font-bold"
                words={[
                  "WEB DEVELOPER",
                  "MERN DEVELOPER",
                  "FRONTEND DEVELOPER",
                ]}
              />
            </h1>
            <p className="text-lg md:text-xl w-full max-w-xl mt-3">
              A skilled MERN stack developer experienced in building dynamic and
              scalable web applications using modern technologies and industry
              best practices.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                className="tr-btn"
                href="/GilaniRabbu_Mern_Stack_Developer.pdf"
                download="GilaniRabbu_Mern_Stack_Developer.pdf"
              >
                Download CV
              </a>
              <a href="#contact" className="tr-btn">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
