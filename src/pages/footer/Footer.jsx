import React from "react";
import { motion } from "framer-motion";

const FooterPage = () => {
  return (
    <div className="py-6 text-center text-zinc-950 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-950">
      <div className="flex gap-5 flex-wrap my-4 justify-center">
        <motion.a
          href="https://www.facebook.com/GilaniRabbu"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 360, skew: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="32" height="32" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
            />
          </svg>
        </motion.a>
        <motion.a
          href="https://t.me/GilaniRabbu"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 360, skew: 5 }}
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
          href="https://www.linkedin.com/in/toufiq-gilani-rabbu/"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 360, skew: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="32" height="32" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            />
          </svg>
        </motion.a>
        <motion.a
          href="https://codepen.io/GilaniRabbu"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 360, skew: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="32" height="32" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="m235.79 89l-104-56a8 8 0 0 0-7.58 0l-104 56A8 8 0 0 0 16 96v64a8 8 0 0 0 4.21 7.05l104 56a8 8 0 0 0 7.58 0l104-56A8 8 0 0 0 240 160V96a8 8 0 0 0-4.21-7M224 146.61L189.45 128L224 109.39Zm-51.43-27.7L136 99.22V53.39L215.13 96Zm-44.57 24L100.3 128l27.7-14.91L155.7 128Zm-8-89.52v45.83l-36.57 19.69L40.87 96Zm-88 56L66.55 128L32 146.61Zm51.43 27.7L120 156.78v45.83L40.87 160ZM136 202.61v-45.83l36.57-19.69L215.13 160Z"
            />
          </svg>
        </motion.a>
        <motion.a
          href="https://twitter.com/GilaniRabbu"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 360, skew: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="32" height="32" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"
            />
          </svg>
        </motion.a>
      </div>
      <p>&copy; 2024 GilaniRabbu. All Rights Reserved</p>
    </div>
  );
};

export default FooterPage;
