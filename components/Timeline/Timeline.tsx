"use client";

import React, { useState } from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";
import EducationSection from "./Education";

function Timelines() {
  return (
    <div className="p-4">
      <EducationSection />
    </div>
  );
}

function Resume() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">My Resume</h2>
      <p>Details about my work experience and skills.</p>
    </div>
  );
}

function Certificates() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Certificates</h2>
      <p>Here are my earned certificates.</p>
    </div>
  );
}

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" id="profile">
      <div className="container mx-auto">
        <AnimatedWord
          text="My Profile"
          className="text-center mb-20 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
        />
        <div className="flex justify-center flex-wrap items-center gap-4 mb-6">
          <button
            className={`p-2 border-b ${
              activeTab === "education"
                ? "border-b-indigo-600 text-indigo-600 dark:border-b-indigo-400 dark:text-indigo-400"
                : "border-b-black dark:border-b-white text-black dark:text-white"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={`p-2 border-b ${
              activeTab === "resume"
                ? "border-b-sky-600 text-sky-600 dark:border-b-sky-400 dark:text-sky-400"
                : "border-b-black dark:border-b-white text-black dark:text-white"
            }`}
            onClick={() => setActiveTab("resume")}
          >
            Resume
          </button>
          <button
            className={`p-2 border-b ${
              activeTab === "certificates"
                ? "border-b-green-600 text-green-600 dark:border-b-green-400 dark:text-green-400"
                : "border-b-black dark:border-b-white text-black dark:text-white"
            }`}
            onClick={() => setActiveTab("certificates")}
          >
            Certificates
          </button>
        </div>
        <div>
          {activeTab === "education" && <Timelines />}
          {activeTab === "resume" && <Resume />}
          {activeTab === "certificates" && <Certificates />}
        </div>
      </div>
    </section>
  );
}
