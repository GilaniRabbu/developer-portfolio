import React, { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-stone-100 bg-stone-950 dark:text-stone-950 dark:bg-slate-100"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="z-[999] fixed top-[0] left-[0] bottom-[0] md:w-[400px] w-[200px] bg-stone-950 dark:bg-stone-100"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
