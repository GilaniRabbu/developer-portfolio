import React from "react";
import { motion } from "framer-motion";

const FooterPage = () => {
  return (
    <div className="py-6 text-center text-zinc-950 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-950">
      <div className="flex gap-5 flex-wrap my-4 justify-center">
        <motion.a
          href="https://www.facebook.com/GilaniRabbu"
          target="_blank"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
            />
          </svg>
        </motion.a>
        <motion.a
          href="https://www.twitch.tv/gilanirabbu"
          target="_blank"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"
            />
          </svg>
        </motion.a>
        <motion.a
          href="https://twitter.com/GilaniRabbu"
          target="_blank"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="32" height="32" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"
            />
          </svg>
        </motion.a>
        <motion.a
          href="https://t.me/GilaniRabbu"
          target="_blank"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
            />
          </svg>
        </motion.a>
        <motion.a
          href="https://codepen.io/GilaniRabbu"
          target="_blank"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="32" height="32" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="m235.79 89l-104-56a8 8 0 0 0-7.58 0l-104 56A8 8 0 0 0 16 96v64a8 8 0 0 0 4.21 7.05l104 56a8 8 0 0 0 7.58 0l104-56A8 8 0 0 0 240 160V96a8 8 0 0 0-4.21-7M224 146.61L189.45 128L224 109.39Zm-51.43-27.7L136 99.22V53.39L215.13 96Zm-44.57 24L100.3 128l27.7-14.91L155.7 128Zm-8-89.52v45.83l-36.57 19.69L40.87 96Zm-88 56L66.55 128L32 146.61Zm51.43 27.7L120 156.78v45.83L40.87 160ZM136 202.61v-45.83l36.57-19.69L215.13 160Z"
            />
          </svg>
        </motion.a>
      </div>
      <p>&copy; 2024 GilaniRabbu. All Rights Reserved</p>
    </div>
  );
};

export default FooterPage;
