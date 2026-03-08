"use client";

import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  // { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          GILANI.IO
        </motion.a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-1 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="px-4 py-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
            </motion.a>
          ))}

          {/* Theme toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 p-2 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>
          )}
        </div>

        {/* Mobile menu button and theme toggle */}
        <div className="md:hidden flex gap-2 items-center">
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>
          )}
          <button
            className="p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-card border-b border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
