import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Player } from "@lottiefiles/react-lottie-player";
import HeroAnimation from "./hero-animation.json";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const imgVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 py-5">
      <div className="m-auto max-w-screen-xl">
        <div className="flex items-center justify-center flex-col md:flex-row">
          <motion.div
            className="p-3 w-full text-center order-2 md:w-1/2 md:text-left md:order-1 text-stone-950 dark:text-stone-100"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              variants={textVariants}
              className="text-xl sm:text-4xl font-bold tracking-widest"
            >
              TOUFIQ GILANI RABBU
            </motion.h2>
            <motion.h1
              variants={textVariants}
              className="uppercase font-bold my-4 text-3xl md:text-5xl lg:text-6xl"
            >
              <Typewriter
                options={{
                  strings: ["Web Developer", "MERN Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h1>
            <motion.p variants={textVariants} className="md:w-4/5 w-full">
              I am a MERN Stack Developer from Dhaka. Strong understanding of
              modern web technologies and best practices, with a dedication to
              continuous learning and improvement.
            </motion.p>
            <motion.div
              variants={textVariants}
              className="flex gap-4 flex-wrap my-5 justify-center md:justify-start"
            >
              <motion.a
                variants={textVariants}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                href="/Gilani_Rabbu_MERN_Resume.pdf"
                download="Gilani_Rabbu_MERN_Resume.pdf"
                className="font-semibold tracking-widest px-5 py-3 rounded-md cursor-pointer inline-block bg-zinc-950 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950"
              >
                Resume
              </motion.a>
              <motion.button
                variants={textVariants}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="font-semibold tracking-widest px-5 py-3 rounded-md cursor-pointer inline-block bg-zinc-950 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950"
              >
                Contact Me
              </motion.button>
            </motion.div>
            <motion.div
              className="flex gap-4 md:justify-start justify-center"
              variants={textVariants}
            >
              <motion.a
                href="https://github.com/GilaniRabbu"
                target="_blank"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="25" height="25" viewBox="0 0 496 512">
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="https://codepen.io/GilaniRabbu"
                target="_blank"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="25" height="25" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="m237.68 85.43l-104-56a12 12 0 0 0-11.38 0l-104 56A12 12 0 0 0 12 96v64a12 12 0 0 0 6.32 10.57l104 56a12 12 0 0 0 11.38 0l104-56A12 12 0 0 0 244 160V96a12 12 0 0 0-6.32-10.57M220 139.91L197.88 128L220 116.09Zm-47.43-25.54L140 96.83V60.09L206.69 96Zm-44.57 24L108.74 128L128 117.63L147.26 128Zm-12-78.28v36.74l-32.57 17.54L49.31 96Zm-80 56L58.12 128L36 139.91Zm47.43 25.54L116 159.17v36.74L49.31 160ZM140 195.91v-36.74l32.57-17.54L206.69 160Z"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="https://dev.to/gilanirabbu"
                target="_blank"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="25" height="25" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M120.1 208.3c-3.9-2.9-7.8-4.4-11.7-4.4H91v104.5h17.5c3.9 0 7.8-1.5 11.7-4.4 3.9-2.9 5.8-7.3 5.8-13.1v-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32H43.9C19.7 32 .1 51.6 0 75.8v360.4C.1 460.4 19.7 480 43.9 480h360.2c24.2 0 43.8-19.6 43.9-43.8V75.8c-.1-24.2-19.7-43.8-43.9-43.8zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3h-46.4V173h47.4c35.4 0 47.4 28.5 47.4 47.3l0 70.9zm100.7-88.7H201.6v38.4h32.6v29.6H201.6v38.4h53.3v29.6h-62.2c-11.2 .3-20.4-8.5-20.7-19.7V193.7c-.3-11.2 8.6-20.4 19.7-20.7h63.2l0 29.5zm103.6 115.3c-13.2 30.8-36.9 24.6-47.4 0l-38.5-144.8h32.6l29.7 113.7 29.6-113.7h32.6l-38.5 144.8z"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="order-1 w-3/4 md:w-1/2 md:order-2"
            variants={imgVariants}
            initial="initial"
            animate="animate"
          >
            <Player
              src={HeroAnimation}
              className="m-auto lg:max-w-[500px] md:max-w-[400px] sm:max-w-80 max-w-[250px]"
              loop
              autoplay
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
