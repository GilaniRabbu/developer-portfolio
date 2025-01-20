import React from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";
import { Tooltip } from "react-tooltip";

export default function Contact() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <AnimatedWord
          text="ContactMe"
          className="text-center mb-10 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="mb-10 w-full md:w-3/5 mx-auto text-center text-lg tracking-wide">
            I&#39;m eager to join a collaborative team where I can contribute my
            skills and learn from others. If you have an exciting project,
            let&#39;s discuss how I can be a valuable asset. I&#39;m actively
            seeking a new opportunity to apply my skills and continue growing!
          </p>
          <a
            className="mb-8 text-lg px-6 py-4 rounded flex items-center justify-center border-2 text-[#239982] border-[#239982] mail-btn"
            target="_blank"
            href="mailto:toufiqjilanirabbu@gmail.com"
          >
            Send Mail
          </a>
        </div>
      </div>
    </section>
  );
}
