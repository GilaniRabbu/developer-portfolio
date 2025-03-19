"use client";
import React, { useEffect, useState } from "react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";
import "./Header.css";
import "@/components/Styles/Hamburger.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        setMenuOpen(false);
      }, 400);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Profile", href: "#profile" },
    { name: "Skill", href: "#skill" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "http://www.linkedin.com/in/toufiq-gilani-rabbu",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Github",
      href: "https://github.com/GilaniRabbu",
      icon: <FaGithub />,
    },
    {
      name: "Twitter",
      href: "https://x.com/GilaniRabbu",
      icon: <FaXTwitter />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/GilaniRabbu",
      icon: <FaFacebookF />,
    },
  ];

  return (
    <header
      className={`header-area header-3 header-absolute ${
        isScrolled ? "bg-header shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-full flex flex-wrap justify-between items-center">
            <div className="w-full max-w-[60px]">
              <a href="#" className="inline-block">
                <img src="./logo.png" alt="Admin Logo" className="w-full" />
              </a>
            </div>

            <div className="hidden lg:inline-flex">
              <nav className="flex gap-5 items-center relative nav-links">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-nav no-underline nav-link"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="hidden lg:inline-flex">
              <ul className="flex gap-5 m-0 p-0 list-none">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} target="_blank" className="nav-icon">
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="menu-bar lg:hidden">
              <button
                className={`hamburger hamburger--emphatic-r ${
                  isActive ? "is-active" : ""
                }`}
                type="button"
                onClick={toggleMenu}
              >
                <span className="sr-only">Hamburger</span>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>

            <div
              className={`header-menu px-4 py-8 lg:hidden ${
                menuOpen ? "menu-open" : ""
              } ${closing ? "menu-closing" : ""}`}
            >
              <nav className="container mx-auto">
                <ul className="m-0 p-0 list-none flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="no-underline text-3xl">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
