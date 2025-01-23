import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { FaSquareGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const navIcon = [
    {
      id: 1,
      icon: <FaSquareGithub size={24} />,
      href: "https://github.com/GilaniRabbu",
      target: "_blank",
    },
    {
      id: 2,
      icon: <FaLinkedin size={24} />,
      href: "http://www.linkedin.com/in/toufiq-gilani-rabbu",
      target: "_blank",
    },
    {
      id: 3,
      icon: <FaSquareXTwitter size={24} />,
      href: "https://x.com/GilaniRabbu",
      target: "_blank",
    },
  ];
  return (
    <div className="h-[100px] relative">
      <Sidebar />
      <div className="fixed top-[29px] right-5 sm:left-1/2 sm:right-1/2 z-50">
        <div className="h-full flex justify-center items-center">
          <motion.div
            className="flex gap-3 p-2 sm:py-2 sm:px-4 rounded-full backdrop-blur-2xl border border-[#377E86] text-[#377E86] dark:border-[#64FFDA] dark:text-[#64FFDA]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {navIcon.map((icon) => (
              <a
                key={icon.id}
                href={icon.href}
                target={icon.target}
                className="hidden sm:block"
              >
                {icon.icon}
              </a>
            ))}
            <ThemeSwitcher />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
