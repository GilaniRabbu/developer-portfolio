"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      id="intro"
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
              <span className="block mb-3 font-bold text-2xl md:text-3xl">
                Hi, I am Gilani
              </span>
              <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl text-[#23412F] md:text-[#F59C5C] dark:text-[#F7B687]">
                <TypeAnimation
                  sequence={["WEB DEV.", 2000, "MERN DEV.", 2000]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
              <div className="md:hidden text-center mb-4">
                <img
                  src="/profile.png"
                  alt="Admin Image"
                  className="mx-auto rounded-3xl w-full md:max-w-[400px] sm:max-w-80 max-w-[256px]"
                />
              </div>
              <p className="text-lg md:text-xl w-full max-w-xl">
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
