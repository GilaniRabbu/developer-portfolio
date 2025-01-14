"use client";

import React, { useEffect, useState } from "react";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGitAlt,
  FaCode,
  FaSass,
  FaGithub,
  FaFigma,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiJquery,
} from "react-icons/si";
import "./Skills.css";

interface IconProps {
  Icon: React.ElementType;
  angle: number;
}

const SkillOrbit: React.FC = () => {
  const [outerRotation, setOuterRotation] = useState<number>(0);
  const [middleRotation, setMiddleRotation] = useState<number>(0);
  const [innerRotation, setInnerRotation] = useState<number>(0);

  useEffect(() => {
    const outerInterval = setInterval(() => {
      setOuterRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    const middleInterval = setInterval(() => {
      setMiddleRotation((prev) => (prev - 0.75) % 360);
    }, 50);
    const innerInterval = setInterval(() => {
      setInnerRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => {
      clearInterval(outerInterval);
      clearInterval(middleInterval);
      clearInterval(innerInterval);
    };
  }, []);

  const outerIcons: IconProps[] = [
    { Icon: BiLogoTypescript, angle: 0 },
    { Icon: BiLogoJavascript, angle: 45 },
    { Icon: FaReact, angle: 90 },
    { Icon: SiNextdotjs, angle: 135 },
    { Icon: FaNodeJs, angle: 180 },
    { Icon: SiExpress, angle: 225 },
    { Icon: SiMongodb, angle: 270 },
    { Icon: SiFirebase, angle: 315 },
  ];

  const middleIcons: IconProps[] = [
    { Icon: FaGitAlt, angle: 0 },
    { Icon: FaGithub, angle: 60 },
    { Icon: FaFigma, angle: 120 },
    { Icon: SiPostman, angle: 180 },
    { Icon: SiJquery, angle: 240 },
    { Icon: FaSass, angle: 300 },
  ];

  const innerIcons: IconProps[] = [
    { Icon: FaHtml5, angle: 0 },
    { Icon: FaCss3Alt, angle: 90 },
    { Icon: SiTailwindcss, angle: 180 },
    { Icon: FaBootstrap, angle: 270 },
  ];

  const renderIcons = (
    icons: IconProps[],
    rotation: number,
    radius: string
  ) => {
    return icons.map(({ Icon, angle }, index) => {
      const adjustedAngle = angle + rotation;
      const x = `calc(50% + ${radius} * cos(${adjustedAngle}deg))`;
      const y = `calc(50% + ${radius} * sin(${adjustedAngle}deg))`;

      return (
        <div
          key={`${radius}-${index}`}
          className="absolute transition-all duration-100"
          style={{
            left: x,
            top: y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Icon className="orbit-icon" />
        </div>
      );
    });
  };

  return (
    <section className="relative size-full flex items-center justify-center">
      <div className="relative orbit">
        {/* Outer Orbit */}
        <div className="absolute inset-0 border-2 border-gray-900/25 dark:border-gray-100/25 rounded-full" />
        {/* Middle Orbit */}
        <div className="absolute inset-10 border-2 border-gray-900/25 dark:border-gray-100/25 rounded-full" />
        {/* Inner Orbit */}
        <div className="absolute inset-20 border-2 border-gray-900/25 dark:border-gray-100/25 rounded-full" />

        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="orbit-title">
            <FaCode />
          </h1>
        </div>

        {renderIcons(outerIcons, outerRotation, "calc(50% - 2px)")}
        {renderIcons(middleIcons, middleRotation, "calc(50% - 42px)")}
        {renderIcons(innerIcons, innerRotation, "calc(50% - 82px)")}
      </div>
    </section>
  );
};

export default SkillOrbit;
