"use client";

import React, { useState } from "react";
import { IoSunnyOutline, IoMoon, IoSettings } from "react-icons/io5";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const togglePanel = () => setIsOpen(!isOpen);

  const selectTheme = (mode: string) => {
    if (
      (mode === "dark" && theme === "light") ||
      (mode === "light" && theme === "dark")
    ) {
      toggleTheme();
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <div className="relative">
        <div
          className={`
            flex items-center bg-[#CBCBCB]/70 dark:bg-[#37312F]/70
            backdrop-blur rounded-l-lg overflow-hidden
            transition-all duration-300 ease-in-out
            ${isOpen ? "w-[152px]" : "w-12"}
          `}
        >
          <button
            onClick={togglePanel}
            className="flex items-center justify-center w-12 h-10 shrink-0 setting-btn"
          >
            <IoSettings className="w-5 h-5 text-[#050709]/85 dark:text-[#EEF2FF] rotating-icon" />
          </button>
          <div
            className={`
              flex gap-2 p-2 transition-all duration-300 ease-in-out
              ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }
            `}
          >
            <button
              onClick={() => selectTheme("dark")}
              className={`
                flex items-center justify-center w-10 h-10 rounded-md
                ${theme === "dark" ? "bg-[#453E3B]" : "bg-[#BFBFBF]"}
              `}
            >
              <IoMoon
                className={`w-4 h-4 ${
                  theme === "dark" ? "text-[#EEF2FF]" : "text-[#1C1917]"
                }`}
              />
            </button>
            <button
              onClick={() => selectTheme("light")}
              className={`
                flex items-center justify-center w-10 h-10 rounded-md
                ${theme === "light" ? "bg-[#E6E6E6]" : "bg-[#292523]"}
              `}
            >
              <IoSunnyOutline
                className={`w-4 h-4 ${
                  theme === "light" ? "text-[#050709]" : "text-[#EEF2FF]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
