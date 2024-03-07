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
              <Typewriter
                options={{
                  strings: ["TOUFIQ GILANI RABBU", "BBA", "MBA", "TYPEWRITER"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h2>
            <motion.h1
              variants={textVariants}
              className="uppercase my-4 text-3xl md:text-6xl lg:text-7xl"
            >
              Web Developer
            </motion.h1>
            <motion.p variants={textVariants} className="md:w-4/5 w-full">
              I'm a web developer from Dhaka. Strong understanding of modern web
              technologies and best practices, with a dedication to continuous
              learning and improvement.
            </motion.p>
            <motion.div
              variants={textVariants}
              className="flex gap-4 flex-wrap my-5 justify-center md:justify-start"
            >
              <motion.button
                variants={textVariants}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="font-semibold tracking-widest px-5 py-3 rounded-md cursor-pointer inline-block bg-zinc-950 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950"
              >
                Resume
              </motion.button>
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
              <a href="https://github.com/GilaniRabbu" target="_blank">
                <svg width="25" height="25" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="M212.62 75.17A63.7 63.7 0 0 0 206.39 26A12 12 0 0 0 196 20a63.71 63.71 0 0 0-50 24h-20a63.71 63.71 0 0 0-50-24a12 12 0 0 0-10.39 6a63.7 63.7 0 0 0-6.23 49.17A61.5 61.5 0 0 0 52 104v8a60.1 60.1 0 0 0 45.76 58.28A43.66 43.66 0 0 0 92 192v4H76a20 20 0 0 1-20-20a44.05 44.05 0 0 0-44-44a12 12 0 0 0 0 24a20 20 0 0 1 20 20a44.05 44.05 0 0 0 44 44h16v12a12 12 0 0 0 24 0v-40a20 20 0 0 1 40 0v40a12 12 0 0 0 24 0v-40a43.66 43.66 0 0 0-5.76-21.72A60.1 60.1 0 0 0 220 112v-8a61.5 61.5 0 0 0-7.38-28.83M196 112a36 36 0 0 1-36 36h-48a36 36 0 0 1-36-36v-8a37.87 37.87 0 0 1 6.13-20.12a11.65 11.65 0 0 0 1.58-11.49a39.9 39.9 0 0 1-.4-27.72a39.87 39.87 0 0 1 26.41 17.8a12 12 0 0 0 10.1 5.53h32.35a12 12 0 0 0 10.11-5.53a39.84 39.84 0 0 1 26.41-17.8a39.9 39.9 0 0 1-.4 27.72a12 12 0 0 0 1.61 11.53A37.85 37.85 0 0 1 196 104Z"
                  />
                </svg>
              </a>
              <a href="https://codepen.io/GilaniRabbu" target="_blank">
                <svg width="25" height="25" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="m237.68 85.43l-104-56a12 12 0 0 0-11.38 0l-104 56A12 12 0 0 0 12 96v64a12 12 0 0 0 6.32 10.57l104 56a12 12 0 0 0 11.38 0l104-56A12 12 0 0 0 244 160V96a12 12 0 0 0-6.32-10.57M220 139.91L197.88 128L220 116.09Zm-47.43-25.54L140 96.83V60.09L206.69 96Zm-44.57 24L108.74 128L128 117.63L147.26 128Zm-12-78.28v36.74l-32.57 17.54L49.31 96Zm-80 56L58.12 128L36 139.91Zm47.43 25.54L116 159.17v36.74L49.31 160ZM140 195.91v-36.74l32.57-17.54L206.69 160Z"
                  />
                </svg>
              </a>
              <a
                href="https://framer.com/join/My-Team--T8daoSE7Qmog2eufiaWX"
                target="_blank"
              >
                <svg width="25" height="25" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="M212 96V32a12 12 0 0 0-12-12H56a12 12 0 0 0-8 21l48.44 43H56a12 12 0 0 0-12 12v64a12 12 0 0 0 3.52 8.49l72 72A12 12 0 0 0 140 232v-60h60a12 12 0 0 0 8-21l-48.41-43H200a12 12 0 0 0 12-12m-43.56 52H128a12 12 0 0 0-12 12v43l-48-48v-47h55.44ZM188 84h-55.44l-45-40H188Z"
                  />
                </svg>
              </a>
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
