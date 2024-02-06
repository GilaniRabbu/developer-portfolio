import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="h-[100px] text-zinc-950 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-950">
      <Sidebar />
      <ThemeSwitcher />
      <div className="max-w-7xl h-full flex justify-center items-center m-auto px-4">
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a href="https://www.facebook.com/GilaniRabbu" target="_blank">
            <svg width="25" height="25" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
              />
            </svg>
          </a>
          <a href="https://twitter.com/GilaniRabbu" target="_blank">
            <svg width="25" height="25" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"
              />
            </svg>
          </a>
          <a href="https://dev.to/gilanirabbu" target="_blank">
            <svg width="25" height="25" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M120.1 208.3c-3.9-2.9-7.8-4.4-11.7-4.4H91v104.5h17.5c3.9 0 7.8-1.5 11.7-4.4 3.9-2.9 5.8-7.3 5.8-13.1v-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32H43.9C19.7 32 .1 51.6 0 75.8v360.4C.1 460.4 19.7 480 43.9 480h360.2c24.2 0 43.8-19.6 43.9-43.8V75.8c-.1-24.2-19.7-43.8-43.9-43.8zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3h-46.4V173h47.4c35.4 0 47.4 28.5 47.4 47.3l0 70.9zm100.7-88.7H201.6v38.4h32.6v29.6H201.6v38.4h53.3v29.6h-62.2c-11.2 .3-20.4-8.5-20.7-19.7V193.7c-.3-11.2 8.6-20.4 19.7-20.7h63.2l0 29.5zm103.6 115.3c-13.2 30.8-36.9 24.6-47.4 0l-38.5-144.8h32.6l29.7 113.7 29.6-113.7h32.6l-38.5 144.8z"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
