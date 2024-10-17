import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import AboutAnimation from "./about-animation.json";

const AboutPage = () => {
  return (
    <div className="py-10 text-zinc-950 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-950">
      <div className="m-auto max-w-screen-xl">
        <div className="flex items-center flex-col md:flex-row">
          <div className="md:w-1/2 w-full">
            <Player
              src={AboutAnimation}
              className="m-auto lg:max-w-[500px] md:max-w-[400px] sm:max-w-80 max-w-[250px]"
              loop
              autoplay
            />
          </div>
          <div className="p-4 w-full text-center md:w-1/2 md:text-left">
            <h3 className="text-xl font-medium">Who Am I ?</h3>
            <h2 className="uppercase mt-2 text-4xl font-serif font-semibold text-indigo-700 dark:text-indigo-400">
              About me
            </h2>
            <p className="mt-5 text-lg font-medium">
              Hi, I'm{" "}
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                Toufiq Gilani Rabbu
              </span>{" "}
              and i am from Dhaka, Bangladesh. Aspiring MERN Stack Developer
              eager to contribute to impactful projects using React.js, Node.js,
              Express.js and MongoDB. Skilled in building dynamic web
              applications with clean code and user-friendly interfaces.
              Committed to continuous learning and staying updated with the
              latest industry trends.
            </p>
            <p className="mt-5 text-lg font-medium">
              I love to create original projects with beautiful designs, you can
              check out some of my work in the portfolio section.
            </p>
            <p className="mt-5 text-lg font-medium">
              I am{" "}
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                open
              </span>{" "}
              to new collaborations or work where I can contribute and grow.
              Feel free to connect with me, links are in the footer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
