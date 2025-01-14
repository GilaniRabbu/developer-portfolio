import React from "react";
import ThemeMode from "@/components/Theme/ThemeMode";
import Contact from "@/components/Contact/Contact";
import TapeSection from "@/components/Tape/TapeSection";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import Timeline from "@/components/Timeline/Timeline";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TapeSection />
      <Portfolio />
      <Timeline />
      <Skills />
      <Contact />
      <ThemeMode />
    </main>
  );
}
