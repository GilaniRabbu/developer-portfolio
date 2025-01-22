import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Player } from "@lottiefiles/react-lottie-player";
import HeroAnimation from "./hero-animation.json";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

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
  const Icons = [
    {
      id: 1,
      icon: <FaReact size={24} />,
      title: "React.js",
    },
    {
      id: 2,
      icon: <SiNextdotjs size={24} />,
      title: "Next.js",
    },
    {
      id: 3,
      icon: <FaNodeJs size={24} />,
      title: "Node.js",
    },
    {
      id: 4,
      icon: <SiExpress size={24} />,
      title: "Express.js",
    },
    {
      id: 5,
      icon: <SiMongodb size={24} />,
      title: "Mongodb",
    },
  ];

  return (
    <div className="py-10 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4 flex-col md:flex-row">
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              variants={textVariants}
              className="text-2xl font-bold tracking-widest"
            >
              TOUFIQ GILANI RABBU
            </motion.h2>
            <motion.h1
              variants={textVariants}
              className="uppercase font-bold my-4 text-4xl lg:text-6xl"
            >
              <Typewriter
                options={{
                  strings: ["Web Developer", "MERN Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="w-full md:w-4/5 font-bold"
            >
              I am a proficient MERN stack developer with expertise in building
              dynamic and scalable web applications.
            </motion.p>
            <motion.div
              variants={textVariants}
              className="flex gap-4 flex-wrap mt-4 justify-center md:justify-start"
            >
              <motion.a
                variants={textVariants}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                href="/Gilani_Rabbu_Mern_Stack_Developer.pdf"
                download="Gilani_Rabbu_Mern_Stack_Developer.pdf"
                className="font-semibold tracking-widest px-5 py-3 rounded-md cursor-pointer inline-block bg-primary text-secondary"
              >
                Resume
              </motion.a>
              <motion.button
                variants={textVariants}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="font-semibold tracking-widest px-5 py-3 rounded-md cursor-pointer inline-block bg-primary text-secondary"
              >
                Contact Me
              </motion.button>
            </motion.div>
            <motion.div
              className="flex gap-5 flex-wrap mt-8 justify-center md:justify-start"
              variants={textVariants}
            >
              {Icons.map((icon) => (
                <motion.div
                  key={icon.id}
                  title={icon.title}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex justify-center items-center heartbeat cursor-pointer rounded-full p-3 text-[#FFFFFF] dark:text-[#221E1E] bg-[#377E86] dark:bg-[#659477]"
                >
                  {icon.icon}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="order-1 w-full md:w-1/2 md:order-2"
            variants={imgVariants}
            initial="initial"
            animate="animate"
          >
            <Player
              src={HeroAnimation}
              className="m-auto max-w-64 sm:max-w-80 md:max-w-[400px] lg:max-w-[480px]"
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
