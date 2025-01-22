import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import AboutAnimation from "./about-animation.json";

const AboutPage = () => {
  return (
    <div className="py-10 px-4">
      <div className="container mx-auto">
        <div className="flex items-center flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Player
              src={AboutAnimation}
              className="m-auto max-w-60 sm:max-w-80 md:max-w-[400px] lg:max-w-[480px]"
              loop
              autoplay
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-serif text-primary">About Me</h2>
            <p className="mt-5 text-lg font-bold">
              Hi, I'm{" "}
              <span className="uppercase text-primary">
                Toufiq Gilani Rabbu
              </span>{" "}
              and i am from Dhaka, Bangladesh. As a dedicated full stack
              developer, I am eager to embark on a journey of continuous
              learning and growth in the dynamic world of web development. With
              a solid foundation in HTML, CSS, JavaScript, React and Next.js. I
              am excited to apply my skills and contribute to innovative
              projects.
            </p>
            <p className="mt-5 text-lg font-bold">
              I am <span className="text-primary">open</span> to new
              collaborations or work where I can contribute and grow. Feel free
              to connect with me, links are in the footer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
