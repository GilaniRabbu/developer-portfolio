import React from "react";
import ThemeMode from "@/components/Theme/ThemeMode";
import Contact from "@/components/Contact/Contact";
import TapeSection from "@/components/Tape/TapeSection";
import Hero from "@/components/Hero/Hero";
import ProjectShowcase from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import Timeline from "@/components/Timeline/Timeline";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <TapeSection />
      <ProjectShowcase />
      <Timeline />
      <Skills />
      <Contact />
      <ThemeMode />
    </main>
  );
}
