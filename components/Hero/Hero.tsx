"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="intro" className="hero-section style-3 flex items-center">
      <div className="container mx-auto">
        <div className="flex md:gap-10 items-center">
          <div className="hidden md:block md:w-5/12">
            <div className="hero-image-box text-center">
              <img src="/profile.png" alt="Images" />
            </div>
          </div>
          <div className="md:w-7/12">
            <div>
              <span className="block mb-3 font-bold text-2xl md:text-3xl">
                MD TOUFIQ GILANI
              </span>
              <h1 className="hero-title mb-7 text-3xl md:text-4xl lg:text-5xl">
                <TypeAnimation
                  sequence={[
                    "WEB DEVELOPER",
                    2000,
                    "FULL STACK DEV.",
                    2000,
                    "WEB with NEXT.JS",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
              <div className="hero-image-box md:hidden text-center mb-4">
                <img src="/profile.png" alt="Profile Image" />
              </div>
              <p className="text-lg md:text-xl w-full max-w-[550px]">
                I am a proficient MERN stack developer with expertise in
                building dynamic and scalable web applications.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a href="#" className="tr-btn">
                  Download CV
                </a>
                <a href="#" className="tr-btn">
                  Lets talk!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
