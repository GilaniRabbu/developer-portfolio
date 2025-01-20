import React from "react";
import {
  FaGithub,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";

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
      title: "Facebook",
      link: "https://www.facebook.com/GilaniRabbu",
      icon: <FaFacebookF size={20} />,
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
      title: "Projects",
      link: "#",
    },
    {
      id: 3,
      title: "Skill",
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
    <footer className="py-16 relative flex flex-col items-center gap-8 overflow-hidden bg-[#CBC9C9] dark:bg-[#292424]">
      <div className="flex gap-4 md:gap-6">
        {footerLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 rounded-full border-[#221E1E] dark:border-[#EEF2FF]"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="h-[2px] w-full bg-[#221E1E] dark:bg-[#EEF2FF]"></div>
      <nav className="mt-4 flex gap-4 md:gap-8 flex-col md:flex-row items-center">
        {footerNav.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="relative pb-1 text-3xl font-bonny-bold footer-link after:bg-[#221E1E] dark:after:bg-[#EEF2FF]"
          >
            {item.title}
          </a>
        ))}
      </nav>
      <p className="text-center px-2">
        © {new Date().getFullYear()} All rights reserved by{" "}
        <span className="font-bold">Gilani Rabbu</span>
      </p>
    </footer>
  );
}
