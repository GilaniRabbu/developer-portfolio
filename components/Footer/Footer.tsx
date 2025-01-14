import React from "react";
import { FaGithub, FaXTwitter, FaLinkedinIn, FaCodepen } from "react-icons/fa6";

export default function Footer() {
  const footerLinks = [
    {
      id: 1,
      title: "LinkedIn",
      link: "http://www.linkedin.com/in/toufiq-gilani-rabbu",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      id: 2,
      title: "Github",
      link: "https://github.com/GilaniRabbu",
      icon: <FaGithub size={20} />,
    },
    {
      id: 3,
      title: "Twitter",
      link: "https://x.com/GilaniRabbu",
      icon: <FaXTwitter size={20} />,
    },
    {
      id: 4,
      title: "Codepen",
      link: "https://codepen.io/GilaniRabbu",
      icon: <FaCodepen size={20} />,
    },
  ];

  const footerNav = [
    {
      id: 1,
      title: "About",
      link: "#",
    },
    {
      id: 2,
      title: "Services",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolios",
      link: "#",
    },
    {
      id: 4,
      title: "Blog",
      link: "#",
    },
    {
      id: 5,
      title: "Contact",
      link: "#",
    },
  ];

  return (
    <footer className="py-16 relative flex flex-col items-center gap-8 overflow-hidden text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800">
      <div className="flex gap-4 md:gap-6">
        {footerLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border rounded-full border-gray-900 dark:border-gray-100"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="h-[1px] w-full bg-gray-900 dark:bg-gray-100"></div>
      <nav className="mt-4 flex gap-4 md:gap-8 flex-col md:flex-row items-center">
        {footerNav.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="relative py-1 text-3xl font-bonny-bold footer-link after:bg-gray-900 dark:after:bg-gray-100"
          >
            {item.title}
          </a>
        ))}
      </nav>
      <p className="text-center px-1">
        © {new Date().getFullYear()} All rights reserved by{" "}
        <span className="font-bold">Gilani Rabbu</span>
      </p>
    </footer>
  );
}
