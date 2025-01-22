import React, { useEffect, useState } from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa6";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={handleThemeSwitch} className="cursor-pointer">
      {theme === "light" ? <FaRegCircle size={24} /> : <FaCircle size={24} />}
    </button>
  );
};

export default ThemeSwitcher;
