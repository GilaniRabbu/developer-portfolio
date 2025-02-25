"use client";

import React, { useState } from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";

function Timelines() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-4 text-white uppercase">
        <div className="p-4 bg-indigo-500 rounded shadow">
          <p className="text-sm font-semibold">2023 - Current</p>
          <h3 className="font-semibold text-lg mb-2">MBA in Management</h3>
          <p className="text-sm">National University</p>
        </div>
        <div className="p-4 bg-indigo-500 rounded shadow">
          <p className="text-sm font-semibold">2017 - 2021</p>
          <h3 className="font-semibold text-lg mb-2">BBA in Management</h3>
          <p className="text-sm">National University</p>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="p-5">
      <h2 className="text-3xl font-bold mb-4">My Resume</h2>
      <p>Details about my work experience and skills.</p>
    </section>
  );
}

function Certificates() {
  return (
    <section className="p-5">
      <h2 className="text-3xl font-bold mb-4">Certificates</h2>
      <p>Here are my earned certificates.</p>
    </section>
  );
}

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <AnimatedWord
          text="My Profile"
          className="text-center mb-20 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
        />
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 ${
              activeTab === "timeline"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab("timeline")}
          >
            Education
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "resume"
                ? "bg-sky-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab("resume")}
          >
            Resume
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "certificates"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab("certificates")}
          >
            Certificates
          </button>
        </div>

        <div>
          {activeTab === "timeline" && <Timelines />}
          {activeTab === "resume" && <Resume />}
          {activeTab === "certificates" && <Certificates />}
        </div>
      </div>
    </section>
  );
}
