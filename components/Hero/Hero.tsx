"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
// import { Player } from "@lottiefiles/react-lottie-player";
// import HeroAnimation from "./hero-animation.json";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      id="intro"
      className="hero-section style-3 pt-40 px-4 pb-16 md:pt-48 md:pb-20 flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex md:gap-8 items-center justify-center">
          <div className="hidden md:block md:w-5/12">
            {/* <div className="text-center">
              <Player
                src={HeroAnimation}
                className="m-auto lg:max-w-[480px] md:max-w-[400px] sm:max-w-80 max-w-[256px]"
                loop
                autoplay
              />
            </div> */}
          </div>
          <div className="md:w-6/12">
            <div>
              <span className="block mb-3 font-bold text-2xl md:text-3xl">
                MD TOUFIQ GILANI
              </span>
              <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl text-[#23412F] md:text-[#F59C5C] dark:text-[#F7B687]">
                <TypeAnimation
                  sequence={["WEB DEVELOPER", 2000, "FULL STACK DEV.", 2000]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
              {/* <div className="md:hidden text-center mb-4">
                <Player
                  src={HeroAnimation}
                  className="m-auto lg:max-w-[480px] md:max-w-[400px] sm:max-w-80 max-w-[256px]"
                  loop
                  autoplay
                />
              </div> */}
              <p className="text-lg md:text-xl w-full max-w-[540px]">
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
