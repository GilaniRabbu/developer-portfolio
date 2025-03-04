import React from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";
import PortfolioCard from "@/components/Portfolio/PortfolioCard";

const ProjectShowcase: React.FC = () => {
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="container mx-auto">
        <AnimatedWord
          text="MyProjects"
          className="text-center mb-20 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
        />
        <PortfolioCard />
      </div>
    </div>
  );
};

export default ProjectShowcase;
