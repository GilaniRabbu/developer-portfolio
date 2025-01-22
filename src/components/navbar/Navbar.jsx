import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { FaSquareGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="h-20 relative">
      <Sidebar />
      <div className="fixed top-5 left-1/2 right-1/2">
        <div className="h-full flex justify-center items-center">
          <motion.div
            className="flex gap-3 py-2 px-5 rounded-full border border-[#377E86] text-[#377E86] dark:border-[#64FFDA] dark:text-[#64FFDA]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href="https://github.com/GilaniRabbu"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaSquareGithub size={24} />
            </motion.a>
            <motion.a
              href="http://www.linkedin.com/in/toufiq-gilani-rabbu"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://x.com/GilaniRabbu"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaSquareXTwitter size={24} />
            </motion.a>
            <ThemeSwitcher />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
