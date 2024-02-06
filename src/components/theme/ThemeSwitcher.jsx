import React, { useEffect, useState } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";

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
    <div>
      <button
        onClick={handleThemeSwitch}
        className="fixed cursor-pointer z-[999] top-[38px] right-[15px]"
      >
        <img src={theme === "light" ? Sun : Moon} alt="..." />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
